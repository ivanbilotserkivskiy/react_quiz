
import NewGame from './components/New_game';
import React from 'react';
import Quiz from './components/Quiz';


function App() {
  const [quiz, setQuiz] =React.useState([])


  React.useEffect (()=>{
 fetch('https://opentdb.com/api.php?amount=5&category=22&difficulty=easy&type=multiple')
 .then(ref=>ref.json())
 .then(data=>setQuiz(old=>old=data.results))
 
  },[]) 


  


  const [quize, showQuize] = React.useState(false)
  const quizMarkup = quiz.map(x=>{
        return <Quiz question={x.question} 
        correct={x.correct_answer}
        option1={x.incorrect_answers[0]}
        option2={x.incorrect_answers[1]}
        option3={x.incorrect_answers[2]}
        />
  })
  function toogle(){
    showQuize(olde=>olde=!olde)
  }
  console.log(quiz)
  return (
    <div>
   
    {quize?quizMarkup: <NewGame  isHide={quize} toogle={()=>toogle()}/>} 
    </div>
  );
}

export default App;
