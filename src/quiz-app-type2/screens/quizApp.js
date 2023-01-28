import React, { useEffect, useState } from 'react';
import { getQuizDetails } from "../services/quiz_service";
import QuestionCard from '../Components/QuestionCard';

function QuizApp() {

  let [quiz, setQuiz] = useState([])
  let [currentStep, setCurrentStep] = useState(0)
  let [score, setScore] = useState(0)
  let [showResult, setShowResult] = useState(false)


  useEffect(() => {
    async function fetchData() {
      const questions = await getQuizDetails(5, 'easy');
      setQuiz(questions)
    }
    fetchData();
  }, []);
  console.log(quiz)


  const handleSubmit = async (e, userAns, type,setSelectedAns) => {
    e.preventDefault();
    

    const currentQuestion = quiz[currentStep];
    console.log("correct And: " + currentQuestion.correct_answer + "--user Selection:" + userAns)
    console.log(userAns, currentQuestion.correct_answer)
    if (type === "checkbox") {
      let checkCode = ""
      userAns.map((v,i)=>{
        checkCode +=  v.code
      })
      console.log(checkCode)
      if (checkCode === currentQuestion.correct_answer) {
        setScore(++score);
      }
      if (currentStep !== quiz.length - 1){
        setCurrentStep(++currentStep);
        setSelectedAns("")
      }
      else {
        setShowResult(true);
      }
    } else if (type === "radio") {
      if (userAns === currentQuestion.correct_answer) {
        setScore(++score);
      }
      if (currentStep !== quiz.length - 1){
        setCurrentStep(++currentStep);
        setSelectedAns("")
      }
      else {
        setShowResult(true);
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
      <QuestionCard
        options={quiz[currentStep].option}
        question={quiz[currentStep].question}
        callback={handleSubmit}
        type={quiz[currentStep].type}

      />
    </div>
  );
}

export default QuizApp;
