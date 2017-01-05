import { h, Component } from 'preact';
import styles from './header.css';

export default () => (
  <header className={styles.bgColor}>
    <h1 className={styles.title}>TP <span className={styles.titleSecondary}> = Turha palaveri</span> </h1>
  </header>
)
