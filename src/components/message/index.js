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
    const style = this.props.runningSince ? `${styles.text}` : `${styles.text} ${styles.textPaused}`;
    return (
      <div className={ styles.container }>
        <div className={ styles.flexItem }>
          <h3 className={ styles.header }>Aikaa kulunut</h3>
          <p className={ style }>{ this.state.elapsed }</p>
        </div>

        <div className={ styles.flexItem }>
          <h3 className={ styles.header }>Rahaa poltettu</h3>
          <p className={ style }>{ this.state.spendedMoney }</p>
        </div>
      </div>
    )
  }
}
