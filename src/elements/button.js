import React from "react";

const Button = ({ classes, text, clickHandler }) => {
    return <button className={classes} type="button" onClick={clickHandler}>{text}</button>;
}

export default Button;