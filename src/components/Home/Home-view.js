import React, {useEffect, useRef, useState} from "react";
import {TimelineMax, TweenMax} from "gsap";
import stars from "../../images/stars.svg";
import wars from "../../images/stars.svg";
import "./Home.scss";

const HomeView = () => {
    const starsLogo = useRef();
    const warsLogo = useRef();
    const [tl] = useState(new TimelineMax({ paused: true }));

    useEffect(() => {
        TweenMax.to(starsLogo.current, 0.5, {y:10}).to(warsLogo.current, 0.5, {y:20}).pause();
    }, [tl]);
    return (
        <div className="Home">
            <div className="Home_image">
                <img src={stars} className="Home_logo-stars" alt="SW logo" ref={el => starsLogo.current = el }/>
                <img src={wars} className="Home_logo-wars" alt="SW logo" ref={el => warsLogo.current = el }/>
            </div>
            <div className="Home_text">
                The API Awakens
            </div>
        </div>
    );
};

export default HomeView;
