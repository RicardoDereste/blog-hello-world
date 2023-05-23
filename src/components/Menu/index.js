import React from 'react'
import styles from './Menu.module.sass'
import MenuLink from '../MenuLink'

export default function Menu() {

    return (
        <header>
            <nav className={styles.nav}>
                <MenuLink to='/'>
                    Home
                </MenuLink>
                <MenuLink to='/about'>
                    About
                </MenuLink>
            </nav>
        </header>
    )
}
