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


  const handleSubmit = (e, userAns) => {
    e.preventDefault();

    const currentQuestion = quiz[currentStep];

    console.log("correct And: " + currentQuestion.correct_answer + "--user Selection:" + userAns)

    if (userAns === currentQuestion.correct_answer) {
      setScore(++score);
    }

    if (currentStep !== quiz.length - 1)
      setCurrentStep(++currentStep);
    else {
      setShowResult(true);
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
      />
    </div>
  );
}

export default QuizApp;
