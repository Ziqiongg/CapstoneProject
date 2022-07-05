import React from 'react';
import PropTypes from 'prop-types';
import './Basket.css';
import BasketTable from './BasketTable';
import { Button } from 'react-bootstrap';

function Basket ({basketItem}, {BuyBasket}) {

  const handleClick = () => {
    BuyBasket([basketItem])
    console.log("purchasing 2 basket");

  }


  return(
    <>
      <div className = "BasketPage">
        <h1 class = "name">Basket</h1>
        <Button onClick={handleClick}>Purchase All</Button>
        <BasketTable basketItem={basketItem}/>
      </div>
    </>
  )
}

Basket.propTypes = {};

Basket.defaultProps = {};

export default Basket;
