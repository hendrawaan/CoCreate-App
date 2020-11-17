import React, { Component } from "react";
import { Table } from 'react-bootstrap'

class TableUser extends Component {
    render() {
    return (
        <Table striped bordered hover>
        <thead>
            <tr>
            <th>#</th>
            <th>Nama</th>
            <th>Email</th>
            <th>Status</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto@gmail.com</td>
            <td>Aktif</td>
            </tr>
            <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton@gmail.com</td>
            <td>Noaktif</td>
            </tr>
            <tr>
            <td>3</td>
            <td>Bob</td>
            <td>Bob65@gmail.com</td>
            <td>Aktif</td>
            </tr>
        </tbody>
        </Table>
    );
}
}


export default TableUser;