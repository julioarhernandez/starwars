import React, {useEffect, useRef, useState} from "react";
import {TimelineLite} from "gsap";
import stars from "../../images/stars.svg";
import wars from "../../images/wars.svg";
import "./Home.scss";

const HomeView = () => {
    const starsLogo = useRef();
    const warsLogo = useRef();
    const text = useRef();
    const [tl] = useState(new TimelineLite({ paused: true }));

    useEffect(() => {
        tl.set(starsLogo.current, {height: "30", opacity: 0})
          .set(warsLogo.current, {height: "30", opacity: 0})
          .set(text.current, {scale: "0", opacity: 0})
          .to(starsLogo.current, 1.5, {height: "70", opacity: 1, ease: "power4.out"})
          .to(warsLogo.current, 1.5, {height: "70", opacity: 1, ease: "power4.out"}, "-=1.5")
          .to(text.current, 1, {scale: "1", opacity: "1", ease: "power4.out"},"-=1.3").play();
    }, [tl]);
    return (
        <div className="Home">
            <div className="Home_image">
                <img src={stars} className="Home_logo-stars" alt="SW logo" ref={el => starsLogo.current = el }/>
                <span className="Home_text" ref={el => text.current = el }>The API Awakens</span>
                <img src={wars} className="Home_logo-wars" alt="SW logo" ref={el => warsLogo.current = el }/>
            </div>
        </div>
    );
};

export default HomeView;
