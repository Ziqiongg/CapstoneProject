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
import { exportName } from "./components/Header/Header";
import SearchBar from "./components/SearchBar/SearchBar";
import CategoryPage from "./components/CategoryPage/CategoryPage";
import Basket from "./components/Basket/Basket";
import Order from "./components/Orders/Orders";
import AboutUs from "./components/AboutUs/AboutUs";
import TermsConditions from "./components/TermsConditions/TermsConditions";


function App() {

    //get categories
    const [category, setCategory] = useState([]);
    const [basketItem, setBasketItem] =useState([]);
    const [purchases, setPurchases] = useState([]);

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
        setPurchases([...purchases, basketItem])}
        
    
  return (

    <Router>
      <div className = "main-wrapper">
      
     <Header />
      <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route exact path={`/products/id/:id`} element={<ProductPage AddItems={AddToBasket}/>} />
          <Route exact path="/productlist" element={<ProductList 
          address = "http://localhost:8080/products" />} />
          <Route path="/register" element={<Register />} />
          {category.map(item => {
            let itemLower = item.toLowerCase();
            return (  
              <Route exact path={`/productcategory/${itemLower}`} element={<CategoryPage itemLower = {itemLower}/> } /> 
          )
          })}
          <Route path="/basket" element={<Basket basketItem={basketItem} PurchaseAllItems={PurchaseItems} />} />
          <Route path="/orders" element={<Order purchases={[purchases]} />} />
          <Route path = "/ourmissionpage" element = {<AboutUs />}/>
          <Route path = "/conditions" element = {<TermsConditions />}/>
          <Route path="/basket" element={<Basket />} />
          <Route path={`/searchname`} element = {<SearchBar />} />
      </Routes>
     </div>
     <Footer />
    </Router>
  
  );
}

export default App;
