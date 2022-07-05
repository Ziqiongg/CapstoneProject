import React from 'react';
import PropTypes from 'prop-types';
import './CategoryPage.css';
import Header from '../Header/Header';
import ProductList from '../ProductList/ProductList';

const CategoryPage = (props) => (
  <div className="CategoryPage">
    <Header />
    <ProductList 
          address = {`http://localhost:8080/products/category/${props.itemLower}`} />
  </div>
);

CategoryPage.propTypes = {};

CategoryPage.defaultProps = {};

export default CategoryPage;
