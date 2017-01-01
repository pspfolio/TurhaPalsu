import { h, Component } from 'preact';

export default class Message extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
      this.updateInterval = setInterval(() => this.forceUpdate(), 500);
  }

  componentWillUnmount() {
    clearInterval(this.updateInterval);
  }

  render() {
    const elapsed = window.helper.handleElapsedTime(this.props.elapsed, this.props.runningSince);
    return (
      <p>Palaveri on kustantanut 59 euroa. Se on kestänyt { elapsed }. Siihen osallistuu 6 henkilöä</p>
    )
  }
}
