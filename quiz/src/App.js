
import NewGame from './components/New_game';
import React from 'react';

function App() {
  const [quiz,setQuiz] =React.useState([])


  React.useEffect (()=>{
 fetch('https://opentdb.com/api.php?amount=5&category=22&difficulty=easy')
 .then(ref=>ref.json())
 .then(data=>setQuiz(old=>old=data.results))
 
  },[]) 


  console.log(quiz)
  return (
    <div>
    <NewGame/>
    </div>
  );
}

export default App;
