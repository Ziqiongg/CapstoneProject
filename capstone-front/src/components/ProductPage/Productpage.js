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
   

      return (
       
        <section>
          <div className='image-container'>
          <img className='product-page-img' src={product.pictureAddress} alt="specific-product-img"></img>
          <h1 className='product-title'>{product.name}</h1>
          </div>

          <div>
            {/* <p>ID: {product.id}</p> */}
            <h3 className="product-info-text">Category: {product.category}</h3>
            <h3  className="product-info-text">Price: £{product.price}</h3>
            <p  className="product-info-text">Description: {product.description}</p>
          </div>
        
        </section>
      )

      };

export default ProductPage;

