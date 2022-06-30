import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import ProductList from './components/ProductList/ProductList';
import Landing from "./components/Landing/Landing";


function App() {
  return (
 
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />}>
          <Route path="productlist" element={<ProductList />} />
          {/* <Route path="contact" element={<Contact />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  
  );
}

export default App;
