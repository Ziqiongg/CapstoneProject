// import React, { useState } from 'react';
// import PropTypes from 'prop-types';
// import './ProductList.css';
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
// import { useEffect } from 'react';
// import axios from 'axios';
// import Col from 'react-bootstrap/Col';
// import Row from 'react-bootstrap/Row';

// const ProductList = () => {

//   const [products, setProducts] = useState([]);


//   useEffect(() =>{
//     axios.get('http://localhost:8080/products')
//       .then(response =>{
//         setProducts(response.data);
//       })
//     })
   

// return(
//   // products.map((product) => {

//   // return(
    
//   // <div className="ProductList">
//   //   <Row xs={4} md={4} className="g-4">
//   //   <Card style={{ width: '18rem'}} className = "each-card" key= {product.id} >
//   //     <Card.Img variant="top" src= {product.pictureAddress} />
//   //     <Card.Body>
//   //       <Card.Title>{product.name}</Card.Title>
//   //       <Card.Subtitle>{product.category}</Card.Subtitle>
//   //       <Card.Subtitle>{product.price}</Card.Subtitle>
//   //       <Card.Text>
//   //         free-delivery
//   //       </Card.Text>
//   //       <Button variant="primary">purchase</Button>
//   //     </Card.Body>
//   //   </Card>
//   //   </Row>
//   // </div>)})

// //   <Row xs={1} md={2} className="g-4">
//   // {products.map((product) => {
//   //   <Col>
//   //   <Card style={{ width: '18rem'}} className = "each-card" key= {product.id} >
//   //     <Card.Img variant="top" src= {product.pictureAddress} />
//   //     <Card.Body>
//   //           <Card.Title>{product.name}</Card.Title>
//   //         <Card.Subtitle>{product.category}</Card.Subtitle>
//   //         <Card.Subtitle>{product.price}</Card.Subtitle>
//   //         <Card.Text>
//   //           free-delivery
//   //         </Card.Text>
//   //         <Button variant="primary">purchase</Button>
//   //       </Card.Body>
//   //     </Card>
//   //   </Col>}
// //   )}
// // </Row>
// <Row xs={1} xl = {4} sm = {2} md={3} className="g-4">
// {Array.from(products, (product) => {
//   return(
//     <Col>
//     <Card style={{ width: '18rem'}} className = "each-card" key= {product.id} >
//       <Card.Img variant="top" src= {product.pictureAddress} />
//       <Card.Body>
//             <Card.Title>{product.name}</Card.Title>
//           <Card.Subtitle>{product.category}</Card.Subtitle>
//           <Card.Subtitle>{product.price}</Card.Subtitle>
//           <Card.Text>
//             free-delivery
//           </Card.Text>
//           <Button variant="primary">purchase</Button>
//         </Card.Body>
//       </Card>
//     </Col>)})}
// </Row>

// )};


// // ProductList.propTypes = {};

// // ProductList.defaultProps = {};

// export default ProductList;
