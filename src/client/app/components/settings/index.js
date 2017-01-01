import { h, Component } from 'preact';

export default class Settings extends Component {
  constructor() {
    super();

    this.handlePlayClick = this.handlePlayClick.bind(this);
    this.handleRestartClick = this.handleRestartClick.bind(this);
  }

  handlePlayClick() {
    console.log("Play clicked");
  }

  handleRestartClick() {
    console.log("Restart clicked")
  }

  render() {
    return (
      <div className='settings'>
        <label for='persons'>Henkilöitä</label>
        <input type='number' id='persons' />

        <label for='salary'>Avg tuntipalkka</label>
        <input type='number' id='salary' />

        <div onClick={ this.handlePlayClick } className='btn-play'>
          <h3>Play</h3>
        </div>

        <div onClick={ this.handleRestartClick } className='btn-play'>
          <h3>Restart</h3>
        </div>
      </div>
    )
  }
}
