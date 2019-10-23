import React, { Component } from 'react';
import {Link} from "react-router-dom";
import {LinkContainer} from "react-router-bootstrap";
import { Nav, Navbar, NavItem } from "react-bootstrap";

function CustomNav() {
   return ( <Navbar fluid collapseOnSelect>
        <Navbar.Header>
            <Navbar.Brand>
                <Link to="/">Home</Link>
                <Link to="/rating">Rating</Link>
                <Link to="/help">Help</Link>
          </Navbar.Brand>
            <Navbar.Toggle/>
        </Navbar.Header>
        <Navbar.Collapse>
            <Nav pullRight>
                <LinkContainer to="/signup">
                    <NavItem>Signup</NavItem>
                </LinkContainer>
                <LinkContainer to="/login">
                    <NavItem>Login</NavItem>
                </LinkContainer>
            </Nav>
        </Navbar.Collapse>
    </Navbar>);
}
export default CustomNav;
