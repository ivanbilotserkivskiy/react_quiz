
import NewGame from './components/New_game';
import React from 'react';
import Quiz from './components/Quiz';
import {nanoid} from 'nanoid' 

function App() {
  const [quiz, setQuiz] =React.useState([])
  const [quize, showQuize] = React.useState(false)
  React.useEffect (()=>{
 fetch('https://opentdb.com/api.php?amount=5&category=22&difficulty=easy&type=multiple')
 .then(ref=>ref.json())
 .then(data=>data.results.map(x=>{
  return {
    ...x,
    isHeld:[false,false,false,false],
    id:[nanoid(),nanoid(),nanoid(),nanoid()],
    check:false,

  }
 })).then(data=>setQuiz(data))



 
  },[]) 

  function toggleAnswers (id){
    setQuiz(p=>p.map((d)=>{
      let a = d.id.indexOf(id)
      let b = d.isHeld
      if(a>-1){
        b= d.isHeld.map((o,index)=>{
          return index===a?!o:false
        })
      }
      console.log(id)
      return {
        ...d,
        isHeld:b
      }
  
}))
 }
  
  const quizMarkup = quiz.map(x=>{
    
        return <Quiz 
        key={nanoid()}
        question={x.question}
        
        correct={x.correct_answer}
        arrayOfAnswers={x.incorrect_answers}
        isHeld={x.isHeld}
        id={x.id}
        keyAnswers={[nanoid(),nanoid(),nanoid(),nanoid()]}
        check={x.check}
        toggleAnswers={toggleAnswers}
        
        />
  })
  function toogle(){

    showQuize(olde=>olde=!olde)
    
    
  }

 console.log(quiz)

  // console.log(quiz)
function checkAnswers() {
  setQuiz(old=>old.map(x=>{
    return {
      ...x,
      check:true
    }
  }))
}

  return (
    <div className="quiz-div">
      <div className="figure-top">

            </div>
            <div className="figure-bottom">

            </div>
   
    {quize?quizMarkup: <NewGame  isHide={quize} toogle={()=>toogle()}/>} 
    {quize&&<button className="check-button" onClick={checkAnswers}>Check answers</button>}
    </div>
  );
}

export default App;
