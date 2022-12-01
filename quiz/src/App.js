
import NewGame from './components/New_game';
import React from 'react';
import Quiz from './components/Quiz';
import {nanoid} from 'nanoid' 

function App() {
  const [quiz, setQuiz] =React.useState([])
  const [quize, showQuize] = React.useState(false)
  const [newGame, setNewGame] = React.useState(false)
  React.useEffect (()=>{
 fetch('https://opentdb.com/api.php?amount=5&category=22&difficulty=easy&type=multiple')
 .then(ref=>ref.json())
 .then(data=>data.results.map(x=>{
  return {
    ...x,
    isHeld:[false,false,false,false],
    id:[nanoid(),nanoid(),nanoid(),nanoid()],
    check:false,
    guess:false

  }
 })).then(data=>setQuiz(data))
 
  },[newGame]) 

  let count = 0

  function toggleAnswers (id){
    setQuiz(p=>p.map((d)=>{
      let a = d.id.indexOf(id)
      let b = d.isHeld
      if(a>-1&&!d.check ){
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
    x.incorrect_answers.indexOf(x.correct_answer)===-1 && x.incorrect_answers.splice(Math.floor(Math.random() * 3),0,x.correct_answer)
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
  let a =  false
  x.isHeld.map((k,index)=> {
      if(k&& x.incorrect_answers.indexOf(x.correct_answer)===index ){
        return a=!x.guess
      }

  }) 
    return {
      ...x,
      check:true,
      guess:a
    }
  }))
 
}
quiz.map(x=>{
 count = x.guess?count+1:count
})
console.log(count)


  function startNewGame () {
    setNewGame(old=>!old)
    showQuize(old=>!old)
  }


  return (
    <div className="quiz-div">
      <div className="figure-top">

            </div>
            <div className="figure-bottom">

            </div>
   
    {quize?quizMarkup: <NewGame  isHide={quize} toogle={()=>toogle()}/>} 
    {quize&&!quiz[0].check&&<button className="check-button" onClick={checkAnswers}>Check answers</button>}
    {quize&&quiz[0].check&&<p>You scored {count}/5 correct answers </p>}
    {quize&&quiz[0].check&&<button className="check-button play-again-button" onClick={startNewGame}>Play again</button>}
    </div>
  );
}

export default App;
