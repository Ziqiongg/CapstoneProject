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
    
        <header class = "logo">
          <h1 class = "title"><a href = "/"></a>Title
          </h1>
          <div className = "searchBar">
      <input type = "text" placeholder = "Search..."></input>
      <button class = "not-white" type = "submit">Search</button>    
    </div>
          <nav>
            
            <ul class = "nav-buttons">
              <li><a href = "/loginpage"></a><button>Login</button></li>
              <li><a href = "/signuppage"></a><button>Sign Up</button></li>
              <li><a href = "/orderspage"></a><button>Orders</button></li>
              <li><a href = "/basketpage"></a><button>Basket</button></li>
              <button className = "dark-mode-button" onClick = {darkModeButton}>{isOn ? "☼": "☾"}</button>
            </ul>
          </nav>
          </header>

          <nav2>
      <div className='leftSide' id={openLinks ? "open" : "close"}>
          <div class = "dropdown">
          <button class = "drop-button">
          Categories
          </button>
          <div class = "dropdown-content">
          <a href="/">1</a>
          <a href="/">2</a>
          <a href="/">3</a>
          <a href="/">4</a>
          </div>
          </div>
          <div className = "category-search">
      <input type = "text" placeholder = "Search for categories here..." ></input>
      
      <button class = "not-white" type = "submit">Search</button>    
    </div>
</div>


          </nav2>
       
   

      


    </>
  )
}

export default Header;
