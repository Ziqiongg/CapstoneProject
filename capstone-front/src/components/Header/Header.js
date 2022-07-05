import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import './Header.css';
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from 'react';
import axios from 'axios';
import { ReactComponent as Menu } from "../../assets/menu.svg";
import { ReactComponent as SearchIcon } from "../../assets/search-icon.svg";
import { ReactComponent as Cart } from "../../assets/cart.svg";
import { ReactComponent as Place } from "../../assets/place.svg";
import logo from "../../assets/header-logo.png";
import { InputGroup, FormControl, Form } from "react-bootstrap";
import placeholder from '../Landing/ProductImages/LogoPlaceholder.jpg'
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
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
        <header className = "header">


        <Link to="/"><h1 className = "title"><img src={logo} alt="logo" /></h1></Link>
        <div className="header__search">
        <input className="header__searchInput" type="text" placeholder = "Search by name here..." onChange={handleOnChangeName} onClick = {handleOnClickSearchPage}></input>
        <SearchIcon type = "submit" onClick= {handleOnClickName} className="header__searchIcon "></SearchIcon>
      </div>

{/* <input type = "text" placeholder = "Search by name here..." onChange={handleOnChangeName} onClick = {handleOnClickSearchPage}></input>
            <button className = "not-white" type = "submit" onClick= {handleOnClickName} >Search</button>  */}

<div className="header__nav">
        
        <div className="header__option">
        <button><Link to = "/login"><span className="header__optionLineOne">Login</span></Link></button>
        </div>

        <div className="header__option">
        <button><Link to = "/register"><span className="header__optionLineOne">Register</span></Link></button>
        </div>
      

      
        <div className="header__option">
        <button><Link to = "/orders"><span className="header__optionLineOne">Orders</span>
        </Link></button>
        </div>
      
      

      <div className="header__option">
      <button><Link to = "/settings"><span className="header__optionLineOne">Settings</span></Link></button>
      </div>
      
        <div className="header__optionBasket">
        <button><Link to = "/basket"><ShoppingBasketIcon /></Link></button>
          <span className="header__optionLineTwo header__basketCount">
            0
          </span>
        </div>
      
    </div>
        </header>

        <div className = "nav-bar">
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
          <button className = "dark-mode-button" onClick = {darkModeButton}>{isOn ? "☼": "☾"}</button>
        
        </div>

      </div>


    </>
  )
}

export default Header;
export {exportName};
