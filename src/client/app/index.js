import { h, render, Component } from 'preact';
import Header from './components/header';
import Message from './components/message';
import Settings from './components/settings';

class App extends Component {
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

render(<App />, document.getElementById('app'))
