import React from 'react'
import styles from './components.module.css'
import Button from 'react-bootstrap/Button';
import { Collapse, Nav, Navbar, NavbarBrand, NavItem, NavLink } from 'react-bootstrap';


export default function Header() {
    return (
        <div  style={{color: "azure"}}>
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
                            </nav>  */}


            <nav className="navbar navbar-expand-lg navbar-dark responsive" style={{ backgroundColor: "rgb(39, 52, 131)", 
                                                                                     height: "180px", padding: "120px 80px"}}>
                <img style={{ width: "250px" }} src="/top_logo.png" alt="" />
                <div className="collapse navbar-collapse" id="navbarText" style={{fontSize:"16pt"}}>
                    <ul className="navbar-nav mr-auto" style={{fontSize:"1.3vw"}}>
                        <li className="nav-item active">
                            <a className="nav-link" href="/rental">Rental <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/services">Services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/equipment">Equipment</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/clients">Clients</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/blog">Blog</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/aboutus">About Us</a>
                        </li>
                    </ul>
                    <span className="navbar-text" style={{fontSize:"1vw"}}>
                        <p>Email: some@some.com</p>
                        <p>Phone: 555-1212</p>
                        <p>95 Ranelagh Village
                        Ranelagh
                        Dublin 6
                        D06-V1W5
                            </p>
                    </span>
                </div>
            </nav>
        </div>
    )
}
