import React from "react";
export default function Quiz ({question,correct,arrayOfAnswers,isHeld,toggleAnswers,id,keyAnswers,check}) {

    
    arrayOfAnswers.indexOf(correct)===-1 && arrayOfAnswers.splice(Math.floor(Math.random() * 11),0,correct)




    return (
        <div className="question-div">
            <h2 className="question-title">{question}</h2>
            <div className="answers-div">
               
                {arrayOfAnswers.map((x,index)=>{
                
                       
                    let styleHeld ={
                            backgroundColor: isHeld[index]?"#D6DBF5":"#F5F7FB"
                        }

                  
                        let checkedStyles = {
                            backgroundColor:"#F8BCBC",
                            opacity:1
                        }
                        function styles () {
                            if(check&&x===correct) {
                             checkedStyles.backgroundColor="#94D7A2"
                             return checkedStyles
                            }
                            else if(check&&x!=correct) {
                                checkedStyles.backgroundColor=isHeld[index]?"#F8BCBC":"transparent"
                                checkedStyles.opacity=0.5
                                return checkedStyles
                            }
                            else if (!check){
                                
                                return styleHeld
                            }
                            else if (check&&isHeld[index]===false) {
                                checkedStyles.backgroundColor="transparent"
                                return checkedStyles
                            }
                        }
                   
                    return (<button 
                
                        style={styles()} 
                        key={keyAnswers[index]}  
                        onClick={()=>toggleAnswers(id[index])} 
                        className="question-option">{x}
                        </button>)
                    
                })}
                
            </div>
         
        </div>
    )
}