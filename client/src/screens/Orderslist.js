import React, {useEffect,useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deliverOrder, getAllOrders } from "../actions/orderActions";
import Error from "../components/buypart/Error";
import Loading from "../components/buypart/Loading";
import Navbar1 from "./Navbar1"
import "./css/Navmenu.css"


export default function Orderslist() {
  const dispatch = useDispatch();
  const getordersstate = useSelector((state) => state.getAllOrdersReducer);
  const { loading, error, orders } = getordersstate;
 

  useEffect(() => {
    dispatch(getAllOrders());
  }, []);

  window.setTimeout( function() {
    window.location.reload();
  }, 30000);

  return (
    <div className="adminPage">
      <Navbar1/>
    
      {loading && <Loading />}
      <h2 className="text-center">Orders List</h2>

      {error && <Error error="Something went wrong" />}
      <table className="table table-striped table-bordered table-responsive-sm">
        <thead className="text-white bg-dark">
          <tr>
            <th>Order Item: quantity</th>
            <th>Name</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Time</th>
            <th>Time for delivery</th>
            <th>otp</th>
            <th>Status</th>
            <th>Paid</th>
          </tr>
        </thead>

        <tbody>
       
          {orders && orders.filter( function(order){
            return order.isDelivered == false
          }).map((order) => {
             
              return (
                <tr key={order._id}>
                  <td>{order.orderItems.map(item=>{
                                        return <div>
                                            <p>{item.name} : {item.quantity}  </p>
                                        </div>
                                    })}</td>
                                    
                  <td>{order.name}</td>
                  <td>{order.orderAmount}</td>
                  <td>{order.date}</td>
                  <td>{order.time}</td>
                  <td>{order.updatedTime}</td>
                  <td>{order.otp}</td>
                  <td>
                   {order.isDelivered == true ? "Done" : " Not Done"}
                  </td>
                  <td>
                  {order.isPaid == true ? "Paid" : "unpaid"}
                  </td>
                  
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}
