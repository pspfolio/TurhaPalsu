import { h, Component } from 'preact';
import Header from '../header';
import Message from '../message';
import Settings from '../settings';

import styles from './dashboard.css';

export default class Dashboard extends Component {

  constructor() {
    super();
    this.state = {
      persons: 0,
      salary: 0,
      elapsed: 0,
      runningSince: null
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

  handleTimerRestart() {
    this.setState({ runningSince: null, elapsed: 0 });
  }

  handleCounter(type, target, amount) {
    this.setState((prevState) => {
      switch (type) {
        case 'INCREMENT':
          return {
            [target]: prevState[target] + amount
          }
          break;
        case 'DECREMENT':
          if(this.state[target] > 0) {
            return {
              [target]: prevState[target] - amount
            }
          }
          break;
        default:
          return prevState;
      }
    })
  }


  render() {
    return (
      <div>
        <Header />
        <section className={styles.context}>
          <Message
            salary={ this.state.salary }
            persons={ this.state.persons }
            runningSince={ this.state.runningSince }
            elapsed={ this.state.elapsed }/>
        </section>
        <section className={styles.context}>
          <Settings
            persons={ this.state.persons }
            salary={ this.state.salary}
            runningSince={ this.state.runningSince }
            handleCounter={ this.handleCounter }
            handleTimerStart={ this.handleTimerStart }
            handleTimerRestart={ this.handleTimerRestart }
            handleTimerPause={ this.handleTimerPause } />
        </section>
      </div>
    )
  }
}
