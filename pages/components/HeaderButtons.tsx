import React from 'react'
import { Button, ButtonGroup, ListGroup } from 'react-bootstrap'
import styles from './components.module.css'

export default function HeaderButtons() {
    return (
        <div>
            <ListGroup horizontal className={styles.buttonContainer}>
                <ListGroup.Item className={styles.headerBts}> <a href="/"> Home</a></ListGroup.Item>
                <ListGroup.Item className={styles.headerBts}> <a href="/"> Services</a></ListGroup.Item>
                <ListGroup.Item className={styles.headerBts}> <a href="/"> Rental</a></ListGroup.Item>
                <ListGroup.Item className={styles.headerBts}> <a href="/"> Equipment</a></ListGroup.Item>
                <ListGroup.Item className={styles.headerBts}> <a href="/"> Clients</a></ListGroup.Item>
                <ListGroup.Item className={styles.headerBts}> <a href="/"> Blog</a></ListGroup.Item>
                <ListGroup.Item className={styles.headerBts}> <a href="/"> About Us</a></ListGroup.Item>
            </ListGroup>
        </div>
    )
}
