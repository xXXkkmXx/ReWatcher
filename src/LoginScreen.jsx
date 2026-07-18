import { Button } from "bootstrap";
import React from "react"

const LoginScreen = () =>{
    return(
        <div id="LoginTab" className="border border-dark">
            <h2 className="border-bottom border-dark">Login</h2>
            <p>
                <label>username:</label>
            </p>
            <p> 
                <input className="border-bottom border-secondary" type="text"/>
            </p>
            <p>
                <label>password:</label>
            </p>
            <p>
                <input type="text"/>
            </p>
            <a href="#">you forgot a password?</a>
            <p>
                <button className="border border-dark">Login</button>
                <button className="border border-dark">Sign in</button>
            </p>
        </div>
    )
}

export default LoginScreen;