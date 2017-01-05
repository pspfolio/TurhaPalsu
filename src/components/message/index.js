import { h, Component } from 'preact';
import styles from './message.css';

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
      this.updateInterval = setInterval(this.tick, 50);
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
      <div className={styles.flexitem}>
        <ul className={styles.message}>
          <li>Palaveri on kustantanut <span className={styles.bigger}>{ this.state.spendedMoney }</span> €.</li>
          <li>Se on kestänyt jo <span className={styles.bigger}>{ this.state.elapsed }</span>.</li>
          <li>Siihen osallistuu <span className={styles.bigger}>{ this.props.persons }</span> henkilöä.</li>
          <li>Sen keskipalkka on <span className={styles.bigger}>{ this.props.salary }</span> €.</li>
        </ul>
      </div>
    )
  }
}
