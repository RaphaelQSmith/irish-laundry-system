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
                        </Card.Body>
                    </Card>
                </div>
            </div>

            <div className={styles.historyTimeline}>
                <div>
                    <Card className={styles.contactCard}>
                        <Card.Body>
                            <Card.Title>Contact Details</Card.Title>
                            <Card.Text>
                                95 Ranelagh Village Ranelagh - Dublin 6 D06-V1W5 <br />
                                Email: some@some.com <br />
                                Phone: 555-1212
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    )
}
