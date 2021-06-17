import React from 'react'
import styles from './components.module.css'

export default function Header() {
    return (
        <div>
            <header>
                <div className={styles.headerContainer}>
                    <h2 className={styles.ilsLogo}>Irish Laundry System</h2>
                    <div className={styles.headerInfo}>
                        <p>Email: some@some.com</p>
                        <p>Phone:555-1212</p>
                    </div>
                </div>
            </header>
            <div className={styles.buttonContainer}>
                <button className={styles.headerBts}>Home</button>
                <button className={styles.headerBts}>Services</button>
                <button className={styles.headerBts}>Rental</button>
                <button className={styles.headerBts}>Equipment</button>
                <button className={styles.headerBts}>Clients</button>
                <button className={styles.headerBts}>Blog</button>
                <button className={styles.headerBts}>About Us</button>
            </div>
        </div>
    )
}
