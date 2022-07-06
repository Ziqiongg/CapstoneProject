import { useEffect, useState } from 'react';
import { GetIdProducts} from "./Axios/GetProductsAPI"
import { useParams } from "react-router-dom";
import Basket from '../Basket/Basket';
import { Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import '../ProductPage/Productpage.css'


const  ProductPage =  ({AddItems}) => {

  const params = useParams();


    const [product, setProduct] = useState({});
    
    useEffect(() =>{ 
      GetIdProducts(setProduct, params.id);

    }, []);


    const handleClick = () => {
      AddItems(product)
    }
   

      return (
         
<section>
<div>
<Header />
<section>
<Card className="text-center">
<Card.Header>{product.name}</Card.Header>
<Card.Body>
  <img className='product-page-img' src={product.pictureAddress} alt="specific-product-img"></img>
    <Card.Title>£{product.price}</Card.Title>
    <Card.Text>
      {product.description}
    </Card.Text>
    <Button onClick={handleClick}>Add to basket</Button>
  </Card.Body>

</Card>
<button className='back-btn'><Link to="/">Back to Home</Link></button>
</section>
{/* Style 2 */}

{/* <section>

  <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={product.pictureAddress} alt=""/>
  <Card.Body>
    <Card.Title>{product.name}</Card.Title>
    <Card.Text>
      {product.price} <br></br>
      {product.description}
    </Card.Text>
    <Button onClick={addToBasket}>Add to basket</Button>
  </Card.Body>

  </Card>
</section> */}

</div>
{/* OG text  */}

          {/* <div className='image-container'>
          <img className='product-page-img' src={product.pictureAddress} alt="specific-product-img"></img>
          <h1 className='product-title'>{product.name}</h1>
          </div>

          <div>
            
            <h3 className="product-info-text">Category: {product.category}</h3>
            <h3  className="product-info-text">Price: £{product.price}</h3>
            <p  className="product-info-text">Description: {product.description}</p>
          </div>
          <Button onClick={addToBasket}>Add to basket</Button>
          
     */}
        </section>
      )

      };

export default ProductPage;


