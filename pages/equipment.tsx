import { Tabs, Tab, Button, Card, CardGroup, Row, Col } from 'react-bootstrap'
import styles from '../styles/Home.module.css'

export default function equipment() {
    return (
        <div className={styles.equipContainer}>
            <Card style={{ textAlign: "justify", marginBottom: "50px", border: "none" }}>
                <Card.Title> <h2 style={{ textAlign: "center" }}> Exceptional results for minimal effort</h2></Card.Title>
                <Card.Body>
                    <Card.Text>
                        <br />
                            <h5>
                                Our machines are supplied by Electrolux Professional, the largest manufacturer of industrial
                                laundry equipment in the world. If you are looking for washers, dryers and accessories with
                                certified ergonomic design, trustable hygiene and long-term savings, we can help.
                                Or, in other words, if you are looking to save money,
                                increase productivity and make your operation safe and effortless while reducing your staff’s
                                physical strain, get to know our range of products.
                            </h5>
                        <br />
                    </Card.Text>
                </Card.Body>
                <div>
                    <hr className={styles.hrLines} />
                </div>
            </Card>
            <Tabs
                defaultActiveKey="home"
                transition={false}
                id="noanim-tab-example"
                className="mb-2 nav-pills"
            >
                <Tab eventKey="home" title="Washing Machines">
                    <div>
                        <p><h4 style={{ textAlign: "center", margin: "20px 0" }}> Washers</h4>
                            The washers are designed for the lowest possible water, energy and detergent consumption.
                        Automatic Savings technology, integrated into all the machines, weighs the linens and adjusts
                        the water intake to the actual load. Maximum dewatering is guaranteed by Power Balance technology,
                        which monitors unbalance and G factor adjustment throughout the extraction sequence.
                        Integrated Savings help you avoid overloading and underloading, maximising profits and extending
                        the lifetime of your washer. Intelligent Dosing automatically
                        adds the correct amount of detergent according to the weight of the load.
                        </p>
                        <CardGroup className={styles.equipRows}>
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

                                <Card.Title>WH6-14</Card.Title>
                                <Card.Img variant="top" src="/WashMach/WH6-14.jpg" />
                                <Card.Body>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                        </Card.Text>
                                </Card.Body>
                            </Card>

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

                        </CardGroup>
                    </div>

                    {/* DRYERS TAB */}
                </Tab>
                <Tab eventKey="profile" title="Dryers">
                    <div>
                        <p><h4 style={{ textAlign: "center", margin: "20px 0" }}> Tumble Dryers</h4>
                            Electrolux’s new range of dryers is the only one to hold the prestigious 
                            4-star Ergocert rating for ergonomics*. User-friendly interventions can 
                            reduce work-related musculoskeletal disorders (WMSDs) by 59%, according to the 
                            Washington State Department of Labor & Industries. Productivity is also a must 
                            – 16kg dried in 42 minutes means the dryers have the shortest drying time on 
                            the market.
                        </p>
                        <CardGroup className={styles.equipRows}>
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
                        </CardGroup>
                    </div>

                    {/* IRONERS */}

                </Tab>
                <Tab eventKey="contact" title="Ironers">
                    <div>
                    <p> <h4 style={{ textAlign: "center", margin: "20px 0" }}> Rotary Ironers, Cylinder Ironers, Drying Cabinets and Finishing Tables</h4>
Ironers are designed to provide you with time, energy and labour savings. Both cylinder and bed-type machines are available in the size and with the functions you require.

                        </p>
                        <CardGroup className={styles.equipRows}>
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
                        </CardGroup>
                    </div>
                </Tab>
                <Tab eventKey="barrier" title="Barrier Washers">

                </Tab>
            </Tabs>
        </div>
    )
}
