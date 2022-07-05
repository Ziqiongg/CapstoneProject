import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import './Header.css';
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from 'react';
import axios from 'axios';
import ProductList from '../ProductList/ProductList';
import { Navigate } from "react-router-dom";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

let exportName;


const  Header = (props) => {

  const [openLinks,setOpenLinks] = useState(false);
  const [isOn, setIsOn] = useState(false);

  function darkModeButton(){
    
    document.body.classList.toggle("dark");
    setIsOn(isOn => !isOn);
  }


  //get categories
  const [category, setCategory] = useState([]);

  useEffect(() =>{

    axios.get('http://localhost:8080/categories')
      .then(response => {
        setCategory(response.data);
      })
      .catch(error => {console.log(error)})
    }, [])



    //input name and get product list
  const [inputName,setInputName] = useState("");

  const handleOnChangeName = (event) => {
    // console.log(event.target.value);
    setInputName(event.target.value);

  }


  const handleOnClickName = (event) => {
    event.preventDefault();
    props.setName(inputName);

 
  }

  //input category and get product list
  const [inputCategory, setInputCategory] = useState("");

  const handleOnChangeCategory = (event) => {

    setInputCategory(event.target.value);
    
  }

  const handleOnClickCategory = (event) =>{
    event.preventDefault();
    props.setCategory(inputCategory);
  }

  let navigate = useNavigate();
  const handleOnClickSearchPage = () =>{

    navigate(`http://localhost:3000/searchname`);
    <Navigate to="/dashboard" replace={true} />

  }






  return (
    <>
     <div id={openLinks ? "open" : "close"}>
        <header className = "logo">
          <h1 className = "title">Title</h1>
          <nav className = "Nav">           
            <ul className = "nav-buttons">
            <input type = "text" placeholder = "Search by name here..." onChange={handleOnChangeName} onClick = {handleOnClickSearchPage}></input>
            <button className = "not-white" type = "submit" onClick= {handleOnClickName} >Search</button> 

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
              {category.map((each, index) => {
                let itemLowercase = each.toLowerCase();
                let filterItem = itemLowercase[0].toUpperCase() + itemLowercase.substr(1);
                return (

                  <Link to = {`/productcategory/${itemLowercase}`} key = {index} >{filterItem} </Link>

                )
              })}
            </div>
          </div>

          <input type = "text" placeholder = "Search for categories here..." onChange={handleOnChangeCategory}></input>
          <button className = "not-white" type = "submit" onClick= {handleOnClickCategory}>Search</button> 

        </nav2>

      </div>


    </>
  )
}

export default Header;
export {exportName};

