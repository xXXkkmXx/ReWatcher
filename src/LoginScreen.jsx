import { Button } from "bootstrap";
import React from "react"
import { replace, useNavigate } from "react-router-dom";
import axios from "axios";


const LoginScreen = () =>{
    
    return(
        <div id="LoginTab" className="border border-dark">
            <form onSubmit={()=>{}}>
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
                <a href="/register" id="linkCreate">create a account</a>
                <p>
                    <button className="border border-dark">Login</button>
                </p>
            </form>
        </div>
    )
}

export default LoginScreen;