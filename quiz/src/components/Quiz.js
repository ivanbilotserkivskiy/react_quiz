import React from "react";
export default function Quiz ({question,correct,arrayOfAnswers,isHeld}) {
    if(arrayOfAnswers.indexOf(correct)===-1){
        arrayOfAnswers.push(correct)
    }
   console.log(arrayOfAnswers)
   let array = arrayOfAnswers.map(x=>({x, sort:Math.random()
   })).sort((a,b)=>a.sort-b.sort).map(({x})=>x)

   console.log(array)

 const styles = {
        backgroundColor: isHeld?"#4D5B9E":"#F5F7FB"
 }

    return (
        <div className="question-div">
            <h2 className="question-title">{question}</h2>
            <div className="answers-div">
            <button style={styles} value={array[0]} className="question-option">{array[0]}</button>
            <button style={styles} value={array[1]} className="question-option">{array[1]}</button>
            <button style={styles} value={array[2]} className="question-option">{array[2]}</button>
            <button style={styles} value={array[3]} className="question-option">{array[3]}</button>
            </div>
        </div>
    )
}