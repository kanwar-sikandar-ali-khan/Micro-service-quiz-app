import React, { useEffect, useState } from "react";
import './App.css';
import Routing from "./routes/route"
import ResponsiveAppBar from './shared-component/navbar';
import {getCookie} from "../src/Functions/cookieFunction"
import { useSelector, useDispatch } from "react-redux";

function App() {

  const appState = useSelector((state) => state);
  const appDispatch = useDispatch();  
  useEffect(() => {
    const handleSetLoginStatus = () => {
      appDispatch({ type: "SET_LOGIN_STATUS", loggedIn: Boolean(getCookie("Profile")) });
    };
    handleSetLoginStatus()
  }, [])

  console.log(appState)
  
  
  return (
    <div className="App"> 
      <ResponsiveAppBar/>
      <Routing />

    </div>
  );
}

export default App;
