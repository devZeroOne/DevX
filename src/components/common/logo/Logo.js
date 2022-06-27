import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './logo.module.css'

const Logo = ({design}) => {
    return <NavLink style={design} className={styles.logoText} to="/">DevX</NavLink>
    

};

export default Logo;