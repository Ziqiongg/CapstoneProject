import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './Login.css';
import { SERVER_URL } from '../../constants';
import Landing from '../Landing/Landing';
import { useContext } from 'react';
import { UserInfo } from '../../UserContext';
import { Snackbar } from '@mui/material';
import Header from '../Header/Header';
import { Link } from "react-router-dom";
import logo from "../../assets/header-logo.png";

const Login = () => {
// basically importing all the state so we can set the variables once a user is logged in 
const {user, setUser, open, setOpen, isAuthenticated, setAuthenticate, userId, setUserId} = useContext(UserInfo);

const handleChange = (event) => {
  setUser({... user, [event.target.name] : event.target.value});
}

const login = () => {
  // Add "login" to the url, fetching the login endpoint, specify method type, headers, and the body which contains the user object set in
  // the login form
  fetch(SERVER_URL + 'login', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(user)
  })
  .then(res => {
    // get the actual value of the token and store it in this variable: jwtToken
    const jwtToken = res.headers.get
    // setToken(res.headers.get)
    ('Authorization');
    if (jwtToken != null) {
      // if the user has been authenticated, jwtToken will not be null --> use sessionStorage so if the user refreshes page, they're still
      // logged in
      sessionStorage.setItem('jwt', jwtToken);
      // if the login is sucessful, change isAuthenticated to true
      setAuthenticate(true);
      console.log(user["username"]);
    } else {
      setOpen(true)
    }
  }).catch(err => console.error(err))

}
//  if the user has logged in successfully, take them to the Landing page
 if (isAuthenticated){
   return <Landing/>
   
 }
 

  const handleButton = () =>{
    const token = sessionStorage.getItem("jwt");
    fetch(SERVER_URL + 'users', {
    headers: {'Authorization': token}}
    )
  .then(response => response.json())
  .then(data => console.log(data));
  }

    
  

  return (
    <div className="login-form">
            <Link to='/'>
                <div
                    className = "title"><img src={logo} alt="logo"></img></div>
               
            </Link>
    <form>
    <div className='form-container'>
    <h1 className = "login-title"> Log In </h1>
      <label>Enter Your Username:
      <input
      name = "username"
      type = "text"
      variant = "filled"
      required
      onChange = {handleChange}/>
       </label>
      <label>Enter Your Password
      <input
      name = "password"
      type = "password"
      variant = "filled"
      required
      onChange = {handleChange}/>
      </label>

      <div class = "check-box">
        <label>
      <input type="checkbox"  name="remember" variant = "filled" required></input>
    </label>
    <p class = "terms-conditions"><Link to = "/conditions">By signing into an account you agree to our Conditions of Use and Privacy Notice that we are NOT amazon</Link></p>
        </div>
      
    <div class = "clearfix">
    
    <button class = "signupbtn" onClick = {handleButton}>Cancel</button>
    <button class = "signupbtn" onClick = {login}>Log In</button>
    <Snackbar
    // if the login attempt fails, message pops up relaying this.
    open = {open}
    autoHideDuration = {2000}
    onClose ={() => setOpen(false)}
    message = "Login attempt failed. Please try again."
    />
    </div>
    </div>
    </form>
    </div>
  )
  }

// Login.propTypes = {};

// Login.defaultProps = {};

export default Login;
