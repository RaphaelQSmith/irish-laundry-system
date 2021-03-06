import React, { useState } from 'react'
import { Nav, Navbar, Container} from 'react-bootstrap';

export default function Header() {
    const [collapsed, setCollapsed] = useState(true);

    const toggleNavbar = () => setCollapsed(!collapsed);
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" variant="dark"
                style={{
                    backgroundColor: "#273483",
                    height: "auto",
                    minHeight:"250px",
                    borderBottomColor: "#F1B82D",
                    borderWidth: "0 0 7px 0",
                    width: "100%"
                }}>
                <Container>
                    <Navbar.Brand href="/"><img style={{ width: "220px" }} src="/logo_size_invert.jpg" alt="" /></Navbar.Brand>

                        <Nav className="ms-auto"> 
                            <Nav.Link style={{color: "white !important"}} href="/services">Services</Nav.Link>
                            <Nav.Link style={{color: "white !important"}} href="/rental">Rental</Nav.Link>
                            <Nav.Link style={{color: "white !important"}} href="/equipment">Equipment</Nav.Link>
                            {/* <Nav.Link style={{color: "white !important"}} href="/clients">Clients</Nav.Link> */}
                            <Nav.Link style={{color: "white !important"}} href="/blog">Blog</Nav.Link>
                            <Nav.Link style={{color: "white !important"}} href="/aboutus">About Us</Nav.Link>
                        </Nav>
                    {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" /> */}
                </Container>
            </Navbar>
            <Navbar collapseOnSelect expand="lg" variant="dark" style={{
                display: "flex",
                backgroundColor: "#273483",
                height: "auto",
                borderStyle: "solid",
                borderBottomColor: "#F1B82D",
                borderWidth: "0 0 7px 0",
                borderBottomRightRadius: "75px",
                flexWrap: "wrap"
            }}>

                <Container>
                    <h6 className="navbar-text">
                        +353 14910402 -
                        contact@irishlaundrysystems.com                         
                    </h6>
                    <h6 className="navbar-text">95 Ranelagh Village, Ranelagh, Dublin 6</h6>

                </Container>

            </Navbar>
        </div>
    )
}
