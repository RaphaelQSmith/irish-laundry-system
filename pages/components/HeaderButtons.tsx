import React from 'react'
import { Button, ButtonGroup, ListGroup } from 'react-bootstrap'
import styles from './components.module.css'

export default function HeaderButtons() {
    return (
        <div>
            <ListGroup horizontal className={styles.buttonContainer}>
                <ListGroup.Item className={styles.headerBts}> <a href="/"> ListGroup</a></ListGroup.Item>
                <ListGroup.Item className={styles.headerBts}> <a href="/"> ListGroup</a></ListGroup.Item>
                <ListGroup.Item className={styles.headerBts}> <a href="/"> ListGroup</a></ListGroup.Item>
                <ListGroup.Item className={styles.headerBts}> <a href="/"> ListGroup</a></ListGroup.Item>
                <ListGroup.Item className={styles.headerBts}> <a href="/"> ListGroup</a></ListGroup.Item>
                <ListGroup.Item className={styles.headerBts}> <a href="/"> ListGroup</a></ListGroup.Item>
                <ListGroup.Item className={styles.headerBts}> <a href="/"> ListGroup</a></ListGroup.Item>
            </ListGroup>
        </div>
    )
}
