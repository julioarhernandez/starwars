import React, {useEffect, useRef} from 'react';
import TweenLite from "gsap";
import {NavLink} from "react-router-dom";

import './Navigation.scss';

const Navigation = (props) => {
    let thisNav = useRef([]);

    useEffect(()=>{
        TweenLite.from(thisNav.current, 0.5  , {y: -100, stagger: 0.3});
    }, [])
    return (
        <div className="Navigation">
            <NavLink exact activeClassName="active" to="/" ref={div => thisNav.current[0] = div}>
                <img src="../images/icon/ds.png" className="Navigation_icon" alt="Home Page"/>
                Home
            </NavLink>
            <NavLink activeClassName="active" to={'/people/'} ref={div => thisNav.current[1] = div}>
                <img src="../images/icon/luke_skywalker.png" className="Navigation_icon" alt="People Page"/>
                People</NavLink>
            <NavLink activeClassName="active" to={'/films/'} ref={div => thisNav.current[2] = div}>
                <img src="../images/icon/movies.png" className="Navigation_icon" alt="Films Page"/>
                Films</NavLink>
        </div>
    );
}

export default Navigation;