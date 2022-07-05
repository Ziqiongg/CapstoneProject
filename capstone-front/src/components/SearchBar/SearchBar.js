import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './SearchBar.css';
import Header from '../Header/Header';
import ProductList from '../ProductList/ProductList';
// import { useHistory } from "react-router-dom";


const SearchBar = () => {

  const [name,  setName] = useState("")
  // const history = useHistory();

  const handleInputName = (input) => {
    setName(input);
    console.log(name)
  }

  if (name) {
    return (
      <div className="SearchBar">
        <Header name = {name} setName = {handleInputName}/>
        <ProductList 
            address = {`http://localhost:8080/products/name/${name}`}  />
      </div>
    )

  } else {
    return (
      <div className="SearchBar">
        <Header name = {name} setName = {handleInputName}/>
        <ProductList 
            address = {`http://localhost:8080/products`}  />
      </div>
    )
  }


};

SearchBar.propTypes = {};

SearchBar.defaultProps = {};

export default SearchBar;
