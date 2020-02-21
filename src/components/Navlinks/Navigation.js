import React from 'react';
import {NavLink} from "react-router-dom";
import './Navigation.scss';

const Navigation = (props) => {
    return (
        <>
            <NavLink exact activeClassName="active" to="/">Home</NavLink>
            <NavLink activeClassName="active" to={'/persons/'}>Persons</NavLink>
            <NavLink activeClassName="active" to={'/films/'}>Films</NavLink>
        </>
    );
}

export default Navigation;