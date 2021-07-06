import React from 'react'
import { Button, Col, Container, Form, Navbar, Row } from 'react-bootstrap'
import styles from './components.module.css'

export default function Footer() {
    return (
        <div>
            <Navbar className={styles.footerStyle}>
                <Container>
                    <Navbar.Text  className={styles.footerLink}>
                        <h5>Contact us:</h5>
                        Phone: 555-5469 <br/>
                        Email - ils@sample.com <br/>
                        Address: 999 Ranelagh Village, Ranelagh
                    </Navbar.Text>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text className={styles.footerText}>
                    <Form>
                    <Row>
                        <Form.Label column lg={2}>
                            Name
                        </Form.Label>
                        <Col>
                            <Form.Control type="text" placeholder="Name" />
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Form.Label column lg={2}>
                            Email
                        </Form.Label>
                        <Col>
                            <Form.Control type="email" placeholder="Email" />
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Form.Label column lg={2}>
                            Phone
                        </Form.Label>
                        <Col>
                            <Form.Control type="phone" placeholder="Phone" />
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Form.Label column lg={2}>
                            Company
                        </Form.Label>
                        <Col>
                            <Form.Control type="text" placeholder="Company" />
                        </Col>
                    </Row>
                    <br />
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Problem description</Form.Label>
                        <Form.Control as="textarea" rows={5} />
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
