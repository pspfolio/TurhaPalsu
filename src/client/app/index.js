import { h, render, Component } from 'preact';
import Dashboard from './components/dashboard';

class App extends Component {
  render() {
    return (
      <Dashboard />
    )
  }
}

render(<App />, document.getElementById('app'))
