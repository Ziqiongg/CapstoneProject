const GetIdProducts = (id) => fetch (`http://localhost:8080/products/id/${id}`, {method: 'GET'})
.then((products) => products.json())
.catch((error) => {console.log(error)})

export default GetIdProducts;