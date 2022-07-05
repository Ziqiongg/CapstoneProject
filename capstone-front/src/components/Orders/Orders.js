import OrderTable from "./OrderTable";
import "./Orders.css";

function Order () {

    return(
        <>
          <div className = "PurchasesPage">
            <h1 class = "name">My Purchases</h1>
            <OrderTable />
          </div>
        </>
      )
    }

export default Order;