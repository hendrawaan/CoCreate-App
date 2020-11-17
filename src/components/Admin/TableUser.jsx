import React, { Component } from "react";
import { Table } from "react-bootstrap";

class TableUser extends Component {
  render() {
    return (
      <Table responsive>
        <thead>
          <tr>
            <th>#</th>
            {Array.from({ length: 5 }).map((_, index) => (
              <th key={index}>Nama Lengkap</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            {Array.from({ length: 5 }).map((_, index) => (
              <td key={index}>User 1 {index}</td>
            ))}
          </tr>
          <tr>
            <td>2</td>
            {Array.from({ length: 5 }).map((_, index) => (
              <td key={index}>User 2 {index}</td>
            ))}
          </tr>
          <tr>
            <td>3</td>
            {Array.from({ length: 5 }).map((_, index) => (
              <td key={index}>User 3 {index}</td>
            ))}
          </tr>
        </tbody>
      </Table>
    );
  }
}

export default TableUser;
