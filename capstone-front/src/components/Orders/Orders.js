import OrderTable from "./OrderTable";
import "./Orders.css";
import { Link } from "react-router-dom";
import Header from "../Header/Header";

function Order ({purchases}) {

    return(
        <>
        <Header />
          <div className = "PurchasesPage">
            <h1 className = "name">My Purchases</h1>
            <OrderTable purchases={purchases}/>
            <button><Link to="/">Back</Link></button>
          </div>
        </>
      )
    }

export default Order;