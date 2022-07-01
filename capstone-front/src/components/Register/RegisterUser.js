
import './Register.css';
import { Link } from "react-router-dom";
import React, { useState } from 'react';
import axios from 'axios';



const RegisterUser = (newUser) => fetch("http://localhost:8080/register", {
    method: 'POST',
    header:{
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: newUser
})
.catch((error) => {console.error(error)})



// axios.post(`http://127.0.0.1:8080/register?user=${user}`)
// .then(res =>{
//   console.log(res);
// }).catch((err) => console.log(err));


export default RegisterUser;