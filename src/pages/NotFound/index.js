import React from 'react'
import styles from './NotFound.module.sass'
import error404 from 'assets/erro_404.png'
import MainButton from 'components/MainButton'
import { useNavigate } from 'react-router-dom'

export default function NotFound() {

    const navigate = useNavigate()

    return (
        <>
            <div className={styles.contentContainer}>
                <span className={styles.text404}>404</span>
                <h1 className={styles.title}>
                    Oops! Page not found.
                </h1>
                <p className={styles.paragraph}>
                    Are you sure this is what you were looking for?
                </p>
                <p className={styles.paragraph}>
                    Wait a few moments and reload the page, or go back to the main page.
                </p>
                <div className={styles.buttonContainer} onClick={() => navigate(-1)}>
                    <MainButton size="lg">Go Back</MainButton>
                </div>
                <img className={styles.imageDog} src={error404} alt='Dog using clothes like human' />
            </div>
            <div className={styles.whiteSpace}></div>
        </>
    )
}
