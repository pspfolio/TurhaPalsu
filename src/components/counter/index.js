import { h, Component } from 'preact';
import styles from './counter.css';

export default class Counter extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(type) {
    this.props.handler(type, this.props.target, this.props.amount);
  }

  render() {
    return (
      <section>
        <h3 className={ styles.counterHeader }>{this.props.header}</h3>
        <span className={ `${styles.counterButton} ${styles.counter}` } onClick={ () => { this.handleClick('INCREMENT') } }>+</span>
        <span className={ styles.counterValue }>{ this.props.value }</span>
        <span className={ `${styles.counterButton} ${styles.counter}` } onClick={ () => { this.handleClick('DECREMENT') } }>-</span>
      </section>
    )
  }
}
