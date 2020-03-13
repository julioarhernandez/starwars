import React, {useEffect, useRef} from 'react';
import TweenLite from "gsap";
import {NavLink} from "react-router-dom";
import DS from "../../images/icon/ds.png";
import SW from "../../images/icon/luke_skywalker.png";
import MV from "../../images/icon/movies.png";

import './Navigation.scss';

const Navigation = (props) => {
    let thisNav = useRef([]);

    useEffect(()=>{
        TweenLite.from(thisNav.current, 0.5  , {y: -100, opacity: "0",  stagger: 0.3});
    }, [])
    return (
        <div className="Navigation">
            <NavLink exact activeClassName="active" to="/" ref={div => thisNav.current[0] = div}>
                <img src={DS} className="Navigation_icon" alt="Home Page"/>
                Home
            </NavLink>
            <NavLink activeClassName="active" to={'/people/'} ref={div => thisNav.current[1] = div}>
                <img src={SW} className="Navigation_icon" alt="People Page"/>
                People</NavLink>
            <NavLink activeClassName="active" to={'/films/'} ref={div => thisNav.current[2] = div}>
                <img src={MV} className="Navigation_icon" alt="Films Page"/>
                Films</NavLink>
        </div>
    );
}

export default Navigation;