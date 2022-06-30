import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import './Header.css';
import { Link } from "react-router-dom";


function Header () {

  const [openLinks,setOpenLinks] = useState(false);

  const [isOn, setIsOn] = useState(false);

  function darkModeButton(){
    
    document.body.classList.toggle("dark");

    setIsOn(isOn => !isOn);
  }

  return (
    <>
     <div id={openLinks ? "open" : "close"}>
        <header class = "logo">
          <h1 class = "title"><a href = "/"></a>Title
          </h1>
          <nav className = "Nav">
            
            <ul class = "nav-buttons">
            <input type = "text" placeholder = "Search..."></input>
      <button class = "not-white" type = "submit">Search</button> 
              <li><a href = "/loginpage"></a><button>Login</button></li>
              <li><a href = "/signuppage"></a><button>Sign Up</button></li>
              <li><a href = "/orderspage"></a><button>Orders</button></li>
              <li><a href = "/basketpage"></a><button>Basket</button></li>
              <button className = "dark-mode-button" onClick = {darkModeButton}>{isOn ? "☼": "☾"}</button>
            </ul>
          </nav>
          </header>


          <nav2>
     
      <div class="dropdown">
  <button class="dropbtn">Categories</button>
  <div class="dropdown-content">
    <a href="#">Category 1</a>
    <a href="#">Category 2</a>
    <a href="#">Category 3</a>
  </div>
</div>
      <input type = "text" placeholder = "Search for categories here..." ></input>
      <button class = "not-white" type = "submit">Search</button>    

          </nav2>
   
          </div>
      


    </>
  )
}

export default Header;
