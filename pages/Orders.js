import axios from "axios";
import React, { useState } from "react";
import Order from "../components/Order";

class Orders extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
    };
  }

  componentDidMount() {
    this.loadOrders();
  }

  async loadOrders() {
    const { data } = await axios.get("http://54.162.191.178:1337/api/Orders", {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("jwt")}`,
      },
    });

    console.log(data);
    this.setState({ orders: data.data });
  }

  render() {
    return (
      <div>
        <h1>Orders</h1>
        <table class="table table-striped">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Address</th>
              <th scope="col">Laundry Bags</th>
              <th scope="col">Dry Clean Pieces</th>
              <th scope="col">Pickup Date</th>
              <th scope="col">Pickup Time</th>
              <th scope="col">Preferences</th>
              <th scope="col">Order Status</th>
              <th scope="col">Order Received</th>
            </tr>
          </thead>
          <tbody>
            {this.state.orders.map((item) => (
              <Order data={item} key={item.id} />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Orders;
