import React from 'react'
import Image from 'next/image'
import choose1 from '../assets/choose1.png'
import choose2 from '../assets/choose2.png'
import checkmark from '../assets/checkmark.png'
import styles from '../styles/choose.module.css'

const Choose = () => {
  return (
    <div className={styles.choose}>
        <div className='flex items-center'>
            <Image src={choose1} width={400} height={500}/>
            <div className={styles.choose1_texts}>
                <h3>/WHY CHOOSE US</h3>
                <h1>An exceptional quality that can't be beaten</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit tristique rutrum leo quam consectetur urna egestas tincidunt facilisi neque elementum quis lorem posuere dignissim scelerisque aliquam.</p>
                <div className='flex items-center'>
                    <Image src={checkmark} width={40} height={40}/>
                    <h5>Over 15 years of experience</h5>
                </div>
                <div className='flex items-center'>
                    <Image src={checkmark} width={40} height={40}/>
                    <h5>200+ successfully executed projects</h5>
                </div>
                <div className='flex items-center'>
                    <Image src={checkmark} width={40} height={40}/>
                    <h5>Exceptional work quality</h5>
                </div>
            </div>
        </div>
        <div className='flex items-center mt-[50px]'>
            <div className={styles.choose2_texts}>
                <h1>We help you build on your past and prepare for the future</h1>
                <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit tristique rutrum leo quam consectetur urna egestas tincidunt facilisi neque elementum quis lorem posuere dignissim scelerisque aliquam.</h4>
                <div className='flex items-center gap-[40px]'>
                    <div>
                        <p className={styles.choose_element}><span className='text-[#FF4D01]'>+</span>350</p>
                        <p>Successful Projects</p>   
                    </div>
                    <div>
                        <p className={styles.choose_element}>100<span className='text-[#FF4D01]'>%</span></p>
                        <p>Client Satisfaction</p>
                    </div>
                </div>
            </div>
            <Image src={choose2} width={400} height={500}/>
        </div>

    </div>
  )
}

export default Choose