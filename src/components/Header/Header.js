import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <div className="header">
            <h3 className="textMain"><span id="textExtra">15 Minutes </span>  School</h3>
            <div>
                <Navbar bg="dark" variant="dark">
                    <Container className="justify-content-center">
                        <Nav>
                            <NavLink style={{ margin: '10px', textDecoration: 'none', color: 'white' }} to="/home" activeStyle={{
                                fontWeight: "bold",
                                color: "goldenrod"
                            }}>Home</NavLink>

                            <NavLink style={{ margin: '10px', textDecoration: 'none', color: 'white' }} to="/about" activeStyle={{
                                fontWeight: "bold",
                                color: "goldenrod"
                            }}>About</NavLink>

                            <NavLink style={{ margin: '10px', textDecoration: 'none', color: 'white' }} to="/service" activeStyle={{
                                fontWeight: "bold",
                                color: "goldenrod"
                            }}>Services</NavLink>

                            <NavLink style={{ margin: '10px', textDecoration: 'none', color: 'white' }} to="/instructor" activeStyle={{
                                fontWeight: "bold",
                                color: "goldenrod"
                            }}>Instructor</NavLink>
                        </Nav>
                    </Container>
                </Navbar>
            </div>
        </div >
    );
};

export default Header;