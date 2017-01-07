import { h, Component } from 'preact';
import Input from '../input';
import styles from './settings.css';

export default class Settings extends Component {
  constructor(props) {
    super(props);

    this.handlePlayClick = this.handlePlayClick.bind(this);
    this.handleRestartClick = this.handleRestartClick.bind(this);
    this.handlePersonsChanged = this.handlePersonsChanged.bind(this);
    this.handleSalaryChanged = this.handleSalaryChanged.bind(this);
  }

  handlePlayClick() {
    this.props.runningSince ? this.props.handleTimerPause() : this.props.handleTimerStart();
  }

  handleRestartClick() {
    this.props.handleTimerRestart();
  }

  handlePersonsChanged(event) {
    const value = event.target.value;
    this.props.handlePersonsAdded(value);
  }

  handleSalaryChanged(event) {
    const value = event.target.value;
    this.props.handleSalaryAdded(value);
  }

  render() {
    return (
      <div>
        <div className={ styles.settings }>
          <Input className={ styles.item } handler={ this.handlePersonsChanged } text={ 'Osallistujia' } id={ 'persons' } icon={ 'persons' } type={ 'number '} />
          <Input className={ styles.item } handler={ this.handleSalaryChanged } text={ 'Keskipalkka' } id={ 'salary' } icon={ 'salary' } type={ 'number' } />
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
