import { useEffect, useState } from 'react';
import { GetIdProducts} from "./Axios/GetProductsAPI"
import { useParams } from "react-router-dom";
import axios from 'axios';


const  ProductPage =  () => {

  const params = useParams();


    const [product, setProduct] = useState({});
    
    useEffect(() =>{ 
      GetIdProducts(setProduct, params.id);

    }, []);
   

    // useEffect(()=>{setSpecificProduct(specificProduct.id);}).catch(err => console.log(err));

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

// name, category, price, pictureAddress, description 


export default ProductPage;

