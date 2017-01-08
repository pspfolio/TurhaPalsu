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
    const style = this.props.runningSince ? `${styles.text} ${styles.timer}` : `${styles.text} ${styles.timer} ${styles.textPaused}`;
    return (
      <div className={styles.flexitem}>
        <p className={style}>
          <p className={styles.header}>Aikaa tuhlattu</p>
          { this.state.elapsed }
        </p>

        <p className={style}>
          <p className={styles.header}>Rahaa poltettu</p>
          { this.state.spendedMoney }
        </p>
      </div>
    )
  }
}
