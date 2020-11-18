import React, { Component, Fragment } from "react";
import axios from 'axios'
import { 
    Table
} from 'react-bootstrap'

const api = 'http://kelompok6.dtstakelompok1.com/api/v1/user/verifikasi/daftar'
const requestOptions = {
    methods: 'GET',
    headers: { 'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im11aGFtYWRoaWxtYW44ODVAZ21haWwuY29tIiwiaWQiOjExLCJ0eXBlX3VzZXIiOjIsInVzZXJuYW1lIjoiaGlsbWFuIn0.0VeEHjh_rHR7evz7fPJorUT5nme3t5uBoorKtd1DOwk' },
};

class UsersList extends Component {
    constructor(props) {
        super(props);
        this.state = {
        items: [],
        response: ''
        };
    }

    componentDidMount() {
        axios.get(api + '/true' + requestOptions)
        .then(res=>{
            this.setState({
                items: res.data.users
            })
        })
    }

    render() {
        return (
            <Fragment>
                <h2>Table List</h2>
                <hr/>
                <Table className="table-bordered">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Username</th>
                            <th>Email</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.items.map(item =>
                            <tr key={item.id}>
                                <td>{item.name}</td>
                                <td>{item.username}</td>
                                <td>{item.email}</td>
                            </tr>
                            )}
                    </tbody>
                </Table>
            </Fragment>
        );
    }
}
export default UsersList