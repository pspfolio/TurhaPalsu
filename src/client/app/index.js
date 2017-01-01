import { h, render, Component } from 'preact';
import Header from './components/header';
import Message from './components/message';

class App extends Component {
  render() {
    return (
      <div className='content'>
        <Header />
        <Message />
      </div>
    )
  }
}

render(<App />, document.getElementById('app'))
