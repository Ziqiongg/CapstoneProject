import axios from 'axios';

export function GetIdProducts (setProduct, id) {
    axios.get(`http://localhost:8080/products/id/` + id).then(res =>{
        const product = res.data;
        setProduct(product);
    })
}



// const GetIdProducts = (id) => fetch (`http://localhost:8080/products/id/${id}`, {method: 'GET'})
// .then((products) => products.json())
// .catch((error) => {console.log(error)})

// export default GetIdProducts;