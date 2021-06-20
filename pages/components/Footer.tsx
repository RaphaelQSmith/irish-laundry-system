import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import styles from './components.module.css'

export default function Footer() {
    return (
        <div>
            <Navbar className={styles.footerStyle}>
                <Container>
                    <Navbar.Brand  className={styles.footerLink} href="#home">Irish Laundry Systems</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text className={styles.footerText}>
                        Designed by @Raphael Smith || 2021
                    </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}
