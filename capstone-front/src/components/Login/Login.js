import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './Login.css';
import { SERVER_URL } from '../../constants';
import Landing from '../Landing/Landing';
import { useContext } from 'react';
import { UserInfo } from '../../UserContext';
import { Snackbar } from '@mui/material';
import Header from '../Header/Header';


const Login = () => {
// basically importing all the state so we can set the variables once a user is logged in 
const {user, setUser, open, setOpen, isAuthenticated, setAuthenticate, jwtToken, setToken} = useContext(UserInfo);

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
      console.log(user)

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

    <>
    <Header/>
    <form>
      <label>Username: </label>
      <input
      name = "username"
      type = "text"
      onChange = {handleChange}/>
      <label>Password</label>
      <input
      name = "password"
      type = "text"
      onChange = {handleChange}/>
    </form>
    <button onClick = {login}>LogIn</button>
    <Snackbar
    // if the login attempt fails, message pops up relaying this.
    open = {open}
    autoHideDuration = {2000}
    onClose ={() => setOpen(false)}
    message = "Login attempt failed. Please try again."
    />
    <button onClick = {handleButton}>Clciky</button>
    </>
  )
  


  }









// Login.propTypes = {};

// Login.defaultProps = {};

export default Login;
