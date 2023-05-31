/* eslint-disable react/prop-types */
import styles from './Button.module.css';

export default function Button({type, innerText, click }) {
  
  return (
    <button className={styles.btn} type={type} onClick={click}>{innerText}</button>
  )
}
