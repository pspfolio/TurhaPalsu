import { h, render, Component } from 'preact';

class HelloWorld extends Component {
  render() {
    const hello = 'helaaa'
    return <span>{ `${hello} world` }</span>
  }
}

render(<HelloWorld />, document.getElementById('app'))
