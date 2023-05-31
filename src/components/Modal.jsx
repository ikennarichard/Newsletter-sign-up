/* eslint-disable react/prop-types */
import Button from "./Button";
import styles from './Modal.module.css';
export default function Modal({ email, dismiss }) {
  return (
    <div className={styles.modal}>
      <img src="assets/images/icon-success.svg" alt="success icon" />
      <h2>Thanks for subscribing!</h2>
      <p>A confirmation email has been sent to <span>{email}</span>. Please open it and click the button inside to confirm your subscription.</p>
      <Button type='button' innerText='Dismiss message' click={dismiss} />
    </div>
  )
}
