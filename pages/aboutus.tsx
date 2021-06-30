import React from 'react'
import { Card, Image } from 'react-bootstrap'
import styles from '../styles/Home.module.css'

export default function aboutus() {
    return (
        <div>
            <div className={styles.historyTimeline}>
                <div>
                    <Card className={styles.contactCard}>
                        <Card.Body>
                            <Card.Title>COMPANIES LOGOS</Card.Title>
                            <Card.Text>

                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div>
                    <Image src="laundryone.jpg" fluid />
                </div>
            </div>
            
            <div className={styles.historyTimeline}>
                <div>
                    <Card className={styles.contactCard}>
                        <Card.Body>
                            <Card.Title>Contact Details</Card.Title>
                            <Card.Text>

                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div>
                <Card className={styles.contactCard}>
                        <Card.Body>
                            <Card.Title>Google Maps</Card.Title>
                            <Card.Text>

                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    )
}
