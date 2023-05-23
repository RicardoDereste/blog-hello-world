import React from 'react'
import styles from './MenuLink.module.sass'
import { NavLink } from 'react-router-dom'

export default function MenuLink({ children, to }) {

    return (
        <NavLink className={({ isActive }) => `
            ${styles.link}
            ${isActive ? styles.link__active : ""}
        `}
            to={to}
            end
        >
            {children}

        </NavLink>
    )
}
