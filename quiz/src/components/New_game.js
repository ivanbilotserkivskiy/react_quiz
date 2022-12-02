import React from "react";

export default function NewGame(props) {

    return (
        <div className="start-div">
     
            <h2 className="start-title">Quizzical</h2>
            <span className="start-text">Some description if needed</span>
            <form className="form">
                <label className="category-label">Select quiz theme</label>
                <select className="select" value={props.category} onChange={props.categoryChange}>
                    <option value="9">General Knowlege</option>
                    <option value="10">Entertainment:Books</option>
                    <option value="11">Entertainment:Film</option>
                    <option value="12">Entertainment:Music</option>
                    <option value="13">Entertainment:Musicals and Theatres</option>
                    <option value="14">Entertainment:Television</option>
                    <option value="15">Entertainment:Video Games</option>
                    <option value="16">Entertainment:Board Games</option>
                    <option value="17">Science and Nature</option>
                    <option value="18">Science: Computers</option>
                    <option value="19">Science: Mathematics</option>
                    <option value="20">Mythology</option>
                    <option value="21">Sprots</option>
                    <option value="22">Geography</option>
                    <option value="23">History</option>
                    <option value="24">Politics</option>
                    <option value="25">Art</option>
                    <option value="26">Celebrities</option>
                    <option value="27">Animals</option>
                    <option value="28">Vehicles</option>
                    <option value="29">Entertainment:Comics</option>
                    <option value="30">Science:Gadgets</option>
                    <option value="31">Entertainment:Japanese Anime and Manga</option>
                    <option value="32">Entertainment:Cartoon and Animations</option>

                </select>
                <label className="difficulty-label">Select difficulty</label>
                <select  className="select" value={props.difficulty} onChange={props.changeDiff}>
                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Hard</option>
                </select>
            </form>
            <button className="start-button" onClick={props.toogle}>Start quiz</button>
        </div>
    )
}  