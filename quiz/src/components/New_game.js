import React from "react";

export default function NewGame(props) {

    return (
        <div className="start-div">
            <div className="figure-top">

            </div>
            <div className="figure-bottom">

            </div>
            <h2 className="start-title">Quizzical</h2>
            <span className="start-text">Some description if needed</span>
            <button className="start-button" onClick={props.toogle}>Start quiz</button>
        </div>
    )
}  