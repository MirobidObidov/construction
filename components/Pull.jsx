import React from 'react'
import styles from '../styles/pull.module.css'

const Pull = () => {
  return (
    <div className={styles.pull}>
        <div>
            <h1>Ready to pull the trigger? Get a quote today.</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit dolor sit varius rhoncus, nullam pulvinar ut sollicitudin dictumst porttitor porttitor quis.</p>
            <div className={styles.pull_btns}>
                <button className={styles.pull_btn1}>Get a quote</button>
                <button className={styles.pull_btn2}>Browse services</button> 
            </div>
        </div>
    </div>
  )
}

export default Pull