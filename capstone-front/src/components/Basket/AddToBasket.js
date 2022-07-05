import BasketTable from "./BasketTable";
import ProductPage from "../ProductPage/Productpage";
import { useState, useEffect } from "react";
import {getBasket} from "../Basket/Axios/BasketAPI";

function AddToBasket (event) {


// const [basket, setBasket] = useState({});

// useEffect(() => {getBasket(setBasket);}, [])

// alert("your item has been added to your basket! Happy Shopping!!")


return (
 <section>
 <a href="/basket"> 
 
 <BasketTable /></a>
  
</section>
    )
}

export default AddToBasket;