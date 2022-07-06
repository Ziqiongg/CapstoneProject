import OrderTable from "./OrderTable";
import "./Orders.css";
import { Link } from "react-router-dom";

function Order () {

    return(
        <>
          <div className = "PurchasesPage">
            <h1 class = "name">My Purchases</h1>
            <OrderTable />
            <button><Link to="/">Back</Link></button>
          </div>
        </>
      )
    }

export default Order;