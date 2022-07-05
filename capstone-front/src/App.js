import ReactDOM from "react-dom/client";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Redirect,
} from "react-router-dom";

import './App.css';
import ProductList from './components/ProductList/ProductList';
import ProductPage from "./components/ProductPage/Productpage";
import Landing from "./components/Landing/Landing";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Register from "./components/Register/Register";
import { useState, useEffect } from "react";
import axios from "axios";
import Basket from "./components/Basket/Basket";
import Login from "./components/Login/Login";
import { UserInfo } from "./UserContext";



function App() {

    //get categories
    const [category, setCategory] = useState([]);
//////
    const [isAuthenticated, setAuthenticate] = useState(false);
    const [open, setOpen] = useState(false);
    const [user, setUser] = useState({
      username: "",
      password: ""
    });
    const [users, setUsers] = useState([]);

    useEffect(() =>{
  
      axios.get('http://localhost:8080/categories')
        .then(response => {
       
          setCategory(response.data);
    
        })
        .catch(error => {console.log(error)})
      }, [])


  return (
    <UserInfo.Provider value = {{user, setUser, open, setOpen, isAuthenticated, setAuthenticate, users, setUsers}}>
    <Router>
      <div className = "main-wrapper">
      <Header categories= {category}/>
     
      <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route exact path={`/products/id/:id`} element={<ProductPage />} />

          
  
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
        {/*  */}
        <Route path="/basket" element={<Basket />} />
        <Route exact path = "/login" element = {<Login/>}/>
      </Routes>
      </div>
      <Footer />

    </Router>
    </UserInfo.Provider>

  );
}

export default App;
