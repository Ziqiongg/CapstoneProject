import axios from 'axios';
import { useParams } from 'react-router-dom'

export function getBasket(setBasket, user_id){
    axios.get(`http://localhost:8080/AppUser/get_basket/${user_id}`)
    .then(res => {
        const basket = res.data;
        setBasket(basket);
    }).catch((err) => console.log(err));
    
}


export function deleteItem(setBasket, user_id){
    axios.delete(`http://localhost:8080/AppUser_basket/${user_id}`)
    .then(res =>{
        console.log(res);
        alert(`Item Removed!`);
        getBasket(setBasket);
    }).catch((err) => console.log(err));
}