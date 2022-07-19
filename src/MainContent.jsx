import { timers } from "jquery";
import React, { Component } from "react";
import "./index.css";

export default class MainContent extends Component {
  state = {
    pageTitle: "Title MainContent",
    pageBody: "5",
    customers: [
      {
        id: 1,
        names: "Arrow Dan",
        age: 23,
        school: "Versity of Birmigham",
      },
      {
        id: 2,
        names: "Ashley Mazuri",
        age: "",
        school: "Versity of naironi",
      },
      {
        id: 3,
        names: "Kip kemboi",
        age: 38,
        school: "Couraage of amichah",
      },
      {
        id: 4,
        names: "Mikah Koroso",
        age: "",
        school: "Not seen a class door",
      },
    ],
  };
  render() {
    return (
      <div className="container-fluid">
        <h2 className="main-content">
          {this.state.pageTitle}
          <span className="badge badge-primary span-class m-2">
            {this.state.pageBody}
          </span>
          <button className="btn btn-primary" onClick={this.onClickRefresh}>
            Refresh
          </button>
        </h2>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>School</th>
              <th>Age</th>
              <th>school</th>
            </tr>
          </thead>
          <tbody>
            {this.state.customers.map((customer) => {
              return (
                <tr key={customer.id}>
                  <td>{customer.id}</td>
                  <td>{customer.names}</td>
                  <td>{customer.age}</td>
                  <td>{customer.school}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
  onClickRefresh = () => {
    this.setState({ pageBody: this.state.pageTitle });
  };
}
