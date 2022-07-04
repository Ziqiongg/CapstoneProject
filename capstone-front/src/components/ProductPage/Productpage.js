import { useEffect, useState } from 'react';
import { GetIdProducts } from './Axios/GetProductsAPI';
import axios from 'axios';


const  ProductPage =  () => {

    const [specificProduct, setSpecificProduct] = useState([]);
  
    useEffect(() =>{ axios.get(`http://localhost:8080/products`)
      .then(response =>{ const data = response.data;
      setSpecificProduct(data);
      }).catch(err => console.log(err));
    });
   

      return (
        
        <section className="product-single-section">
          {specificProduct.map(product => <section key={product.id}>
            <a href = {"products/id/" + product.id}>
                <img src= {product.pictureAddress} alt="product" className='product-img'></img><br/>
                <h2 className='product-info-text'>{`${product.name}`}<br/></h2>
                <h3 className='product-info-text'>{`${product.category}`}<br/></h3>
               <h3 className='product-info-text'>Price: £ {`${product.price} `}<br/></h3>
               <h3 className='product-info-text'>Description: {`${product.description} `}</h3>
            </a>
              
              <button type="button">PURCHASE</button>
             
          </section>)}
        
        </section>
      )

      };

export default ProductPage;

