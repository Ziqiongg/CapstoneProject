import { Link } from "react-router-dom";
import logo from "../../assets/header-logo.png";
import React, { useState } from 'react';
import UpdateProfile from './UpdateProfile'
import './Profile.css';


const Profile = () => {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleFirstNameChange = event => setFirstName(event.target.value);
  const handleLastNameChange = event => setLastName(event.target.value);
  const handleEmailChange = event => setEmail(event.target.value);
  const handlePasswordChange = event => setPassword(event.target.value);


  const handleSubmit = event => {
    event.preventDefault();  
};

const updateUser = async() => {
const result = await UpdateProfile(firstName, lastName, email, password);
}



  return (
    <div class = "update-form">
      <form onSubmit = {handleSubmit}>

      <div class = "first-name">
          <label>
            Enter your first name:
            <input type = "text" name = "userFirstName" variant = "filled" onChange = {handleFirstNameChange} />
          </label>
      </div>

      <div class = "last-name">
          <label>
            Enter your last name:
            <input type = "text" name = "userLastName" variant = "filled" onChange = {handleLastNameChange} />
          </label>
      </div>

      <div class = "user-email">
          <label>
            Enter your email:
            <input type = "email" variant = "filled" name = "userAddress" onChange = {handleEmailChange} />
          </label>
      </div>

      <div class = "user-password">
          <label>
            Enter your password:
            <input type = "password" variant = "filled" name = "userPassword" onChange = {handlePasswordChange} />
          </label>
      </div>
      <div class = "clearfix">
        <button type = "reset" class = "cancelbtn">Cancel</button>
        <button class = "updatebtn" type = "submit" onClick = {updateUser}>Update Info</button>
      </div>
    </form>


  </div>
   
  );
};

export default Profile;