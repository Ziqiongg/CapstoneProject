import ReactDOM from "react-dom/client";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Redirect,
} from "react-router-dom";

import './App.css';
import ProductList from './components/ProductList/ProductList';
import Landing from "./components/Landing/Landing";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Register from "./components/Register/Register";
import { useState, useEffect } from "react";
import axios from "axios";
import { exportName } from "./components/Header/Header";



function App() {

    //get categories
    const [category, setCategory] = useState([]);

    useEffect(() =>{
  
      axios.get('http://localhost:8080/categories')
        .then(response => {
       
          setCategory(response.data);
    
        })
        .catch(error => {console.log(error)})
      }, [])

    const [name,  setName] = useState("")

    const handleInputName = (input) => {
      setName(input);
    }

    console.log(name);





  return (

    <Router>
      <div className = "main-wrapper">
      {/* <Header categories= {category} /> */}
     
      <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route exact path="/productlist" element={<ProductList 
          address = "http://localhost:8080/products" />} />
          <Route path="/register" element={<Register />} />

          {category.map(item => {
            let itemLower = item.toLowerCase();
            return (  
              <Route exact path={`/productcategory/${itemLower}`} element={<ProductList 
          address = {`http://localhost:8080/products/category/${itemLower}`} />} /> 
          )
          })}


        {/* <Route path={`/product/name/${name}`} element = {<ProductList 
          address = {`http://localhost:8080/products/name/${name}`} setUpName = {handleInputName}/>} />  */}
          
         {/* <Route path={`/product/name/hat`} element = {<ProductList 
          address = {`http://localhost:8080/products/name/hat`}  />} /> */}

          <Route path={`/product/name`} element = {<Header />} />


          {/* 
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/feedPage" element={<FeedPage />} /> */}
      </Routes>

     </div>
    </Router>

  );
}

export default App;
