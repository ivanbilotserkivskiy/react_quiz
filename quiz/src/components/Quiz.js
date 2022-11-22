import React from "react";
export default function Quiz ({question,correct,arrayOfAnswers,isHeld,toggleAnswers,id,keyAnswers,check}) {
    arrayOfAnswers.indexOf(correct)===-1 && arrayOfAnswers.push(correct)

  
    // console.log(a)
 let array=arrayOfAnswers
//    console.log(arrayOfAnswers)
    React.useEffect(()=>{
         array = arrayOfAnswers.map(x=>({x, sort:Math.random()
        })).sort((a,b)=>a.sort-b.sort).map(({x})=>x)
    },[])


//    console.log(array)



    return (
        <div className="question-div">
            <h2 className="question-title">{question}</h2>
            <div className="answers-div">
               
                {array.map((x,index)=>{
                
                       
                    let style1 ={
                            backgroundColor: isHeld[index]?"#D6DBF5":"#F5F7FB"
                        }

                        let style2 = {
                            backgroundColor: correct===x?"#94D7A2":"transparent"
                        }
                        // console.log(<button 
                        //     questionId={questionId}
                        //     style={check?style2:style1} 
                        //     key={keyAnswers[index]}  
                        //     onClick={()=>toggleAnswers(id[index])} 
                        //     className="question-option">{x}
                        //     </button>)
                    return (<button 
                
                        style={check?style2:style1} 
                        key={keyAnswers[index]}  
                        onClick={()=>toggleAnswers(id[index])} 
                        className="question-option">{x}
                        </button>)
                    
                })}
                
            </div>
         
        </div>
    )
}