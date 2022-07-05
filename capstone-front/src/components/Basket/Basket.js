import React from 'react';
import PropTypes from 'prop-types';
import './Basket.css';
import BasketTable from './BasketTable';

function Basket ({basketItem}) {
  return(
    <>
      <div className = "BasketPage">
        <h1 class = "name">Basket</h1>
        <BasketTable basketItem={basketItem}/>
      </div>
    </>
  )
}

Basket.propTypes = {};

Basket.defaultProps = {};

export default Basket;
