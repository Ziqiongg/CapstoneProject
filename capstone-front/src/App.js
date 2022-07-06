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
import Profile from "./components/Profile/Profile";
import { useState, useEffect } from "react";
import axios from "axios";

import { exportName } from "./components/Header/Header";
import SearchBar from "./components/SearchBar/SearchBar";
import CategoryPage from "./components/CategoryPage/CategoryPage";

import Basket from "./components/Basket/Basket";
import Login from "./components/Login/Login";
import { UserInfo } from "./UserContext";
import Order from "./components/Orders/Orders";
import { getBasket } from "./components/Basket/Axios/BasketAPI";
import AboutUs from "./components/AboutUs/AboutUs";
import TermsConditions from "./components/TermsConditions/TermsConditions";




function App() {

    //get categories
    const [category, setCategory] = useState([]);
// state of all of these variables is now set here, at the highest level it can be set, so that it can be passed down to all children 
// components
    const [isAuthenticated, setAuthenticate] = useState(false);
    const [open, setOpen] = useState(false);
    const [user, setUser] = useState({
      username: "",
      password: ""
    });
    const [users, setUsers] = useState([]);
    const [basketItem, setBasketItem] =useState([]);
    const [purchases, setPurchases] = useState([]);
    const [userId, setUserId  ] = useState(null)

    useEffect(() =>{
      axios.get('http://localhost:8080/categories')
      .then(response => {
      setCategory(response.data);})
      .catch(error => {console.log(error)})
      }, [])

      // add items to basket
      const AddToBasket = (product) => {
        console.log("adding to basket");
        setBasketItem([...basketItem, product])}

    // add items from basket to ordered/purchased
      const PurchaseItems = ([basketItem]) => {
        console.log("purchasing basket");
        setPurchases([...purchases, basketItem]);
        

}
    
  return (
    <UserInfo.Provider value = {{user, setUser, open, setOpen, isAuthenticated, setAuthenticate, users, setUsers,
    userId, setUserId}}>
    <Router>
      <div className = "main-wrapper">
      <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route exact path={`/products/id/:id`} element={<ProductPage AddItems={AddToBasket}/>} />
          <Route exact path="/productlist" element={<ProductList 
          address = "http://localhost:8080/products" addItems={AddToBasket}/>} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          {category.map(item => {
            let itemLower = item.toLowerCase();
            return (  
              <Route exact path={`/productcategory/${itemLower}`} element={<CategoryPage itemLower = {itemLower}/> } /> 
          )
          })}
        <Route path="/basket" element={<Basket basketItem={basketItem} BuyBasket={PurchaseItems} />} />
          <Route path="/orders" element={<Order basketItem={[basketItem]} />} />
          <Route path = "/ourmissionpage" element = {<AboutUs />}/>
          <Route path = "/conditions" element = {<TermsConditions />}/>
          <Route path="/basket" element={<Basket />} />
          <Route path={`/searchname`} element = {<SearchBar />} />
          <Route path={`/login`} element = {<Login />} />
          {/* <Route path="/settings" element={<SettingsPage />} />

          <Route path="/basket" element={<Basket basketItem={basketItem} BuyBasket={PurchaseItems} Delete={DeleteFromBasket}/>} />
          <Route path="/orders" element={<Order basketItem={[basketItem]} />} />
          <Route path = "/ourmissionpage" element = {<AboutUs />}/>
          <Route path = "/conditions" element = {<TermsConditions />}/>


          <Route path={`/searchname`} element = {<SearchBar />} />


          {/* 
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/feedPage" element={<FeedPage />} /> */}

      </Routes>

     </div>
     <Footer />
    </Router>
    </UserInfo.Provider>
  
  );
}

export default App;
