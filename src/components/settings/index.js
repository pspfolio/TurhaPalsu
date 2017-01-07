import { h, Component } from 'preact';
import Input from '../input';
import styles from './settings.css';

export default class Settings extends Component {
  constructor(props) {
    super(props);

    this.handlePlayClick = this.handlePlayClick.bind(this);
    this.handleRestartClick = this.handleRestartClick.bind(this);
    this.handleSalaryChanged = this.handleSalaryChanged.bind(this);
  }

  handlePlayClick() {
    this.props.runningSince ? this.props.handleTimerPause() : this.props.handleTimerStart();
  }

  handleRestartClick() {
    this.props.handleTimerRestart();
  }

  handleSalaryChanged(event) {
    const value = event.target.value;
    this.props.handleSalaryAdded(value);
  }

  render() {
    return (
      <div className={ styles.container }>
        <div className={ styles.settings }>
          <div className={ styles.item }>

            <h3 className={ styles.counterHeader }>Osallistujia</h3>
              <span className={ `${styles.counterButton} ${styles.counter}` } onClick={ () => { this.props.handleCounter('DECREMENT', 'persons', 1) } }>-</span>
              <span className={ styles.counter }>{ this.props.persons }</span>
              <span className={ `${styles.counterButton} ${styles.counter}` } onClick={ () => { this.props.handleCounter('INCREMENT', 'persons', 1) } }>+</span>

          </div>
          <div className={ styles.item }>

            <h3 className={ styles.counterHeader }>Keskipalkka / €</h3>
              <span className={ `${styles.counterButton} ${styles.counter}` } onClick={ () => { this.props.handleCounter('DECREMENT', 'salary', 5) } }>-</span>
              <span className={ styles.counter }>{ this.props.salary }</span>
              <span className={ `${styles.counterButton} ${styles.counter}` } onClick={ () => { this.props.handleCounter('INCREMENT', 'salary', 5) } }>+</span>

          </div>
        </div>

        <div className={ styles.settings }>
          <div className={ styles.item }>
            {
              this.props.runningSince ?
              <img onClick={ this.handlePlayClick } class={styles.btn} src='src/images/pause.svg' alt='pause' /> :
              <img onClick={ this.handlePlayClick } class={styles.btn} src='src/images/play.svg' alt='play' />
            }
          </div>

          <div className={ styles.item }>
            <img className={ styles.item } onClick={ this.handleRestartClick } class={styles.btn} src='src/images/restart.svg' alt='play' />
          </div>
        </div>
      </div>
    )
  }
}
