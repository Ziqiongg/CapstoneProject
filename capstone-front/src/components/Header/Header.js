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

    axios.get('http://localhost:8080/categories')
      .then(response => {
        setCategories(response.data); 
  
      })
      .catch(error => {console.log(error)})
    },[categories])




  return (
    <>
     <div id={openLinks ? "open" : "close"}>
        <header className = "logo">
          <h1 className = "title">Title</h1>
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
              {categories.map((each, index) => {
                let itemLowercase = each.toLowerCase();
                let filterItem = itemLowercase[0].toUpperCase() + itemLowercase.substr(1);
                return (
                  <Link to = {`/productcategory/${itemLowercase}`} key = {index} >{filterItem} </Link>
                )
              })}
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

