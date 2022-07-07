// import ReactDOM from "react-dom/client";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Redirect,
} from "react-router-dom";
import './App.css';
import ProductList from './components/ProductList/ProductList';
import ProductPage from "./components/ProductPage/Productpage";
import Landing from "./components/Landing/Landing";
// import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Register from "./components/Register/Register";
import Profile from "./components/Profile/Profile";
import { useState, useEffect } from "react";
import axios from "axios";
// import { exportName } from "./components/Header/Header";
import SearchBar from "./components/SearchBar/SearchBar";
import CategoryPage from "./components/CategoryPage/CategoryPage";
import Basket from "./components/Basket/Basket";
import Login from "./components/Login/Login";
import { UserInfo } from "./UserContext";
import Order from "./components/Orders/Orders";
import AboutUs from "./components/AboutUs/AboutUs";
import TermsConditions from "./components/TermsConditions/TermsConditions";
import OurPledge from "./components/OurPledge/OurPledge";
import { SERVER_URL } from "./constants";

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
    const [userId, setUserId] = useState(null)
    const [numItems, setNumItems] = useState(null);

    useEffect(() =>{
      axios.get('http://localhost:8080/categories')
      .then(response => {
      setCategory(response.data);})
      .catch(error => {console.log(error)})
      }, [])


      const getUser = () => {
        // only do if authenticated
        const token = sessionStorage.getItem("jwt");
        fetch (SERVER_URL + 'users/username/' + user["username"], {
          method: 'GET',
          headers: {'Content-Type': 'application/json',
                    'Authorization': token}
        })
        .then(response => response.json())
        .then(data => setUserId(data.id));
        console.log(userId);
      }



      // add items to basket
      const AddToBasket = (product) => {
        // only add item to basket if user has logged in
        const token = sessionStorage.getItem("jwt");
        // here we store the params for the post method in the variable called data
        const data = {ProductId : product.id, quantity: 1}
        if (isAuthenticated){
          fetch (SERVER_URL + 'AppUser_basket/additem/' + userId + '?ProductId=' + product.id + '&quantity=' + 1, {
            method: 'POST',
            headers: {'Content-Type': 'application/json',
                      'Authorization': token
                    },
                    // we send the params in the body of the request
            body: JSON.stringify({data})
          })
          .catch(err =>console.err);
        console.log("adding to basket" + product.id);
        setBasketItem([...basketItem, product])
        }
      }

    // add items from basket to ordered/purchased 
      const PurchaseItems = ([basketItem]) => {
        console.log("purchasing basket");
        setPurchases([...purchases, basketItem])}
        
    
  return (
    <UserInfo.Provider value = {{user, setUser, open, setOpen, isAuthenticated, setAuthenticate, users, setUsers,
    userId, setUserId, numItems, setNumItems}}>
  

    <Router>
      <div className = "main-wrapper" >

      <Routes>
          <Route exact path="/" element={<Landing />} />
          {/* rendered after we've clicked in the search bar on Landing page, then decide to view a product */}
          <Route exact path={`/products/id/:id`} element={<ProductPage AddItems={AddToBasket}/>} />
          {/* passing the url to products as address and passing the addToBasket function */}
          <Route exact path="/productlist" element={<ProductList address = "http://localhost:8080/products" addItems={AddToBasket}/>} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          {category.map(item => {
            let itemLower = item.toLowerCase();
            return (  
          <Route exact path={`/productcategory/${itemLower}`} element={<CategoryPage itemLower = {itemLower}/> } /> )})}
          <Route path="/basket" element={<Basket basketItem={basketItem} PurchaseAllItems={PurchaseItems} setBasketItem={setBasketItem}/>} />
          <Route path="/orders" element={<Order purchases={purchases} />} />
          <Route path = "/ourmissionpage" element = {<AboutUs />}/>
          <Route path = "/ourpledge" element = {<OurPledge />}/>
          <Route path = "/conditions" element = {<TermsConditions />}/>
          <Route path={`/searchname`} element = {<SearchBar />} />
          <Route path={`/login`} element = {<Login getTheUser = {getUser}/>} />
          
      </Routes>

     </div>
     <Footer />
    </Router>

    </UserInfo.Provider>
  
  );
}

export default App;
