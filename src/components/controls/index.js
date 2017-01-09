import { h, Component } from 'preact';
import styles from './controls.css';

export default class Controls extends Component {
  constructor(props) {
    super(props)

    this.handlePlayClick = this.handlePlayClick.bind(this);
    this.handleRestartClick = this.handleRestartClick.bind(this);
  }

  handlePlayClick() {
    this.props.runningSince ? this.props.handleTimerPause() : this.props.handleTimerStart();
  }

  handleRestartClick() {
    this.props.handleTimerRestart();
  }

  render() {
    return(
      <div className={ styles.settings }>
        <div className={ styles.item }>
          {
            this.props.runningSince ?
            <img onClick={ this.handlePlayClick } class={ styles.btn } src='src/images/pause.svg' alt='pause' /> :
            <img onClick={ this.handlePlayClick } class={ styles.btn } src='src/images/play.svg' alt='play' />
          }
        </div>

        <div className={ styles.item }>
          <img className={ styles.item } onClick={ this.handleRestartClick } class={ styles.btn } src='src/images/restart.svg' alt='play' />
        </div>
      </div>
    )
  }
}
