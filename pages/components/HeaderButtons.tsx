import React from 'react'
import { Button, ButtonGroup, ListGroup } from 'react-bootstrap'
import styles from './components.module.css'

export default function HeaderButtons() {
    return (
        <div className={styles.buttonContainer}>
            <Button variant="info" className={styles.headerBts} href="/">Home</Button>
            <Button variant="info" className={styles.headerBts} href="/services">Services</Button>
            <Button variant="info" className={styles.headerBts} href="/rental">Rental</Button>
            <Button variant="info" className={styles.headerBts} href="/equipment">Equipment</Button>
            <Button variant="info" className={styles.headerBts} href="/clients">Clients</Button>
            <Button variant="info" className={styles.headerBts} href="/blog">Blog</Button>
            <Button variant="info" className={styles.headerBts} href="/aboutus">About Us</Button>
        </div>
    )
    }
