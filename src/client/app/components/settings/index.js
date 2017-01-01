import { h, Component } from 'preact';

export default class Settings extends Component {
  constructor(props) {
    super(props);

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
    return (
      <div className='settings'>
        <label for='persons'>Henkilöitä</label>
        <input type='number' id='persons' />

        <label for='salary'>Avg tuntipalkka</label>
        <input type='number' id='salary' />

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
