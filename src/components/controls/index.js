import { h, Component } from 'preact';
import styles from './controls.css';

export default ({ handleTimerPlayOrPause, handleTimerRestart, iconPath}) => (
  <div className={ styles.settings }>
    <div className={ styles.item }>
        <img onClick={ handleTimerPlayOrPause } className={ styles.btn } src={ `./images/${iconPath}` } alt='icon' />
    </div>

    <div className={ styles.item }>
      <img onClick={ handleTimerRestart } className={ styles.btn } src='./images/restart.svg' alt='restart' />
    </div>
  </div>
)
