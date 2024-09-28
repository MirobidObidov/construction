import React from 'react'
import Image from 'next/image'
import styles from '../styles/about.module.css'
import about from '../assets/about.png'

const About = () => {
  return (
    <div className={styles.about}>
        <div className={styles.about_left}>
           <Image src={about} alt="" /> 
        </div>
        <div className={styles.about_right}>
            <h3>/ABOUT US</h3>
            <h1>A team of reliable and experienced contractors</h1>
            <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit tristique imperdiet nisi metus, viverra nulla aliquet dui porta porttitor neque lectus diam justo lobortis purus in elit, elementum dignissim nullam vitae pellentesque aliquet aliquam sagittis pulvinar egestas morbi suspendisse eleifend.</h5>
            <div className={styles.about_informs}>
                <div>
                    <h4><span>+</span>350</h4>
                    <p>Executed Projects</p>
                </div>
                <div>
                    <h4>12 <span>Y</span></h4>
                    <p>Experience</p>    
                </div>
                <div>
                    <h4><span>+</span>400</h4>
                    <p>Satisfied Clients</p>
                </div>
            </div>
            <button>About our company</button>
        </div>
    </div>
  )
}

export default About