import React from "react";
export default function Quiz ({question,correct,option1,option2,option3}) {
    return (
        <div>
            <h2>{question}</h2>
            <button>{correct}</button>
            <button>{option1}</button>
            <button>{option2}</button>
            <button>{option3}</button>
        </div>
    )
}