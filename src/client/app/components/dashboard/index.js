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
      elapsed: 5456099,
      runningSince: Date.now()
    }
  }

  render() {
    return (
      <div className='content'>
        <Header />
        <Message runningSince={ this.state.runningSince } elapsed={ this.state.elapsed }/>
        <Settings />
      </div>
    )
  }
}
