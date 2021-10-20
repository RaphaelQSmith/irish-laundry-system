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
                            <Card.Title>Contact Details</Card.Title>
                            <Card.Text>
                                95 Ranelagh Village <br/>
                                Ranelagh<br/>
                                Dublin 6<br/>
                                D06-V1W5<br/>
                                Dublin - Ireland
                                <br/>
                                <br/>
                                VAT Number: IE4815967C<br/>
                                Email: contact@irishlaundrysystems.com<br/>
                                Phone: +353 14910402

                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>

{/* WAITING FOR THE PERTINENT INFO */}
            {/* <hr className={styles.hrLines} />
            
            <div className={styles.historyTimeline}>
                <div>
                    <Card className={styles.contactCard}>
                        <Card.Body>
                            <Card.Title>COMPANIES LOGOS</Card.Title>
                            <Card.Text>
                                COMING SOON
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div> */}
        </div>
    )
}
