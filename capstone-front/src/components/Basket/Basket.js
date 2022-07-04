import React from 'react';
import PropTypes from 'prop-types';
import './Basket.css';
import BasketTable from './BasketTable';

function Basket () {
  return(
    <>
      <div className = "BasketPage">
        <h1 class = "name">Basket</h1>
        <BasketTable />
      </div>
    </>
  )
}

Basket.propTypes = {};

Basket.defaultProps = {};

export default Basket;
