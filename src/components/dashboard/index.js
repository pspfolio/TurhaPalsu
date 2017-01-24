import { h, Component } from 'preact';
import Header from '../header';
import Messages from '../messages';
import Counters from '../counters';
import Controls from '../controls';

import styles from './dashboard.css';

export default class Dashboard extends Component {

  constructor() {
    super();

    this.state = {
      persons: 5,
      salary: 45,
      elapsed: 0,
      runningSince: null,
    }

    this.handleTimerPause = this.handleTimerPause.bind(this);
    this.handleTimerStart = this.handleTimerStart.bind(this);
    this.handleTimerRestart = this.handleTimerRestart.bind(this);
    this.handleCounter = this.handleCounter.bind(this);
  }

  /*
    Asetetaan timerin pause tilaan. Tallennetaan dashboardin tilaan kulunut aika,
    josta jatkeaan, kun painetaan play painiketta
   */
  handleTimerPause() {
    const lastElapsed = Date.now() - this.state.runningSince;
    const elapsed = lastElapsed + this.state.elapsed;
    this.setState({ elapsed, runningSince: null });
  }

  /*
    Käynnistetään ajastin  asettamalla käynnistyksen aloitusajankohta.
  */
  handleTimerStart() {
    this.setState({ runningSince: Date.now() });
  }

/*
  Asetetaan oletusarvot ajastimelle, kun se resetoidaan
*/
  handleTimerRestart() {
    this.setState({ runningSince: null, elapsed: 0 });
  }

/*
  Lisätään tilaan salary tai persons (target) joko +1 tai -1
  riippuen minkä tyyppinen action meille tulee
*/
  handleCounter(type, target, amount) {
    this.setState((prevState) => {
      switch (type) {
        case 'INCREMENT':
          return {
            [target]: prevState[target] + amount
          }
        case 'DECREMENT':
          if(this.state[target] > 1) {
            return {
              [target]: prevState[target] - amount
            }
          }
        default:
          return prevState;
      }
    })
  }


  render() {
    return (
      <div>
        <Header />
      <div className={ styles.app }>
        <Messages {...this.state} />
        <Counters persons={ this.state.persons } salary={ this.state.salary} handleCounter={ this.handleCounter } />
        <Controls
          handleTimerPlayOrPause={ this.state.runningSince ? this.handleTimerPause : this.handleTimerStart }
          iconPath={ this.state.runningSince ? 'pause.svg' : 'play.svg' }
          handleTimerRestart={ this.handleTimerRestart }
        />
      </div>
    </div>
    )
  }
}
