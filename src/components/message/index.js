import { h, Component } from 'preact';
import styles from './message.css';

export default class Message extends Component {
  render() {
    const style = this.props.runningSince ? `${styles.text}` : `${styles.text} ${styles.textPaused}`;
    return(
      <section className={ styles.flexItem }>
        <h3 className={ styles.header }>{ this.props.header }</h3>
        <p className={ style }>{ this.props.body }</p>
      </section>
    )
  }
}
/*
this.props.runningSince ? `${styles.text}` : `${styles.text} ${styles.textPaused}`;
*/
