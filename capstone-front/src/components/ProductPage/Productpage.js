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
      GetIdProducts(setProduct, params.id);}, []);

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

</div>

        </section>
      )

      };

export default ProductPage;


