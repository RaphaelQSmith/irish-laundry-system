import React from 'react'
import { Button, Col, Container, Form, Navbar, Row } from 'react-bootstrap'
import styles from './components.module.css'

export default function Footer() {
    return (
        <div>
            <Navbar className={styles.footerStyle}>
                <Container>
                    <div>
                        <div>
                            <Navbar.Text className={styles.footerLink}>
                                <h5>Contact us:</h5>
                                Phone: 555-5469 <br />
                                Email - ils@sample.com <br />
                                Address: 999 Ranelagh Village, Ranelagh
                            </Navbar.Text>
                        </div>
                        <div>
                            <img
                                src="/electroluxPartnerWhite.png" style={{ width: '18rem' }}
                            />
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
                                        <Form.Control type="phone" placeholder="Phone" />
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
                                <Button variant="success" type="submit" style={{ width: "10rem", marginLeft: "43%" }}>
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
