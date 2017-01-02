import { h, Component } from 'preact';
import Header from '../header';
import Message from '../message';
import Settings from '../settings';

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
    this.handlePersonsAdded = this.handlePersonsAdded.bind(this);
  }

  handleTimerPause() {
    const elapsed = Date.now() - this.state.runningSince;
    this.setState({ elapsed, runningSince: null });
  }

  handleTimerStart() {
    this.setState({ runningSince: Date.now() });
  }

  handleTimerRestart() {
    this.setState({ runningSince: null, elapsed: 0 });
  }

  handlePersonsAdded(num) {
    this.setState({ persons: num })
    console.log(this.state)
  }

  render() {
    return (
      <div className='content'>
        <Header />
        <Message
          persons={ this.state.persons }
          runningSince={ this.state.runningSince }
          elapsed={ this.state.elapsed }/>
        <Settings
          runningSince={ this.state.runningSince }
          handlePersonsAdded={ this.handlePersonsAdded }
          handleTimerStart={ this.handleTimerStart }
          handleTimerRestart={ this.handleTimerRestart }
          handleTimerPause={ this.handleTimerPause } />
      </div>
    )
  }
}
