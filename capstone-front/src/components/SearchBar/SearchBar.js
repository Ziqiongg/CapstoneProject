import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './SearchBar.css';
import Header from '../Header/Header';
import ProductList from '../ProductList/ProductList';
// import { useHistory } from "react-router-dom";


const SearchBar = () => {

  const [name,  setName] = useState("")

  const handleInputName = (input) => {
    setName(input);
    console.log(name)
  }

  const [category,  setCategory] = useState("")

  const handleInputCategory = (input) => {
    setCategory(input);
    console.log(category);
  }



  if (name) {
    return (
      <div className="SearchBar">
        <Header name = {name} setName = {handleInputName} setCategory = {handleInputCategory}/>
        <ProductList 
            address = {`http://localhost:8080/products/name/${name}`}  />
      </div>
    )

  } else if (category) {

    return (
      <div className="SearchBar">
        <Header name = {name} setName = {handleInputName} setCategory = {handleInputCategory}/>
        <ProductList 
            address = {`http://localhost:8080/products/category/${category}`}  />
      </div>)

  } else {
    return (
      <div className="SearchBar">
        <Header name = {name} setName = {handleInputName} setCategory = {handleInputCategory}/>
        <ProductList 
            address = {`http://localhost:8080/products`}  />
      </div>
    )

  }



};

SearchBar.propTypes = {};

SearchBar.defaultProps = {};

export default SearchBar;
