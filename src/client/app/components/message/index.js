import { h, Component } from 'preact';

export default class Message extends Component {

  constructor(props) {
    super(props);

    this.state = {
      elapsed: '00:00:00',
      spendedMoney: 0.00
    }

    this.tick = this.tick.bind(this);
  }

  componentDidMount() {
      this.updateInterval = setInterval(this.tick, 500);
  }

  componentWillUnmount() {
    clearInterval(this.updateInterval);
  }

  tick() {
    const { handleElapsedTime, countSpendedMoney } = window.helper;
    const elapsed = handleElapsedTime(this.props.elapsed, this.props.runningSince);
    const spendedMoney = countSpendedMoney(this.props.elapsed, this.props.runningSince, this.props.salary, this.props.persons);
    this.setState({ spendedMoney, elapsed });
  }

  render() {
    return (
      <p>Palaveri on kustantanut { this.state.spendedMoney } euroa. Se on kestänyt { this.state.elapsed }. Siihen osallistuu { this.props.persons } henkilöä. Keskipalkka on { this.props.salary } euroa.</p>
    )
  }
}
