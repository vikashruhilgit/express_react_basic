/* jshint esversion: 6*/

import React, { Component } from 'react';
import './customer.css';

class Customer extends Component {
  constructor() {
    super();
    this.state = {
      customers: [],
    };
  }

  componentDidMount() {
    fetch('/api/customers')
      .then(res => res.json())
      .then(customer => this.setState({
        customers: customer,
      }, () => console.log('customers fetched from', customer))
    );
  }

  render() {
    return (
      <div className="customer">
        <h2>
          Customers
        </h2>
        <ul>
          {this.state.customers.map(
            customer => <li key = {customer.id}> {customer.firstName} {customer.lastName} </li>)}
        </ul>
      </div>
    );
  }
}

export default Customer;
