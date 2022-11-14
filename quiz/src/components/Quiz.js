import React from "react";
export default function Quiz ({question,correct,option1,option2,option3}) {
    return (
        <div className="question-div">
            <h2 className="question-title">{question}</h2>
            <div className="answers-div">
            <button className="question-option">{correct}</button>
            <button className="question-option">{option1}</button>
            <button className="question-option">{option2}</button>
            <button className="question-option">{option3}</button>
            </div>
        </div>
    )
}