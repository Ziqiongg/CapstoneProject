import React from 'react';
import PropTypes from 'prop-types';
import './Basket.css';
import BasketTable from './BasketTable';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserInfo } from '../../UserContext';
import {useContext} from 'react';
import { SERVER_URL } from '../../constants';
import Header from '../Header/Header';

// function Basket ({basketItem}, {BuyBasket}) {
  function Basket ({basketItem, BuyBasket, setBasketItem}) {


  //const {user, userId, setUserId, isAuthenticated} = useContext(UserInfo);

  const handleClick = () => {
   
    PurchaseAllItems(basketItem);
    

  }

  // get the details of the user that is logged in
  // const getUser = () => {
  //   // only do if authenticated
  //   const token = sessionStorage.getItem("jwt");
  //   fetch (SERVER_URL + 'users/username/' + user["username"], {
  //     method: 'GET',
  //     headers: {'Content-Type': 'application/json',
  //               'Authorization': token}
  //   })
  //   .then(response => response.json())
  //   .then(data => setUserId(data.id));
  //   console.log(userId);
  // }

//   // get the user's basket
//   async function getBasket() {
// // only do if authenticated
//     if (isAuthenticated) {
//       await getUser();
//     const token = sessionStorage.getItem("jwt");
//     fetch (SERVER_URL + 'AppUser/get_basket/' + userId, {
//       method: 'GET',
//       headers: {'Content-Type': 'application/json',
//                 'Authorization': token}
//     })
//     .then(response => response.json())
//     .then(data => console.log(data));
//   }
// }
// getBasket();



  return(
    <>
<<<<<<< HEAD
    <Header/>
=======
    <Header />
>>>>>>> e3dcaa55f0946e9142db9b56d2f45d3f9dfb164b
      <div className = "BasketPage">
        <h1 class = "name">Basket</h1>
        <BasketTable basketItem={basketItem} setBasketItem = {setBasketItem}/>
        <button><Link to="/">Back</Link></button>
        <Button onClick={handleClick} className="purchase-btn">Purchase All</Button>
      </div>
      {/* <button onClick = {getUser}>GetUser</button> */}
      {/* <button onClick = {getBasket}>Basket</button> */}
    </>
  )
}

Basket.propTypes = {};

Basket.defaultProps = {};

export default Basket;
