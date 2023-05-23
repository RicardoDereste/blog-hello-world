import styles from './Footer.module.sass'
import {ReactComponent as Trademark} from 'assets/trademark.svg'

import React from 'react'

export default function Footer() {
  return (
    <footer className={styles.footer}>
        <Trademark/>
        Developed by Ricardo.
    </footer>
  )
}
