import React from 'react'
import { Form, Button, Col, Row, Card } from 'react-bootstrap'
import styles from '../styles/Home.module.css'

export default function services() {
    return (
        <div>
            <div className={styles.serviceCard}>
                <Card>
                    <Card.Header>Services</Card.Header>
                    <Card.Body className={styles.serviceCardBody}>
                        <Card.Title>We offer the following services:</Card.Title>
                        <Card.Text>
                            Services description
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>

            <div className={styles.serviceForm}>
                <h4 style={{ textAlign: 'center', paddingBottom: '3rem' }}>Tell us what you need</h4>
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
            </div>
        </div>
    )
}
