import React from 'react'
import { Button, Col, Container, Form, Navbar, Row } from 'react-bootstrap'
import styles from './components.module.css'

export default function Footer() {
    return (
        <div>
            <Navbar className={styles.footerStyle}>
                <Container>
                    <div>
                        <br/>
                        <div>
                            <img
                                src="/electroluxPartnerWhite.png" style={{ width: '18rem' }}
                            />
                        </div>
                        <div className={styles.footerLink}>
                            Ergonomics Certifying Institute (Ergocert)
                        </div>
                        <br/>
                        <div>
                            <Navbar.Text className={styles.footerLink}>
                                <h5>Irish Laundry Systems</h5>
                                Phone: +353 14910402 <br />
                                Email - contact@irishlaundrysystems.com<br />
                                Address: 95 Ranelagh Village, Ranelagh D06-V1W5 <br/>
                                Dublin – Ireland <br/>
                            </Navbar.Text>
                        </div>
                    </div>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text className={styles.footerText}>
                            <Form className={styles.footerForm}>
                                <Row>
                                    <Col>
                                        <Form.Control type="text" placeholder="Name" />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Form.Control type="email" placeholder="Email" />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Form.Control type="text" placeholder="Company" />
                                    </Col>
                                </Row>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                    <Form.Control as="textarea" placeholder="Request Description" rows={5} />
                                </Form.Group>
                                <Button variant="success" type="submit" style={{ width: "10rem" }}>
                                    Submit
                                </Button>
                            </Form>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}
