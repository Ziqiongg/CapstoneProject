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
function App() {
  return (

    <Router>
      <div className = "main-wrapper">
      <Header />
     
      <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route exact path="/productlist" element={<ProductList />} />
          <Route path="/register" element={<Register />} />
          {/* <Route path="/login"  element={<LogInPage />}/>
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/feedPage" element={<FeedPage />} /> */}
      </Routes>
      <Footer />
     </div>
    </Router>

  );
}

export default App;
