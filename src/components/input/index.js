import { h, Component } from 'preact';
import styles from './input.css';

export default class Input extends Component {
  render() {
    return(
      <div className={ styles.item }>
        <input className={ `${styles.input} ${styles[this.props.icon]}` } type={ this.props.type } onChange={ this.props.handler } />
        <p className={ styles.text }>{ this.props.text }</p>
      </div>
    )
  }
}
