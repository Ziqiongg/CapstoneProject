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

function App() {
  return (

    <Router>
      <Header />
      <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route exact path="/productlist" element={<ProductList />} />
          {/* <Route path="/login"  element={<LogInPage />}/>
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/feedPage" element={<FeedPage />} /> */}
      </Routes>
    </Router>

  );
}

export default App;
