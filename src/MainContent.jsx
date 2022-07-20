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
        age: "",
        school: "Versity of Birmigham",
        photo: "https://picsum.photos/id/237/50/50",
      },
      {
        id: 2,
        names: "Eshley Mazuri",
        age: 576,
        school: "Versity of naironi",
        photo: "https://picsum.photos/id/238/50/50",
      },
      {
        id: 3,
        names: "Kip kemboi",
        age: "",
        school: "Couraage of amichah",
        photo: "https://picsum.photos/id/239/50/50",
      },
      {
        id: 4,
        names: "Mikah Koroso",
        age: 35678,
        school: "Not seen a class door",
        photo: "https://picsum.photos/id/230/50/50",
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
            <tr className="">
              <th>Id</th>
              <th>Photo</th>
              <th>Names</th>
              <th>Age</th>
              <th>School</th>
            </tr>
          </thead>
          <tbody>{this.getCustomerRow()}</tbody>
        </table>
      </div>
    );
  }
  onClickRefresh = () => {
    this.setState({ pageBody: this.state.pageTitle });
  };

  getPhoneToRender = (customer) => {
    if (customer.age) return customer.age;
    else {
      return <div className="bg-warning text-center">No age</div>;
    }
  };

  getCustomerRow = () => {
    return this.state.customers.map((customer, index) => {
      return (
        <tr key={customer.id}>
          <td>{customer.id}</td>
          <td>
            <img src={customer.photo} alt="image from the picsum" />
            <div>
              <button
                className="btn btn-info m-2"
                onClick={() => {
                  this.onChangePictureClick(customer, index);
                }}
              >
                Change image
              </button>
            </div>
          </td>
          <td>{customer.names}</td>
          <td>{this.getPhoneToRender(customer)}</td>
          <td>{customer.school}</td>
        </tr>
      );
    });
  };

  onChangePictureClick = (customer, index) => {
    console.log(customer);
    let customerArr = this.state.customers;
    customerArr[index].photo = "https://picsum.photos/id/229/50/50"

    this.setState({ customers: customerArr });
  };
}
