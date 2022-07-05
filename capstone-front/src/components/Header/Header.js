import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import './Header.css';
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from 'react';
import axios from 'axios';
import placeholder from '../Landing/ProductImages/LogoPlaceholder.jpg'
import ProductList from '../ProductList/ProductList';


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

    navigate(`/searchname`);

  }






  return (
    <>
     <div id={openLinks ? "open" : "close"}>
        <header className = "logo">


        <Link to="/"><h1 className = "title">Dodgy Amazon</h1></Link>

          <nav className = "Nav">           
            <ul className = "nav-buttons">
            <input type = "text" placeholder = "Search by name here..." onChange={handleOnChangeName} onClick = {handleOnClickSearchPage}></input>
            <button className = "not-white" type = "submit" onClick= {handleOnClickName} >Search</button> 

              <li><button><Link to = "/login">Login</Link></button></li>
              <li><button><Link to = "/register">Register</Link></button></li>
              <li><button><Link to = "/settings">Settings</Link></button></li>
              <li><button><Link to = "/basket">Basket</Link></button></li>
              <li><button><Link to = "/orders">My Orders</Link></button></li>
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

          <input type = "text" placeholder = "Search for categories here..." onChange={handleOnChangeCategory} onClick = {handleOnClickSearchPage}></input>
          <button className = "not-white" type = "submit" onClick= {handleOnClickCategory}>Search</button> 

        </nav2>

      </div>


    </>
  )
}

export default Header;
export {exportName};

