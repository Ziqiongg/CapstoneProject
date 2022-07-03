import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './Login.css';
import { SERVER_URL } from '../../constants';


const Login = () => {


const [user, setUser] = useState({
  username: "",
  password: ""
});

const [isAuthenticated, setAuthenticate] = useState(false);

const [open, setOpen] = useState(false);


const handleChange = (event) => {
  setUser({...user, [event.target.name] : event.target.value});
}

const login = () => {
  // Add "login" to the url, fetching the login endpoint, specify method type, headers, and the body which contains the user object set in
  // the login form
  fetch(SERVER_URL + "login", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(user)
  })
  .then(res => {
    const jwtToken = res.headers.get
    ("Authorization");
    if (jwtToken != null) {
      // if the user has been authenticates, jwtToken will not be null --> use sessionStorage so if the user refreshes page, they're still
      // logged in
      sessionStorage.setItem("jwt", jwtToken);

      setAuthenticate(true);

    } else {
      setOpen(true)
    }


    
  }).catch(err => console.error(err))

}






  // const attemptLogin = () => {
  //   axios.get('http://127.0.0.1:8080/products')
  //   console.log("heya")
  // }
    
  

  return (

    <>
    <button>LogIn</button>
    </>
  )
  


  }









// Login.propTypes = {};

// Login.defaultProps = {};

export default Login;
