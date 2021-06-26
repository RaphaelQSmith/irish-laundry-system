import React from 'react'
import { Button, ButtonGroup, ListGroup } from 'react-bootstrap'
import styles from './components.module.css'

export default function HeaderButtons() {
    return (
        <div>
            <ListGroup horizontal className={styles.buttonContainer}>
                <ListGroup.Item className={styles.headerBts}> <a href="/"> Home</a></ListGroup.Item>
                <ListGroup.Item className={styles.headerBts}> <a href="/services"> Services</a></ListGroup.Item>
                <ListGroup.Item className={styles.headerBts}> <a href="/rental"> Rental</a></ListGroup.Item>
                <ListGroup.Item className={styles.headerBts}> <a href="/equipment"> Equipment</a></ListGroup.Item>
                <ListGroup.Item className={styles.headerBts}> <a href="/clients"> Clients</a></ListGroup.Item>
                <ListGroup.Item className={styles.headerBts}> <a href="/blog"> Blog</a></ListGroup.Item>
                <ListGroup.Item className={styles.headerBts}> <a href="/aboutus"> About Us</a></ListGroup.Item>
            </ListGroup>
        </div>
    )
    }
