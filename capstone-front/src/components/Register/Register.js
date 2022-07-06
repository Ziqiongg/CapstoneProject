
import './Register.css';
import { Link } from "react-router-dom";
import logo from "../../assets/header-logo.png";
import React, { useState } from 'react';
import axios from 'axios';
import RegisterUser from './RegisterUser';
import Header from '../Header/Header';



const Register = () => {

  const [newUser, setNewUser] = useState({});
  const [userName, setUserName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [country, setCountry] = useState('');
  const [password, setPassword] = useState('');

  const handleUserNameChange = event => setUserName(event.target.value);
  const handleFirstNameChange = event => setFirstName(event.target.value);
  const handleLastNameChange = event => setLastName(event.target.value);
  const handleCountryChange = event => setCountry(event.target.value);
  const handlePasswordChange = event => setPassword(event.target.value);


  const handleSubmit = event => {
    event.preventDefault();

  const user = {
    "userFirstName": firstName,
    "userLastName": lastName,
    "username": userName,
    "country": country,
    "userPassword": password
  }

  setNewUser(user);
  
};

const addUser = async() => {
const result = await RegisterUser(JSON.stringify(newUser));
}



  return (
    <><Header />

    <div className="register-form">
            <Link to='/'>
                <div
                    className = "title"><img src={logo} alt="logo"></img></div>
               
            </Link>
      <form onSubmit = {handleSubmit}>
      <div className='form-container'>
      <h1 className = "register-title"> Create account </h1>

      
          <label>
            Enter your username:
            <input type = "text" name = "username" variant = "filled" required onChange = {handleUserNameChange} />
          </label>
       

        
          <label>
            Enter your first name:
            <input type = "text" name = "userFirstName" variant = "filled" required onChange = {handleFirstNameChange} />
          </label>
        

        
          <label>
            Enter your last name:
            <input type = "text" name = "userLastName" variant = "filled" required onChange = {handleLastNameChange} />
          </label>
       

       
          <label>
            Enter your Country:
            <input type = "text" variant = "filled" required name = "country" onChange = {handleCountryChange} />
          </label>
        

        
          <label>
            Enter your password:
            <input type = "password" variant = "filled" required name = "userPassword" onChange = {handlePasswordChange} />
          </label>
        
        
        <div className = "check-box">
        <label>
      <input type="checkbox"  name="remember" required></input>
    </label>
    <p className = "terms-conditions"><Link to = "/conditions">By creating an account you agree to our Conditions of Use and Privacy Notice that we are NOT amazon</Link></p>
        </div>

    <div className = "clearfix">
      <button className = "signupbtn" type = "reset" >Cancel</button>
    <button className = "signupbtn" type = "submit" onClick = {addUser}>Sign Up</button>
    </div>
    </div>
      </form>


    </div>
    </>
   
  );
};

export default Register;