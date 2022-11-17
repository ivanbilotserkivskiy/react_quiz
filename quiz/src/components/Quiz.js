import React from "react";
export default function Quiz ({question,correct,arrayOfAnswers,isHeld}) {
    arrayOfAnswers.indexOf(correct)===-1 && arrayOfAnswers.push(correct)

    const [a,ca] = React.useState(isHeld)
    // console.log(a)
 let array=arrayOfAnswers
//    console.log(arrayOfAnswers)
    React.useEffect(()=>{
         array = arrayOfAnswers.map(x=>({x, sort:Math.random()
        })).sort((a,b)=>a.sort-b.sort).map(({x})=>x)
    },[])


//    console.log(array)

 const styles1 = {
        backgroundColor:"#4D5B9E"
 }
 const styles2 = {
     backgroundColor:"#F5F7FB"
 }
 function hui (id){
    ca(p=>p.map((d,index)=>{
      
        return index===id?!d:false
  
}))
 }
    return (
        <div className="question-div">
            <h2 className="question-title">{question}</h2>
            <div className="answers-div">
                {array.map((x,index)=>{
                // console.log(<button style={isHeld[index]?styles1:styles2} id={index} isHeld={isHeld[index]} onClick={held} className="question-option">{x}</button>)
                    return (<button style={a[index]?styles1:styles2} id={index} isHeld={isHeld[index] }onClick={()=>hui(index)} className="question-option">{x}</button>)
                    
                })}
            </div>
        </div>
    )
}