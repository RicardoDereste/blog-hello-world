import styles from './MainButton.module.sass'

import React from 'react'

export default function MainButton({children, size}) {
  return (
    <button className={`${styles.buttonMain} ${styles[size]}`}>{children}</button>
  )
}
