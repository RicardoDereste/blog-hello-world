import React from 'react'
import styles from './PostModel.module.sass'

export default function PostModel({children, photoCover, title}) {
  return (
    <article className={styles.postModelContainer}>
        <div className={styles.photoCover} style={{backgroundImage: `url(${photoCover})`}}></div>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.postContentContainer}>{children}</div>
    </article>
  )
}
