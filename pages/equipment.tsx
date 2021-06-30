import { Tabs, Tab, Button, Card } from 'react-bootstrap'
import styles from '../styles/Home.module.css'

export default function equipment() {
    return (
        <div className={styles.equipContainer}>
            <Tabs
                defaultActiveKey="home"
                transition={false}
                id="noanim-tab-example"
                className="mb-3"
            >
                <Tab eventKey="home" title="Washing Machines">
                    <div>
                        <div className={styles.equipRows}>
                            <Card className={styles.equipCard}>
                                <Card.Title>WH6-6</Card.Title>
                                <Card.Img variant="top" src="/WashMach/WH6-6.jpg" />
                                <Card.Body>

                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                         </Card.Text>
                                </Card.Body>
                            </Card>
                            <Card className={styles.equipCard}>
                                <Card.Title>WH6-7</Card.Title>
                                <Card.Img variant="top" src="/WashMach/WH6-7.jpg" />
                                <Card.Body>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                        </Card.Text>
                                </Card.Body>
                            </Card>
                            <Card className={styles.equipCard} >

                                <Card.Title>WH6-14</Card.Title>
                                <Card.Img variant="top" src="/WashMach/WH6-14.jpg" />
                                <Card.Body>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                        </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className={styles.equipRows}>
                            <Card className={styles.equipCard}>

                                <Card.Title>WH6-20</Card.Title>
                                <Card.Img variant="top" src="/WashMach/WH6-20.jpg" />
                                <Card.Body>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                        </Card.Text>
                                </Card.Body>
                            </Card>
                            <Card className={styles.equipCard} >
                                <Card.Title>WS6-14</Card.Title>
                                <Card.Img variant="top" src="/WashMach/WS6-14.jpg" />
                                <Card.Body>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                        </Card.Text>
                                </Card.Body>
                            </Card>
                            <Card className={styles.equipCard} >
                                <Card.Title>PW9C</Card.Title>
                                <Card.Img variant="top" src="/WashMach/PW9C.jpg" />
                                <Card.Body>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                        </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className={styles.equipRows}>
                            <Card className={styles.equipCard} >
                                <Card.Title>Quickwash</Card.Title>
                                <Card.Img variant="top" src="/WashMach/Quickwash.jpg" />
                                <Card.Body>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                        </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>

                    {/* DRYERS TAB */}
                </Tab>
                <Tab eventKey="profile" title="Dryers">
                    <div>
                        <Card className={styles.equipCard}>
                            <Card.Title>PD9</Card.Title>
                            <Card.Img variant="top" src="/Dryers/PD9.jpg" />
                            <Card.Body>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                         </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className={styles.equipCard} >
                            <Card.Title>QuickDry</Card.Title>
                            <Card.Img variant="top" src="/Dryers/QuickDry.jpg" />
                            <Card.Body>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                        </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className={styles.equipCard} >
                            <Card.Title>T4900</Card.Title>
                            <Card.Img variant="top" src="/Dryers/T4900.jpg" />
                            <Card.Body>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                        </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className={styles.equipCard} >
                            <Card.Title>T41200</Card.Title>
                            <Card.Img variant="top" src="/Dryers/T41200.jpg" />
                            <Card.Body>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                        </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className={styles.equipCard} >
                            <Card.Title>TD6-6</Card.Title>
                            <Card.Img variant="top" src="/Dryers/TD6-6-f.jpg" />
                            <Card.Body>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                        </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className={styles.equipCard} >
                            <Card.Title>TD6-7</Card.Title>
                            <Card.Img variant="top" src="/Dryers/TD6-7.jpg" />
                            <Card.Body>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                        </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className={styles.equipCard} >
                            <Card.Title>TD6-10</Card.Title>
                            <Card.Img variant="top" src="/Dryers/TD6-10.jpg" />
                            <Card.Body>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                        </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className={styles.equipCard} >
                            <Card.Title>TD6-16</Card.Title>
                            <Card.Img variant="top" src="/Dryers/TD6-16.jpg" />
                            <Card.Body>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                        </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className={styles.equipCard} >
                            <Card.Title>TD6-17S</Card.Title>
                            <Card.Img variant="top" src="/Dryers/TD6-17S.jpg" />
                            <Card.Body>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                        </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className={styles.equipCard} >
                            <Card.Title>TD6-24S</Card.Title>
                            <Card.Img variant="top" src="/Dryers/TD6-24S.jpg" />
                            <Card.Body>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                        </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className={styles.equipCard}>
                            <Card.Title>TD6-30</Card.Title>
                            <Card.Img variant="top" src="/Dryers/TD6-30.jpg" />
                            <Card.Body>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                        </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className={styles.equipCard} >
                            <Card.Title>TD6-37</Card.Title>
                            <Card.Img variant="top" src="/Dryers/TD6-37.jpg" />
                            <Card.Body>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                        </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>

                    {/* IRONERS */}

                </Tab>
                <Tab eventKey="contact" title="Ironers">
                    <div>
                        <Card className={styles.equipCard} >
                            <Card.Title>FIT1</Card.Title>
                            <Card.Img variant="top" src="/Ironers/FIT1.jpg" />
                            <Card.Body>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                         </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className={styles.equipCard} >
                            <Card.Title>FIT2B</Card.Title>
                            <Card.Img variant="top" src="/Ironers/FIT2B.jpg" />
                            <Card.Body>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                        </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className={styles.equipCard} >
                            <Card.Title>IB423xx</Card.Title>
                            <Card.Img variant="top" src="/Ironers/IB423xx.jpg" />
                            <Card.Body>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                        </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className={styles.equipCard} >
                            <Card.Title>IC433xx</Card.Title>
                            <Card.Img variant="top" src="/Ironers/IC433xx.jpg" />
                            <Card.Body>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                        </Card.Text>
                            </Card.Body>1
                        </Card>
                    </div>
                </Tab>
            </Tabs>
        </div>
    )
}
