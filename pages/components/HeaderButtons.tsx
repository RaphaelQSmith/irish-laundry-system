import React from 'react'
import { Button, ButtonGroup, ListGroup } from 'react-bootstrap'
import styles from './components.module.css'

export default function HeaderButtons() {
    return (
        <div>
            <div className={styles.buttonContainer}>
                <ListGroup horizontal>
                    <ListGroup.Item className={styles.headerBts}>ListGroup</ListGroup.Item>
                    <ListGroup.Item className={styles.headerBts}>This</ListGroup.Item>
                    <ListGroup.Item className={styles.headerBts}>renders</ListGroup.Item>
                    <ListGroup.Item className={styles.headerBts}>horizontally!</ListGroup.Item>
                    <ListGroup.Item className={styles.headerBts}>ListGroup</ListGroup.Item>
                    <ListGroup.Item className={styles.headerBts}>renders</ListGroup.Item>
                    <ListGroup.Item className={styles.headerBts}>horizontally!</ListGroup.Item>
                </ListGroup>
            </div>
        </div>
    )
}
