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


function App() {

    //get categories
    const [categories, setCategories] = useState([]);

    useEffect(() =>{
  
      axios.get('http://localhost:8080/categories')
        .then(response => {
       
          setCategories(response.data);
    
        })
        .catch(error => {console.log(error)})
      }, categories)

  return (

    <Router>
      <div className = "main-wrapper">
      <Header />
     
      <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route exact path="/productlist" element={<ProductList 
          address = "http://localhost:8080/products" />} />
          <Route path="/register" element={<Register />} />

          {categories.map(item => {
            let itemLower = item.toLowerCase();
            return (  
              <Route exact path={`/productcategory/${itemLower}`} element={<ProductList 
          address = {`http://localhost:8080/products/category/${itemLower}`} />} /> 
          )
          })}
          
         
          {/* <Route path="/settings" element={<SettingsPage />} />
          <Route path="/feedPage" element={<FeedPage />} /> */}
      </Routes>
      <Footer />
     </div>
    </Router>

  );
}

export default App;
