import React from 'react';
import PropTypes from 'prop-types';
import './Basket.css';
import BasketTable from './BasketTable';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Basket ({basketItem}, {BuyBasket}) {

  const handleClick = () => {
    BuyBasket()
    console.log("purchasing 2 basket");

  }


  return(
    <>
      <div className = "BasketPage">
        <h1 class = "name">Basket</h1>
        <BasketTable basketItem={basketItem}/>
        <button><Link to="/">Back</Link></button>
        <Button onClick={handleClick} className="purchase-btn">Purchase All</Button>
      </div>
    </>
  )
}

Basket.propTypes = {};

Basket.defaultProps = {};

export default Basket;
