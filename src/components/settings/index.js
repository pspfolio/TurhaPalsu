import { h, Component } from 'preact';
import Counter from '../counter';
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
      <div>
        <div className={ styles.settings }>
          <div className={ styles.item }>
            <Counter
              header={ 'Osallistujia' }
              handler={ this.props.handleCounter }
              target={ 'persons' }
              amount={ 1 }
              value={ this.props.persons } />
          </div>
          <div className={ styles.item }>
            <Counter
              header={ 'Keskipalkka' }
              handler={ this.props.handleCounter }
              target={ 'salary' }
              amount={ 5 }
              value={ this.props.salary } />
          </div>
        </div>

        <div className={ `${ styles.settings } ${ styles.icons }` }>
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
