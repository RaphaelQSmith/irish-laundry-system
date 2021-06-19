import React from 'react'
import { Container, Navbar } from 'react-bootstrap'

export default function Footer() {
    return (
        <div>
            <Navbar>
                <Container>
                    <Navbar.Brand href="#home">Irish Laundry Systems</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        Designed by @Raphael Smith || 2021
                    </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}
