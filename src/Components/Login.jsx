import "./Loginform.css"
import React, {useState} from "react";


export const Login = (props) =>{
    const [email,setEmail] = useState('');
    const [pass,setPass] = useState('');

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(email);
        console.log(pass);

    }

    return(
        <div className="auth-form-container">
        <form className="loginform"onSubmit={handleSubmit}> 
            <label for="email"> Email </label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type = 'Email' placeholder="abc@example.com" id = "email" name = "email" required/>
            <label for="Password"> Password </label>
            <input value = {pass} onChange={(e) => setPass(e.target.value)} type = 'password' placeholder="Enter your password" id = "passowrd" name = "password" required/>
            <ActionLink />
           </form > 
            <p> Dont have a account?</p>
            <button className ="link-btn"onClick={() => props.onFormSwitch('register')}> 
            Register Here!
           </button>
            </div>
    )
}

function ActionLink() {
    const handleClick = (e) => {
      e.preventDefault();
      alert("Logged in successfully")
      window.location.reload(false);
    }
  
    return (
        <div className="form-button">
      <button onClick={handleClick}>
        Login 
      </button>
      </div>
    );
  }
