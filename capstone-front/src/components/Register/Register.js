
import './Register.css';
import { Link } from "react-router-dom";

import React, { useState } from 'react';
import axios from 'axios';
import RegisterUser from './RegisterUser';



const Register = () => {

  const [newUser, setNewUser] = useState('');
  const [userName, setUserName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleUserNameChange = event => setUserName(event.target.value);
  const handleFirstNameChange = event => setFirstName(event.target.value);
  const handleLastNameChange = event => setLastName(event.target.value);
  const handleEmailChange = event => setEmail(event.target.value);
  const handlePasswordChange = event => setPassword(event.target.value);


  const handleSubmit = event => {
    event.preventDefault();

  const user = {
    "userName": userName,
    "firstName": firstName,
    "lastName": lastName,
    "email": email,
    "password": password
  }

  setNewUser(user);
  
};

const addUser = async() => {
const result = await RegisterUser(JSON.stringify(newUser));
}



  return (
    <div class = "register-form">
      <form onSubmit = {handleSubmit}>

      <div class = "user-name">
          <label>
            Enter your username:
            <input type = "text" name = "userName" variant = "filled" required onChange = {handleUserNameChange} />
          </label>
        </div>

        <div class = "first-name">
          <label>
            Enter your first name:
            <input type = "text" name = "firstName" variant = "filled" required onChange = {handleFirstNameChange} />
          </label>
        </div>

        <div class = "last-name">
          <label>
            Enter your last name:
            <input type = "text" name = "lastName" variant = "filled" required onChange = {handleLastNameChange} />
          </label>
        </div>

        <div class = "user-email">
          <label>
            Enter your email:
            <input type = "email" variant = "filled" required name = "email" onChange = {handleEmailChange} />
          </label>
        </div>

        <div class = "user-password">
          <label>
            Enter your password:
            <input type = "password" variant = "filled" required name = "password" onChange = {handlePasswordChange} />
          </label>
        </div>
        
        <div class = "check-box">
        <label>
      <input type="checkbox"  name="remember" required></input>
    </label>
    <p class = "terms-conditions"><Link to = "/conditions">By creating an account you agree to our Terms & Conditions</Link></p>
        </div>

    <div class = "clearfix">
      <button type = "reset" class = "cancelbtn">Cancel</button>
    <button class = "signupbtn" type = "submit" onClick = {addUser}>Sign Up</button>
    </div>
      </form>


    </div>
   
  );
};

export default Register;