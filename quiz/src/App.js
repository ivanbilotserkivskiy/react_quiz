
import NewGame from './components/New_game';
import React from 'react';
import Quiz from './components/Quiz';
import {nanoid} from 'nanoid' 

function App() {
  const [quiz, setQuiz] =React.useState([])


  React.useEffect (()=>{
 fetch('https://opentdb.com/api.php?amount=5&category=22&difficulty=easy&type=multiple')
 .then(ref=>ref.json())
 .then(data=>setQuiz(old=>old=data.results))
 
  },[]) 





  const [quize, showQuize] = React.useState(false)
  const quizMarkup = quiz.map(x=>{
        return <Quiz 
        key={nanoid()}
        question={x.question} 
        correct={x.correct_answer}
        arrayOfAnswers={x.incorrect_answers}
        isHeld={false}
        />
  })
  function toogle(){
    showQuize(olde=>olde=!olde)

  }




  console.log(quiz)


  return (
    <div className="quiz-div">
      <div className="figure-top">

            </div>
            <div className="figure-bottom">

            </div>
   
    {quize?quizMarkup: <NewGame  isHide={quize} toogle={()=>toogle()}/>} 
    </div>
  );
}

export default App;
