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
      salary: 0.00,
      elapsed: 0,
      runningSince: null
    }

    this.handleTimerPause = this.handleTimerPause.bind(this);
    this.handleTimerStart = this.handleTimerStart.bind(this);
    this.handleTimerRestart = this.handleTimerRestart.bind(this);
    this.handlePersonsAdded = this.handlePersonsAdded.bind(this);
    this.handleSalaryAdded = this.handleSalaryAdded.bind(this);
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

  handlePersonsAdded(num) {
    this.setState({ persons: num })
  }

  handleSalaryAdded(salary) {
    if(salary < 0) salary = 0.00;
    this.setState({ salary })
  }

  render() {
    return (
      <div className={styles.app}>
        <Header />
        <Message
          salary={ this.state.salary }
          persons={ this.state.persons }
          runningSince={ this.state.runningSince }
          elapsed={ this.state.elapsed }/>
        <Settings
          runningSince={ this.state.runningSince }
          handleSalaryAdded={ this.handleSalaryAdded }
          handlePersonsAdded={ this.handlePersonsAdded }
          handleTimerStart={ this.handleTimerStart }
          handleTimerRestart={ this.handleTimerRestart }
          handleTimerPause={ this.handleTimerPause } />
      </div>
    )
  }
}
