import { useEffect } from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import ReactDOM from "react-dom";

import Calendar from "./Calendar";
import LoginScreen from "./LoginScreen";

import "bootstrap/dist/css/bootstrap.css"

const Error404 = () =>{
  return (
    <>
      <h2>Page was not found :(</h2>
    </>
  )
}

const Toggle = () =>{
  const newTheme = localStorage.getItem("theme") == "dark" ? "light" : "dark";
  document.querySelector("html").setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);  
  document.getElementById("toggleBtn").src = newTheme === "dark" ? "/moon.svg" : "/sun.svg";
}

function App (){
  const DetectingTheme = () =>{
    return window.matchMedia("(prefers-color-scheme: dark)") ? "dark" : "light";
  }
  const LoadTheme = () =>{
    document.querySelector("html").setAttribute("data-theme",DetectingTheme());
    localStorage.setItem("theme", DetectingTheme());
    document.getElementById("toggleBtn").src = DetectingTheme() === "dark" ? "/moon.svg" : "/sun.svg";
  }

  useEffect(()=>{
    LoadTheme();
  },[]); 

  return(
    <>
      <BrowserRouter>
        <div id='header' className="border border-dark">
          <li>
            <ul><h2>Rewatcher</h2></ul>
            <ul><a href="/">Main</a></ul>
            <ul><a href="/Calendar">Calendar</a></ul>
            <ul><a href="/Login">Log In</a></ul>
          </li>
          <img id="toggleBtn" src="/sun.svg" onClick={Toggle}></img>
        </div>
        <div id="Content">
          <Routes>
            <Route exact path="/" Component={()=>{<h1>Home</h1>}}/>
            <Route path="/Calendar" Component={Calendar}/>
            <Route path="/Login" Component={LoginScreen}/>
            <Route path="*" Component={Error404}/>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App;