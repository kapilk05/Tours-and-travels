import React, {useState} from "react";
import "./Loginform.css"

export const Register = (props) =>{  
    const [email,setEmail] = useState('');
    const [pass,setPass] = useState('');
    const [name,setName] = useState('');
    
    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(email);
        console.log(pass);
    }  

    return(

        <div className="auth-form-container">

        <form className = "registerform"onSubmit={handleSubmit}> 
            <label > Full Name </label>
            <input value ={name} onChange={(e) => setName(e.target.value)} type = 'text' placeholder="Full Name" id = "name" name = "name" required />
            <label for="email"> Email </label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type = 'Email' placeholder="abc@example.com" id = "email" name = "email" required/>
            <label for="Password"> Password </label>
            <input value = {pass} onChange={(e) => setPass(e.target.value)} type = 'password' placeholder="Enter your password" id = "passowrd" name = "password" required/>
            <ActionLink />
            </form >
           <p>Already have an account? </p> 
            <button className ="link-btn"onClick={() => props.onFormSwitch('login')}> 
                LogIn Here
            </button>
            </div>
    )
}


function ActionLink() {
    const handleClick = (e) => {
      e.preventDefault();
      alert("Signed in successfully")
      window.location.reload(false);
    }
  
    return (
        <div className="form-button">
      <button onClick={handleClick}>
        Sign In 
      </button>
      </div>
    );
}