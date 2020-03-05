import React, {useEffect, useRef} from 'react';
import {TweenLite} from "gsap";
import './Loading.scss';

const Loading = ({text, isLoading}) => {
    let thisLoading = useRef();

    useEffect(()=>{
        if (isLoading){
            TweenLite.to(thisLoading.current, 0.3, {height: '100%', ease: "power3.out"});
        }
        else{
            TweenLite.to(thisLoading.current, 0.3, {height: 0, ease: "power3.out"});
        }
    },[isLoading]);

    return (
        <div className="loading"  ref={el => thisLoading.current = el}>
            <div className="loading_icon" >
                <img className="bounceIn" src="../images/icon/dark-light.png" alt="Loading..." title="Loading..."/>
            </div>
            <div className="loading_content">
                Loading {text}
            </div>
        </div>
    );
}

export default Loading;