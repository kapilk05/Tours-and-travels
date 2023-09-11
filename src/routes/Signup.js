import React, {useState} from "react";
import { Login } from '../Components/Login';
import { Register } from '../Components/Register';
import Navbar from "../Components/Navbar";

function Singup() {
  const[currentForm, setCurrentForm] = useState('login');
  const toggleForm = (formName) =>{
      setCurrentForm(formName);
  }
  return (
    <>
    <Navbar/>
    
    <div className='abc'>
      {
      currentForm  === "login" ? <Login onFormSwitch = {toggleForm} /> : <Register onFormSwitch = {toggleForm} />
      } 
      </div>
      </>
    );
  }


export default Singup;
