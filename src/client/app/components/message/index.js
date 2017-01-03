import { h, Component } from 'preact';

export default class Message extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
      this.updateInterval = setInterval(() => this.forceUpdate(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.updateInterval);
  }

  render() {
    const elapsed = window.helper.handleElapsedTime(this.props.elapsed, this.props.runningSince);
    const spendedMoney = window.helper.countSpendedMoney(this.props.elapsed, this.props.runningSince, this.props.salary);
    return (
      <p>Palaveri on kustantanut { spendedMoney } euroa. Se on kestänyt { elapsed }. Siihen osallistuu { this.props.persons } henkilöä. Keskipalkka on { this.props.salary } euroa.</p>
    )
  }
}
