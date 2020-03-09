import React, {useEffect, useRef, useState} from 'react';
import TweenLite from "gsap";
import ReactPlayer from "react-player";
import './Player.scss';

const Player = () => {
    const playerUrlList = ["https://www.youtube.com/watch?v=ZTg6hg1miFg","https://www.youtube.com/watch?v=4NRXx6U8ABQ"];
    const [playing, setPlaying] = useState([false, false]);
    const [player, setPlayer] = useState(0);
    const [playedArray, setPlayedArray] = useState([0,0]);
    let PlayerOpenWindow = useRef();
    let PlayerInnerWindow = useRef();
    let PlayerCloseButton = useRef();

    const handleProgress = ({played}) => {
        const arr = [...playedArray];
        arr[player] = played;
        setPlayedArray(arr);
    };

    const handleShowPlayWindow = () => {
        TweenLite.to(PlayerInnerWindow.current, 0.4, {width: "335px", height: "150px", ease: "back.out(1.1)"});
    };

    const handleCloseWindow = () => {
        TweenLite.to(PlayerInnerWindow.current, 0.2, {width: "0", height: "0", padding: "0"});
    };

    const handlePlay = (playerIndex) => {
        const activePlayerIndex = playing.findIndex(elm => elm == true);
        const arr = [...playing];
        if (activePlayerIndex !== playerIndex && activePlayerIndex > -1){
            arr[activePlayerIndex] = false;
        }
        arr[playerIndex] = !arr[playerIndex];
        setPlaying(play => arr);
        setPlayer(index => playerIndex);
    };

    return (
        <div className="Player">
            <div className="Player_wrapper">
                <div className="Player_button" ref={elm => PlayerOpenWindow.current = elm} onClick={handleShowPlayWindow}>
                    Play
                </div>
                <div className="Player_inner" ref={elm => PlayerInnerWindow.current = elm}>
                    <div className="Player_close" ref={elm => PlayerCloseButton.current = elm} onClick={handleCloseWindow}>
                        Close
                    </div>
                    <div className="Player_list">
                        <ul className="Player_items">
                            <li className="Player_item">
                                <div className={`Player_controls${playing[0] ? ' playing': ''}`}>
                                    <button onClick={() => handlePlay(0)}>Play me 1</button>
                                    <progress max={1} value={playedArray[0]}></progress>
                                </div>
                                 <div className="Player_media">
                                    <ReactPlayer
                                        url={playerUrlList[0]}
                                        playing={playing[0]}
                                        onProgress={handleProgress}
                                    />
                                </div>
                            </li>
                             <li className="Player_item">
                                <div className="Player_controls">
                                    <button onClick={() => handlePlay(1)}>Play me 2</button>
                                    <progress max={1} value={playedArray[1]}></progress>
                                </div>
                                  <div className="Player_media">
                                    <ReactPlayer
                                        url={playerUrlList[1]}
                                        playing={playing[1]}
                                        onProgress={handleProgress}
                                    />
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Player;