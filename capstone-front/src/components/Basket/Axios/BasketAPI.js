import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { UserInfo } from '../../../UserContext';



export function getBasket(setBasket, user_id){
    const token = sessionStorage.getItem("jwt");
    axios.get(`http://localhost:8080/AppUser/get_basket/${user_id}`, {
        headers: {'Content-Type': 'application/json',
                'Authorization': token}
    })
    .then(res => {
        const basket = res.data;
        setBasket(basket);
    }).catch((err) => console.log(err));
    
}


export function deleteItem(setBasket, user_id, product_id){
    const token = sessionStorage.getItem("jwt");
    axios.delete(`http://localhost:8080/AppUser_basket/${user_id}/${product_id}`, {
        headers: {'Content-Type': 'application/json',
                'Authorization': token}
    })
    .then(res =>{
        console.log(res);
        alert(`Item Removed!`);
        getBasket(setBasket);
    }).catch((err) => console.log(err));
}