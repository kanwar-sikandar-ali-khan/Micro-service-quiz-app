import React,{useEffect} from 'react'
import {
    BrowserRouter,
    Route,
    useHistory,
    

} from "react-router-dom";

const NavigateScreen = () => {
    let history = useHistory();
    let quizType = process.env.REACT_APP_QUIZ_TYPE
    console.log(typeof(quizType))
    useEffect(() => {
        if(quizType = "1"){
            history.push(`/quiz-type3`);
        }else if (quizType = "2"){
            history.push(`/quiz-type3`);
        }else{
            history.push(`/quiz-type3`);
        }
        
    }, [])
  return (
    <div></div>
  )
}

export default NavigateScreen