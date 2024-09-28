import React from 'react'
import Image from 'next/image'
import styles from '../styles/services.module.css'
import services1 from '../assets/services1.png'
import services2 from '../assets/services2.png'
import services3 from '../assets/services3.png'
import services4 from '../assets/services4.png'
import services5 from '../assets/services5.png'
import services6 from '../assets/services6.png'

const Services = () => {
  return (
    <div className={styles.services}>
        <h3>/OUR SERVICES</h3>
        <div className={styles.services_flex}>
            <h1>A comprehensive set of services</h1>
            <div>
                <button className={styles.services_btn1}>Get a quote</button>
                <button className={styles.services_btn2}>Browse services</button> 
            </div>
        </div>
        <div className={styles.services_informs}>
            <div className={styles.services_inform}>
                <Image src={services1} />
                <h4>Project Planning</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit quis eget morbi fermentum sagittis, et mi lacus ornare tincidunt id.</p>
                <div className={styles.services_to_flex}>
                    <div className={styles.services_rectangle}></div>
                    <p>Learn more</p>
                </div>  
            </div>
            <div className={styles.services_inform}>
                <Image src={services2} /> 
                <h4>Project Management</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit quis eget morbi fermentum sagittis, et mi lacus ornare tincidunt id.</p>
                <div className={styles.services_to_flex}>
                    <div className={styles.services_rectangle}></div>
                    <p>Learn more</p>
                </div>         
            </div>
            <div className={styles.services_inform}>
                <Image src={services3} />  
                <h4>General Contracting</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit quis eget morbi fermentum sagittis, et mi lacus ornare tincidunt id.</p>
                <div className={styles.services_to_flex}>
                    <div className={styles.services_rectangle}></div>
                    <p>Learn more</p>
                </div>       
            </div>
        </div>
        <div className={styles.services_informs}>
            <div className={styles.services_inform}>
                <Image src={services4} />
                <h4>Interior Design</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit quis eget morbi fermentum sagittis, et mi lacus ornare tincidunt id.</p>
                <div className={styles.services_to_flex}>
                    <div className={styles.services_rectangle}></div>
                    <p>Learn more</p>
                </div>  
            </div>
            <div className={styles.services_inform}>
                <Image src={services5} /> 
                <h4>Exterior Design</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit quis eget morbi fermentum sagittis, et mi lacus ornare tincidunt id.</p>
                <div className={styles.services_to_flex}>
                    <div className={styles.services_rectangle}></div>
                    <p>Learn more</p>
                </div>         
            </div>
            <div className={styles.services_inform}>
                <Image src={services6} />  
                <h4>Space Planning</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit quis eget morbi fermentum sagittis, et mi lacus ornare tincidunt id.</p>
                <div className={styles.services_to_flex}>
                    <div className={styles.services_rectangle}></div>
                    <p>Learn more</p>
                </div>       
            </div>
        </div>
    </div>
  )
}

export default Services