import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { UserInfo } from '../../../UserContext';



export function getBasket(setBasketItem){
    const token = sessionStorage.getItem("jwt");
    axios.get(`http://localhost:8080/AppUser/get_basket`, {
        headers: {'Content-Type': 'application/json',
                'Authorization': token}
    })
    .then(res => {
        const basket = res.data;
        setBasketItem(basket);
    }).catch((err) => console.log(err));
    
}

export function deleteItem(setBasket, product_id){
    const token = sessionStorage.getItem("jwt");
    fetch(`http://localhost:8080/AppUser_basket/${product_id}`, {
        method: 'DELETE',
        mode: 'cors',
        headers: {'Content-Type': 'application/json',
                'Authorization': token,
                'Access-Control-Allow-Origin': 'http://localhost:8080'}
    })
    .then(res =>{
        console.log(res);
    }).catch((err) => console.log(err));
}

// export function deleteItem(setBasket, product_id){
//     const token = sessionStorage.getItem("jwt");
//     axios.delete(`http://localhost:8080/AppUser_basket/${product_id}`, {
//         headers: {'Content-Type': 'application/json',
//                 'Authorization': token}
//     })
//     .then(res =>{
//         console.log(res);
//         alert(`Item Removed!`);
//         getBasket(setBasket);
//     }).catch((err) => console.log(err));
// }