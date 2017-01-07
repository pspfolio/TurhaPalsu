import { h, Component } from 'preact';
import styles from './input.css';

export default class Input extends Component {
  render() {
    return(
      <div>
        <input className={ `${styles.input} ${styles[this.props.icon]}` } type={ this.props.type } id={this.props.id} onChange={ this.props.handler } />
        <label for={this.props.id} className={ styles.text }>{ this.props.text }</label>
      </div>
    )
  }
}
