import React from 'react'
import styles from '../styles/main.module.css'

const Main = () => {
  return (
    <main className={styles.main}>
        <div className={styles.main_texts}>
            <h1>We provide effective contracting services</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit dolor sit varius rhoncus, nullam pulvinar ut
            sollicitudin dictumst porttitor porttitor quis quisque erat.</p>
            <div className={styles.main_btns}>
                <button className={styles.main_btn1}>Get a quote</button>
                <button className={styles.main_btn2}>Our services</button>
            </div>
        </div>
    </main>
  )
}

export default Main