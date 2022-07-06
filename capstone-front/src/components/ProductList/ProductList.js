import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './ProductList.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useEffect } from 'react';
import axios from 'axios';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Link, useNavigate } from "react-router-dom";


const ProductList = (props) => {

  const [products, setProducts] = useState([]);


  useEffect(() =>{
    // refers to the url passed in (sotred in variable called address) as props in App.js when this page/route is returned
    axios.get(props.address)
      .then(response =>{
        // setProducts to getAllProducts endpoint
        setProducts(response.data);
        console.log(products)

      })
    }, [props.address])

    let navigate = useNavigate(); 
    
   
  const handleClickToDetailPage = () => {
    
  }

  const handleAddToBasket = () =>{
    // AddItems(product);
  }

return(
  <>
    {/* <Header setupHeader = {props.setUpName}/> */}
    <Row xs={1} xl = {4} sm = {2} md={3} className="g-4 all-products">
      {/* products is an array of objects. Fromt this products array, create/copy an array, for each element (product), change its
      category to lowercase then just capitalise the first letter.
       When we click in the search bar, this is rendered, so for each product in the products array, we get an image, name, price etc  */}
    {Array.from(products, (product) => {

      let productCategoryLowerCase = product.category.toLowerCase();
      let productCategoryAfter = productCategoryLowerCase[0].toUpperCase() + productCategoryLowerCase.substr(1);

      return(
        
      
        
        <Col key= {product.id}>
        <Card style={{ width: '18rem'}} className = "each-card"  >
          <Card.Img variant="top" src= {product.pictureAddress} className = "each-img" />
          <Card.Body>
                <Card.Title>{product.name}</Card.Title>
              <Card.Subtitle>{productCategoryAfter}</Card.Subtitle>
              <Card.Subtitle>{`£ ${product.price}`}</Card.Subtitle>
              <Card.Text>
                free-delivery
              </Card.Text>
              {/* when we click "View" button, we are taken to the product page */}
              <Button variant="primary" className='btn' onClick = {()=> navigate(`/products/id/${product.id}`)}>View</Button>

              {/* <Button variant="primary" className='btn' onClick = {(product) => props.addItems(product)}>Purchase</Button> */}

            </Card.Body>
          </Card>
        </Col>)})}
    </Row>

  </>

)};


// ProductList.propTypes = {};

// ProductList.defaultProps = {};

export default ProductList;
