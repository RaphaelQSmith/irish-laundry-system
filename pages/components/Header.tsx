import React, { useState } from 'react'
import { Collapse, Nav, Navbar, Container, NavbarBrand, NavItem, NavLink, NavDropdown } from 'react-bootstrap';

export default function Header() {
    const [collapsed, setCollapsed] = useState(true);

    const toggleNavbar = () => setCollapsed(!collapsed);
    return (
        <div>
            {/* <nav classNameName={styles.headerContainer}>
                <div classNameName={styles.headerFirstLine}>
                    <div classNameName={styles.ilsLogo}>
                        <img style={{ width: "12rem" }} src="top_logo.png" alt="logo" />
                    </div>

                    <div classNameName={styles.headerInfo}>
                        <p>Email: some@some.com</p>
                        <p>Phone: 555-1212</p>
                        <p>95 Ranelagh Village
                        Ranelagh
                        Dublin 6
                        D06-V1W5
                            </p>
                    </div>
                    <div classNameName={styles.buttonContainer}>
                            <div>
                                <Button outline color="primary" classNameName={styles.headerBts} href="/">Home</Button>
                                <Button color="link" classNameName={styles.headerBts} href="/services">Services</Button>
                                <Button color="link" classNameName={styles.headerBts} href="/rental">Rental</Button>
                                <Button color="link" classNameName={styles.headerBts} href="/equipment">Equipment</Button>
                                <Button color="link" classNameName={styles.headerBts} href="/clients">Clients</Button>
                                <Button color="link" classNameName={styles.headerBts} href="/blog">Blog</Button>
                                <Button color="link" classNameName={styles.headerBts} href="/aboutus">About Us</Button> 
                            </div>
                           
                        </div>
                    </div>
                            </nav>  

            <nav className="navbar navbar-expand-lg navbar-dark" style={{
                backgroundColor: "rgb(39, 52, 131)",
                height: "300px",
                borderStyle: "solid", borderBottomColor: "#F1B82D",
                borderBottomWidth: "7px"
            }}>
                <div className="container">
                    <a href="/" className="navbar-brand">
                        <img style={{ width: "250px" }} src="/top_logo.png" alt="" />
                    </a>
                </div>
                <button className="navbar-toggler" type="button"
                    data-bs-toggle="collapse" data-bs-target="#navbarText">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav ms-auto flex-nowrap">
                        <li className="nav-item active">
                            <a className="nav-link" href="/rental">Rental <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="/services">Services</a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="/equipment">Equipment</a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="/clients">Clients</a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="/blog">Blog</a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="/aboutus">About Us</a>
                        </li>
                    </ul>
                    <span className="navbar-text" style={{ fontSize: "1vw", position:"sticky", alignItems:"right" }}>
                            <p>Email: some@some.com</p>
                            <p>Phone: 555-1212</p>
                            <p>95 Ranelagh Village
                            Ranelagh
                            Dublin 6
                            D06-V1W5
                            </p>
                        </span> 
                </div>
            </nav> */}
            <Navbar collapseOnSelect expand="lg" variant="dark" className="jumbotron" 
                style={{
                    backgroundColor: "#273483",
                    height: "300px",
                    borderStyle: "solid", 
                    borderBottomColor: "#F1B82D",
                    borderWidth: "0 0 7px 0",
                    borderBottomRightRadius: "75px"
                }}>
                <Container>
                    <Navbar.Brand href="/"><img style={{ width: "250px" }} src="/top_logo.png" alt="" /></Navbar.Brand>
                    
                    
                    
                    <span className="navbar-text" style={{ fontSize: "1vw", position:"sticky", alignItems:"right" }}>
                            <p>Email: some@some.com</p>
                            <p>Phone: 555-1212</p>
                            <p>95 Ranelagh Village
                            Ranelagh
                            </p>
                            <p>
                            Dublin 6
                            D06-V1W5
                            </p>
                        </span>

                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                </Container>
            {/* </Navbar> */}
            {/* <Navbar  collapseOnSelect expand="lg" variant="dark"> */}
            <Container>
                <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto" style={{fontSize: "1.25vw",
                                                        backgroundColor: "#273483",
                                                        borderStyle: "solid", 
                                                        borderBottomColor: "#F1B82D",
                                                        borderWidth: "0 0 7px 0",
                                                        borderBottomRightRadius: "75px",
                                                        width:"100%"}}>
                            <Nav.Link href="/rental">Rental</Nav.Link>
                            <Nav.Link href="/services">Services</Nav.Link>
                            <Nav.Link href="/equipment">Equipment</Nav.Link>
                            <Nav.Link href="/clients">Clients</Nav.Link>
                            <Nav.Link href="/aboutus">About Us</Nav.Link>
                        </Nav>
                    </Navbar.Collapse></Container>
            </Navbar>



        </div>
    )
}
