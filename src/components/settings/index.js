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
        <div className={styles.settings}>
          <Input handler={this.handlePersonsChanged} text={'Osallistujia'} icon={'persons'} />
          <Input handler={this.handleSalaryChanged} text={'Keskipalkka'} icon={'salary'} />
        </div>
        <div onClick={ this.handlePlayClick } className='btn-play'>
          {
            this.props.runningSince ? <h3>Pause</h3> : <h3>Play</h3>
          }
        </div>
        <div onClick={ this.handleRestartClick } className='btn-play'>
          <h3>Restart</h3>
        </div>
      </div>
    )
  }
}
