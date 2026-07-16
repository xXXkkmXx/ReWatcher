import { useEffect } from "react";

import "bootstrap/dist/css/bootstrap.css"

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
    <div id='header' className="border border-dark">
      <li>
        <ul><a href="#"><h2>Rewatcher</h2></a></ul>
        <ul><a href="#">Main</a></ul>
        <ul><a href="#">Calendar</a></ul>
        <ul><a href="#">Log In</a></ul>
      </li>
      <img id="toggleBtn" src="/sun.svg" onClick={Toggle}></img>
    </div>
  )
}

export default App;