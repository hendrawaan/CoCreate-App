import React, { Component } from "react";
import { Table } from "react-bootstrap";

export default class TableUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }

  componentDidMount() {
    fetch(
      "http://kelompok6.dtstakelompok1.com/api/v1/user/verifikasi/daftar/all",
      {
        method: "GET",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJ1bGlAZ21haWwuY29tIiwiaWQiOjEsInR5cGVfdXNlciI6MSwidXNlcm5hbWUiOiIifQ.z1DITijZKn9TGxJuDJJIe1EhXTjs-Q_0DUY6KmRCrWU"
        }
      }
    )
      .then(res => res.json())
      .then(data => {
        this.setState({ items: data.data.users });
      });
  }

  render() {
    const { items } = this.state;
    {
      console.log("test aja", items);
    }
    // if(error){
    //     return <div>Error in loading</div>
    // }else if (!isLoaded) {
    //     return <div>Loading ...</div>
    // }else
    // {
    return (
      <div>
        <ol>
          <Table>
            <thead>
              <tr>
                <th></th>
                <th>email</th>
                <th>nama</th>
                <th>Approval</th>
              </tr>
            </thead>
            {items.length > 0
              ? items.map((item, index) => {
                  return (
                    <tbody key={index}>
                      <tr>
                        <th></th>
                        <td>{item.email}</td>
                        <td>{item.name}</td>
                        <td>{item.verification.toString()}</td>
                      </tr>
                    </tbody>
                  );
                })
              : null}
          </Table>
        </ol>
      </div>
    );
  }
}
