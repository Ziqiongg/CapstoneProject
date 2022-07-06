import { Link } from "react-router-dom";
import logo from "../../assets/header-logo.png";
import React, { useState } from 'react';
import UpdateProfile from './UpdateProfile'
import './Profile.css';


const Profile = () => {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [country, setCountry] = useState('');
  const [password, setPassword] = useState('');

  const handleFirstNameChange = event => setFirstName(event.target.value);
  const handleLastNameChange = event => setLastName(event.target.value);
  const handleCountryChange = event => setCountry(event.target.value);
  const handlePasswordChange = event => setPassword(event.target.value);


  const handleSubmit = event => {
    event.preventDefault();  
};

const updateUser = async() => {
const result = await UpdateProfile(firstName, lastName, country, password);
}



  return (
    <div className = "update-form">
      <Link to='/'>
                <div
                    className = "title"><img src={logo} alt="logo"></img></div>
               
            </Link>
      <form onSubmit = {handleSubmit}>

      <div class = "form-container">
          <label>
            Enter your first name:
            <input type = "text" name = "userFirstName" variant = "filled" onChange = {handleFirstNameChange} />
          </label>
      

      
          <label>
            Enter your last name:
            <input type = "text" name = "userLastName" variant = "filled" onChange = {handleLastNameChange} />
          </label>
      

      
          <label>
            Enter your Country:
            <input type = "text" variant = "filled" name = "userCountry" onChange = {handleCountryChange} />
          </label>
      

  
          <label>
            Enter your password:
            <input type = "password" variant = "filled" name = "userPassword" onChange = {handlePasswordChange} />
          </label>
      
      <div class = "clearfix">
        <button type = "reset" class = "signupbtn">Cancel</button>
        <button class = "signupbtn" type = "submit" onClick = {updateUser}>Update Info</button>
      </div>
      </div>
    </form>


  </div>
   
  );
};

export default Profile;