import React, { useEffect, useState } from 'react';
import { getQuizDetails } from "../services/quiz_service";
import QuestionCard from '../Components/QuestionCard';
import Button from "@material-ui/core/Button";

function QuizApp() {

  let [quiz, setQuiz] = useState([])
  let [currentStep, setCurrentStep] = useState(0)
  let [score, setScore] = useState(0)
  let [showResult, setShowResult] = useState(false)
  const [store,setStore] = useState([])

  
  useEffect(() => {
    console.log("score=>",score)
    console.log("store=>",store)
  }, [score])
  
  useEffect(() => {
    async function fetchData() {
      const questions = await getQuizDetails(5, 'easy');
      setQuiz(questions)
    }
    fetchData();
  }, []);

  
  
  
  const handleUpdateScore = async (userAns, questionNo, type) => {    
    const currentQuestion = await quiz[questionNo];
    // console.log(userAns, currentQuestion)
    // console.log("correct And: " + currentQuestion.correct_answer + "--user Selection:" + userAns)
    // console.log(type)
    if (type === "checkbox") {
      let checkCode = ""
      userAns.map((v, i) => {
        checkCode += v.code
      })
      console.log(checkCode)
      let hasInclude = store.includes(currentQuestion.correct_answer)
      console.log("hasInclude",hasInclude)
      if(hasInclude){
        setScore(--score);
        const arr = [...store]
        const res = arr.filter(element => element !== currentQuestion.correct_answer);
        console.log("52",res)
        setStore(res)

      }else{
        if (checkCode === currentQuestion.correct_answer) {
          setScore(++score);
          setStore([...store,currentQuestion.correct_answer])
    
        }
      }
     
      
    } else if (type === "radio") {
      let hasInclude = store.includes(currentQuestion.correct_answer)
      console.log("hasInclude",hasInclude)
      if(hasInclude){
        setScore(--score);
        const arr = [...store]
        const res = arr.filter(element => element !== currentQuestion.correct_answer);
        setStore(res)

      }else{
        if (userAns === currentQuestion.correct_answer) {
          setScore(++score);
          setStore([...store,currentQuestion.correct_answer])
    
        }
      }
      
    }

  }




  if (!quiz.length)
    return <h3>Loading.. </h3>

  if (showResult) {
    return (<div className="question-container result-container">
      <h2>Result</h2>

      <p className="result-text">
        You final score is
        <b> {score}</b> out of <b>{quiz.length}</b>
      </p>
    </div>)
  }
  return (
    <div className="App">
      <h1>Quiz App</h1>

      {quiz.map((qz, index) => {
        return (
          <QuestionCard
            options={qz.option}
            question={qz.question}
            type={qz.type}
            questionNo={index}
            handleUpdateScore={handleUpdateScore}

          />
        )
      })}
      <Button color="secondary" variant="contained" onClick={()=>setShowResult(true)} className="submit mt-5">submit</Button>
    </div>
  );
}

export default QuizApp;
