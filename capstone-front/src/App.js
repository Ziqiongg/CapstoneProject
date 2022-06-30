import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from 'react';
import './App.css';
import Header from './components/Header/Header.js';
import Landing from './components/Landing/Landing.js';
import Login from './components/Login/Login.js';
import ProductDetail from './components/ProductDetail/ProductDetail';
import ProductList from './components/ProductList/ProductList.js';
import Profile from './components/Profile/Profile.js';
import Register from './components/Register/Register.js';
import Footer from './components/Footer/Footer.js';
function App() {
  return (
    
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Landing />}/>
          <Route path='/loginpage' element={<Login />}/>
          <Route path='/signuppage' element={<Register />}/>
          <Route path='/orderspage'/>
          <Route path='/basketpage' element={<ProductList />}/>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
