import React from 'react'
import styles from './components.module.css'
import Button from 'react-bootstrap/Button';
import { ButtonGroup } from 'react-bootstrap';

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
        </div>
    )
}
