import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './Login.css';
import axios from 'axios';


const Login = () => {


  const [loggedIn, setLoggedIn] = useState(false);


  const attemptLogin = () => {
    axios.get('http://localhost:8080/products')
    console.log("heya")
  }
    
  

  return (

    <>
    <button onClick = {attemptLogin}>LogIn</button>
    </>
  )
  


  }









// Login.propTypes = {};

// Login.defaultProps = {};

export default Login;
