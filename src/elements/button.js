import React from "react";

const Button = ({ classes, text, clickHandler, hiddenText }) => {
    return <button className={classes} type="button" onClick={clickHandler}>{hiddenText ? <span className="sr-only">{text}</span> : {text}}</button>

}

export default Button;