import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import './Header.css';
import { Link } from "react-router-dom";
import { useEffect } from 'react';
import axios from 'axios';


function Header () {

  const [openLinks,setOpenLinks] = useState(false);

  const [isOn, setIsOn] = useState(false);

  function darkModeButton(){
    
    document.body.classList.toggle("dark");

    setIsOn(isOn => !isOn);
  }

  //get categories
  const [categories, setCategories] = useState([]);

  useEffect(() =>{
    axios.get('localhost:8080/categories')
      .then(response =>{
        setCategories(response.data);
      })
    })
  console.log(categories)


  return (
    <>
     <div id={openLinks ? "open" : "close"}>
        <header className = "logo">
          <h1 className = "title">Title
          </h1>
          <nav className = "Nav">
            
            <ul className = "nav-buttons">
            <input type = "text" placeholder = "Search..."></input>
      <button className = "not-white" type = "submit">Search</button> 
              <li><button><Link to = "/login">Login</Link></button></li>
              <li><button><Link to = "/register">Register</Link></button></li>
              <li><button><Link to = "/settings">Settings</Link></button></li>
              <li><button><Link to = "/feedPage">Feed</Link></button></li>
              <button className = "dark-mode-button" onClick = {darkModeButton}>{isOn ? "☼": "☾"}</button>
            </ul>
          </nav>
          </header>


          <nav2>
     
      <div className="dropdown">
  <button className="dropbtn">Categories</button>
  <div className="dropdown-content">
    <Link to = "/category1">Category 1</Link>
    <Link to = "/category2">Category 2</Link>
    <Link to = "/category3">Category 3</Link>
  </div>
</div>
      <input type = "text" placeholder = "Search for categories here..." ></input>
      <button className = "not-white" type = "submit">Search</button>    

          </nav2>
   
          </div>
      


    </>
  )
}

export default Header;
