import { useState, useRef } from "react";
import Button from './Button';
import styles from './Card.module.css';
import Modal from "./Modal";

export default function Card() {
  const [status, setStatus] = useState(false);
  const [error, setError] = useState('')
  const [invalid, setInvalid] = useState(false)
  const inputElem = useRef();

  function handleSubmit() {
    if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(inputElem.current.value))
    {
      setStatus(true);
      return (true)
    }
    setError('Valid email required')
    setInvalid(true);
      return (false)
  }

  function dismissMessage() {
    setStatus(false);
  }

  function removeError() {
    setError('');
    setInvalid(false);
  }


  const layout = 
  <main className={styles.wrapper}>
    <picture>
    <source media="(min-width: 900px)" srcSet="/assets/images/illustration-sign-up-desktop.svg" />
      <img src="/assets/images/illustration-sign-up-mobile.svg" alt="illustration" />
    </picture>
    <section className={styles.details_section}>
      <h1>Stay updated!</h1>
      <p className={styles.description}>Join 60,000+ product managers recieving monthly updates on:</p>
      <ul className={styles.list_items}>
        <li><img src="/assets/images/icon-list.svg" alt="" /> Product discovery and building what matters</li>
        <li><img src="/assets/images/icon-list.svg" alt="" />Measuring to ensure updates are a success</li>
        <li><img src="/assets/images/icon-list.svg" alt="" />And much more!</li>
      </ul>
      <form className={styles.form} onSubmit={((e) => e.preventDefault())} noValidate>
          <div className={styles.labels}>
            <label htmlFor="email_address">Email address</label>
            <small style={{color: 'var(--tomato)'}}>{error}</small>
          </div>

          <input type="email" placeholder='richy@company.com' ref={inputElem} required onChange={removeError} className={invalid ? styles.invalid : styles.email_input}/>

          <Button type='submit' innerText='Subscribe to monthly newsletter' click={handleSubmit}/>
      </form>
    </section>
  </main>
  return (
    <>
    {status ? <Modal email={inputElem.current.value} dismiss={dismissMessage}/> : layout}
    </>
  )
}
