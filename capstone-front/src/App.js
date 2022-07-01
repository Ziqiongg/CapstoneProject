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
<<<<<<< HEAD
import { useState, useEffect } from "react";
import axios from "axios";


=======
import Login from  "./components/Login/Login"
>>>>>>> ee583fc421a621f6783f2863c6ba2a234b798f3a
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
<<<<<<< HEAD

          {categories.map(item => {
            let itemLower = item.toLowerCase();
            return (  
              <Route exact path={`/productcategory/${itemLower}`} element={<ProductList 
          address = {`http://localhost:8080/products/category/${itemLower}`} />} /> 
          )
          })}
          
         
          {/* <Route path="/settings" element={<SettingsPage />} />
=======
          <Route path="/login"  element={<Login />}/>
          {/* 
          <Route path="/settings" element={<SettingsPage />} />
>>>>>>> ee583fc421a621f6783f2863c6ba2a234b798f3a
          <Route path="/feedPage" element={<FeedPage />} /> */}
      </Routes>
      <Footer />
     </div>
    </Router>

  );
}

export default App;
