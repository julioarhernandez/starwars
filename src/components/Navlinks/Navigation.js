import React, {Component} from 'react';
import {TweenLite} from "gsap";
import {NavLink} from "react-router-dom";

import './Navigation.scss';

class Navigation extends Component {
    constructor() {
        super();
        this.nav =[];
    }

    componentDidMount() {
        TweenLite.from(this.nav, 0.3  , {y: -100, stagger: 0.2});
    }

    render(){
        return(
            <div className="Navigation">
                <NavLink exact activeClassName="active" to="/" ref={div => this.nav[0] = div}>Home</NavLink>
                <NavLink activeClassName="active" to={'/persons/'} ref={div => this.nav[1] = div}>Persons</NavLink>
                <NavLink activeClassName="active" to={'/films/'} ref={div => this.nav[2] = div}>Films</NavLink>
            </div>
        )
    }
}

export default Navigation;