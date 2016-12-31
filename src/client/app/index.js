import { h, render, Component } from 'preact';
import Header from './components/header';

class App extends Component {
  render() {
    return <Header />
  }
}

render(<App />, document.getElementById('app'))
