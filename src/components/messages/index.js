import { h, Component } from 'preact';
import Message from '../message';
import styles from './messages.css';

export default class Messages extends Component {

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
      <div>
        <div className={ styles.flexContainer }>
          <Message header="Aikaa kulunut"  body={ this.state.elapsed } runningSince={ this.props.runningSince } />
          <Message header="Rahaa poltettu" body={ `${this.state.spendedMoney} €` } runningSince={ this.props.runningSince } />
        </div>
      </div>
    )
  }
}
