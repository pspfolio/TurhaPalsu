import { h, Component } from 'preact';
import Counter from '../counter';
import styles from './settings.css';

export default ({ handleCounter, persons, salary }) => (
  <div>
    <div className={ styles.container }>
      <div className={ styles.item }>
        <Counter
          header={ 'Osallistujia' }
          handler={ handleCounter }
          target={ 'persons' }
          amount={ 1 }
          value={ persons } />
      </div>
      <div className={ styles.item }>
        <Counter
          header={ '€ / h' }
          handler={ handleCounter }
          target={ 'salary' }
          amount={ 5 }
          value={ salary } />
      </div>
    </div>
  </div>
)
