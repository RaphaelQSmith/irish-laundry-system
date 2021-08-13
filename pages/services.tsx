import React from 'react'
import { Form, Button, Col, Row, Card } from 'react-bootstrap'
import styles from '../styles/Home.module.css'

export default function services() {
    return (
        <div className={styles.serviceForm}>
            <div className={styles.serviceCard}>
                <Card>
                    {/* <Card.Header>Services</Card.Header> */}
                    <Card.Body className={styles.serviceCardBody}>
                        <Card.Text>
                            <h4>Preventative Maintenance</h4> <br/>
                            For your peace of mind, safety and compliance concerns, we offer a simple and effective Preventative Maintenance program for your laundry equipment.
                            We inspect the equipment twice a year and on each visit, we perform all services as per a specific checklist.
                            You will be furnished with a completed copy of the report indicating the condition of the machines and what repairs,
                            if any, are necessary resulting from each inspection.
                            Preventative Maintenance contract holders are given preferential service over all types of services and a discounted labour rate for improvement or repair of equipment (upon proper authorisation). <br/>
                            <h4> Equipment Repair</h4> <br/>
                            For customers who did not buy the equipment from us and/or do not have a Preventative Maintenance Agreement in place,
                            our call-out charge is €60 per hour (min 3 hours) plus VAT @ 13.5%. Travelling time and spare parts are charged separately.
                            We repair and maintain all other makes of industrial laundry equipment. Please feel free to contact us with any questions in relation to your laundry requirements.

                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
            <hr className={styles.hrLines} />
            <div>
                <h4 style={{ textAlign: 'center', paddingBottom: '3rem' }}>Tell us what you need</h4>
                <Form>
                    <Row>
                        <Col>
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
                        </Col>

                        <Col>

                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Problem description</Form.Label>
                                <Form.Control as="textarea" rows={7} />
                            </Form.Group>
                            <Button variant="success" type="submit" style={{ width: "10rem", marginLeft: "43%" }}>
                                Submit
                    </Button>
                        </Col>
                    </Row>
                </Form>
            </div>
        </div>
    )
}
