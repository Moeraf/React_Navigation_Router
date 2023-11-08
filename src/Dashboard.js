import React from "react"
import { Routes, Route, NavLink,useParams,useNavigate } from "react-router-dom";
const Dashboard = () => {
  return (
    <div>
    <ul>
      <li>
        <NavLink to="">Profile</NavLink>
      </li>
      <li>
        <NavLink to="orders">Orders</NavLink>
      </li>
      <li>
        <NavLink to="quotes">Quotes</NavLink>
      </li>
    </ul>
    <div className="dashboard">
      <Routes>
        <Route path="/" element={<Profile />}></Route>
        <Route path="orders" element={<Orders />}></Route>
        <Route path="quotes" element={<Quotes />}></Route>
        <Route path="order_details/:orderId" element={<OrderDetails />} />
      </Routes>
    </div>
  </div>
  )
}

export default Dashboard;

export const Profile = () => {
    return <h2>Profile</h2>
  }

export const Orders = () => {
    const orderIds = ["10001", "10002", "10003"]
    return (
      <>
        <h2>Orders</h2>
        <ul className="orders">
          {/* Loop through the orders array and display link to order details */}
          {orderIds.map(orderId => {
            return (
              <li key={orderId}>
                <NavLink to={`/dashboard/order_details/${orderId}`}>
                  View Order {orderId}
                </NavLink>
              </li>
            )
          })}
        </ul>
      </>
    )
}

export const Quotes = () => {
    return <h2>Quotes</h2>
}

export const OrderDetails = () => {
    const params = useParams()
    const navigate = useNavigate()
    const showListOrders = ()=>{
        navigate("../orders")
    }
    return <h2 onClick={()=>{showListOrders()}}>Details of order {params.orderId}</h2>
}

