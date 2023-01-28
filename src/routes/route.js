import React,{useEffect} from 'react'
import {
    BrowserRouter,
    Route,
    useHistory,
    

} from "react-router-dom";
import NavigateScreen from './';
import QuizApp1 from '../quiz-app-type1/screens/quizApp';
import QuizApp2 from '../quiz-app-type2/screens/quizApp';
import QuizApp3 from '../quiz-app-type3/screens/quizApp';




const Routing = () => {    
    return (
        <div className="bg-white">

            <BrowserRouter >
            <Route exact path="/">
                   <NavigateScreen/>
                </Route>
                <Route exact path="/quiz-type1">
                    <QuizApp1 />
                </Route>
                <Route exact path="/quiz-type2">
                    <QuizApp2 />
                </Route>
                <Route exact path="/quiz-type3">
                    <QuizApp3 />
                </Route>
            </BrowserRouter>


        </div>

    )
}

export default Routing