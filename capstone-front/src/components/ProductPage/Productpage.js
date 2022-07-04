import { useEffect, useState } from 'react';
import { GetIdProducts} from "./Axios/GetProductsAPI"
import { useParams } from "react-router-dom";
import axios from 'axios';


const  ProductPage =  () => {

<<<<<<< HEAD
    const [specificProduct, setSpecificProduct] = useState([]);
  
    useEffect(() =>{ axios.get(`http://localhost:8080/products`)
      .then(response =>{ const data = response.data;
      setSpecificProduct(data);
      }).catch(err => console.log(err));
    });
=======
  const params = useParams();


    const [product, setProduct] = useState({});
    
    useEffect(() =>{ 
      GetIdProducts(setProduct, params.id);

    }, []);
>>>>>>> ba9e0d33a7eba632e294c9e0d8b63f673d7c0bdb
   

      return (
        
        <section className="product-single-section">
          <div>
          <h1>Product: {product.name}</h1>
          </div>

          <div>
            <p>ID: {product.id}</p>
            <p>Category: {product.category}</p>
            <p>Price: {product.price}</p>
            <p>Description: {product.description}</p>
          </div>
        
        </section>
      )

      };

export default ProductPage;

