import React from 'react'
import styles from './Banner.module.sass'
import colorfulCircle from 'assets/colorful-circle.png'
import myPhoto from 'assets/me.jpeg'

export default function Banner() {
  return (
    <div className={styles.banner}>
        <div>
            <h1 className={styles.title}>Hello World!</h1>
            <p className={styles.paragraph}>Welcome to my personal space! I'm Ricardo Dereste, Front-end developer. Here I share my knowledge, I hope you learn something new :)</p>
        </div>
        <div className={styles.images}>
            <img className={styles.colorfulCircle} src={colorfulCircle} aria-hidden={true} alt='colorful circle'/>
            <img className={styles.myPhoto} src={myPhoto} alt="Ricardo looking"/>
        </div>
    </div>
  )
}
