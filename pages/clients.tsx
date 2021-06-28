import React from 'react'
import { Card } from 'react-bootstrap'
import styles from '../styles/Home.module.css'


export default function clients() {
    return (
        <div>
            <div className={styles.serviceCard}>
                <Card>
                    <Card.Header>Clients Testimonies
                    </Card.Header>
                    <Card.Body className={styles.serviceCardBody}>
                        <Card.Title>What clients think of us:</Card.Title>
                        <Card.Text>
                            
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>

            <div className={styles.reviewCards}>
                <Card style={{width: '20rem'}}>
                    <Card.Header>Clients Testimonies
                    </Card.Header>
                    <Card.Body className={styles.serviceCardBody}>
                        <Card.Title>What clients think of us:</Card.Title>
                        <Card.Text>
                            
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card style={{width: '20rem'}}>
                    <Card.Header>Clients Testimonies
                    </Card.Header>
                    <Card.Body className={styles.serviceCardBody}>
                        <Card.Title>What clients think of us:</Card.Title>
                        <Card.Text>
                            
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card style={{width: '20rem'}}>
                    <Card.Header>Clients Testimonies
                    </Card.Header>
                    <Card.Body className={styles.serviceCardBody}>
                        <Card.Title>What clients think of us:</Card.Title>
                        <Card.Text>
                            
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
            <div className={styles.serviceCard}>
                <Card>
                    <Card.Body className={styles.serviceCardBody}>
                        <Card.Title>COMPANIES LOGOS</Card.Title>
                        <Card.Text>
                            
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>

        </div>
    )
}
