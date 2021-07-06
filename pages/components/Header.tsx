import React from 'react'
import styles from './components.module.css'
import Button from 'react-bootstrap/Button';
import { ButtonGroup } from 'react-bootstrap';

export default function Header() {
    return (
        <div>
            <header>
                <div className={styles.headerContainer}>
                    <div className={styles.ilsLogo}>
                        <img style={{width:"12rem"}} src="top_logo.png" alt="logo"/>
                    </div>
                    <div className={styles.headerInfo}>
                        <p>Email: some@some.com</p>
                        <p>Phone:555-1212</p>
                    </div>
                </div>
            </header>
        </div>
    )
}
