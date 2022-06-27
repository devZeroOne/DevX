/* eslint-disable react/jsx-no-undef */
import React from 'react';
import { Container, Nav, Navbar as ReactNav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Logo from '../../common/logo/Logo';
import styles from './navbar.module.css'

const Navbar = () => {
    return (
        <ReactNav collapseOnSelect expand="lg" bg="" variant="dark">
            <Container>
                <Logo/>
                <ReactNav.Toggle aria-controls="responsive-navbar-nav" />
                <ReactNav.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink className={({ isActive }) => isActive ? styles.activeNav : styles.defaultNav} to="/">Home</NavLink>
                        <NavLink className={({ isActive }) => isActive ? styles.activeNav : styles.defaultNav} to="/ff">Home</NavLink>
                        <NavLink className={({ isActive }) => isActive ? styles.activeNav : styles.defaultNav} to="/fff">Home</NavLink>
                        <NavLink className={({ isActive }) => isActive ? styles.activeNav : styles.defaultNav} to="/ffff">Home</NavLink>
                    </Nav>
                    <Nav>
                    <NavLink className={styles.loginHeader} to="/login">Login</NavLink>
                    <NavLink className={styles.headerSubscribe} to="/">Subscribe</NavLink>

                    </Nav>
                </ReactNav.Collapse>
            </Container>
        </ReactNav>
    );
};

export default Navbar;