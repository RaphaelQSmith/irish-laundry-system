import React from 'react'
import { Card } from 'react-bootstrap'
import styles from '../styles/Home.module.css'


export default function clients() {
    return (
        <div>

            {/* This section will be update as the client provide the relevant info */}
            
            {/* <div >
                <Card style={{ height: '40vh' }} className={styles.serviceCard}>
                    <Card.Body className={styles.reviewCardBody}>
                        <Card.Title>What clients think of us:</Card.Title>
                        <Card.Text>

                        </Card.Text>
                    </Card.Body>
                </Card>
            </div> */}


            <hr className={styles.hrLines} />
            <div className={styles.reviewCards}>
                <Card style={{ width: '20rem' }}>
                    <Card.Header>Testimony
                    </Card.Header>
                    <Card.Body className={styles.reviewCardBody}>
                        <Card.Title>Coming Soon...</Card.Title>
                        <Card.Text>

                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card style={{ width: '20rem' }}>
                    <Card.Header>Testimony
                    </Card.Header>
                    <Card.Body className={styles.reviewCardBody}>
                        <Card.Title>Coming Soon...</Card.Title>
                        <Card.Text>

                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card style={{ width: '20rem' }}>
                    <Card.Header>Testimony
                    </Card.Header>
                    <Card.Body className={styles.reviewCardBody}>
                        <Card.Title>Coming Soon...</Card.Title>
                        <Card.Text>

                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
            <hr className={styles.hrLines} />

            {/* This section will be update as the client provide the relevant info */}
            
            {/* <div className={styles.serviceCard}>
                <Card style={{ height: '40vh' }}>
                    <Card.Body className={styles.reviewCardBody}>
                        <Card.Title>COMPANIES LOGOS</Card.Title>
                        <Card.Text>

                        </Card.Text>
                    </Card.Body>
                </Card>
            </div> */}

        </div>
    )
}
