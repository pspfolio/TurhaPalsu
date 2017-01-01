import { h, Component } from 'preact';
import Header from '../header';
import Message from '../message';
import Settings from '../settings';

export default class Dashboard extends Component {
  render() {
    return (
      <div className='content'>
        <Header />
        <Message />
        <Settings />
      </div>
    )
  }
}
