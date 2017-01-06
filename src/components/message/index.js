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
        <p className={`${styles.text} ${styles.timer}`}>
          { this.state.elapsed }
        </p>

        <p className={`${styles.text} ${styles.money}`}>
          { this.state.spendedMoney } €
        </p>
      </div>
    )
  }
}
