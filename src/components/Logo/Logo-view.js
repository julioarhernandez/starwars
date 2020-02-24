import React, {useEffect, useRef} from 'react';
import {TweenLite} from "gsap";
import logo from "../../images/SW.svg";
import "./Logo.scss";
 
const LogoView = () => {
    let logoDiv = useRef();

    useEffect(()=>{
        TweenLite.from(logoDiv.current, 0.5, {y:-100, opacity: 0});
    }, []);
    return (
        <div className="Logo" ref={el => logoDiv.current = el}>
            <img src={logo} alt="SW logo"/>
        </div>
    );
}

export default LogoView;