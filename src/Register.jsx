import React from "react";
import { useState , useEffect } from "react";
import md5 from "md5"
import axios from "axios";


const RegisterTab = () =>{
    const [username,setUsername] = useState(""); 
    const [password,setPassword] = useState("");
    const [email,setEmail] = useState("");
    const [repeatPass,setRepeatPass] = useState(false);

    const onChangePassword = (event) =>{
        event.preventDefault();
        setPassword(md5(event.target.value));
    }
    const onChangeUserName = (event) =>{
        event.preventDefault();
        setUsername(event.target.value);
    }
    const onChaneEmail = (event) =>{
        event.preventDefault();
        setEmail(event.target.value);
    }
    const onReTypingPass = (event) =>{
        const inputRe = document.getElementById("repasswrd");
        setRepeatPass(md5(event.target.value) != password)
        if(md5(event.target.value) != password){
            inputRe.classList.add("border");
            inputRe.classList.add("border-danger");
        }else{
            inputRe.classList.remove("border");
            inputRe.classList.remove("border-danger");
        }
    }

    return (
        <div id="RegisterTab">
            <form onSubmit={()=>{}}>
                <h2 className="border-bottom border-dark">Register</h2>
                <p>
                    <label>username:</label>
                </p>
                <p> 
                    <input type="text" onChange={onChangeUserName} required/>
                </p>
                <p>
                    <label>email:</label>
                </p>
                <p>
                    <input name="email" type="email" onChange={onChaneEmail} required/>
                </p>
                <p>
                    <label>password:</label>
                </p>
                <p>
                    <input name="passwrd" type="password" onChange={onChangePassword} required/>
                </p>
                <p>
                    <label>repeat password:</label>
                </p>
                <p>
                    <input id="repasswrd" type="password" onChange={onReTypingPass} required/>
                </p>
                <p>
                    <button className="border border-dark">Register</button>
                </p>
            </form>
        </div>
    )
}

export default RegisterTab;