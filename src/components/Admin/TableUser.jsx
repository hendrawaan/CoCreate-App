import React, { Component } from "react";
import { Table } from 'react-bootstrap'

export default class TableUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
        items: []
        };
    }

    componentDidMount() {
        fetch("https://randomuser.me/api/?results=10&nat=au")
        .then(res => res.json())
        .then(parsedJSON => parsedJSON.results.map(data => (
            {
            id: `${data.id.name}`,
            firstName: `${data.name.first}`,
            lastName: `${data.name.last}`,
            location: `${data.location.state}, ${data.nat}`,
            thumbnail: `${data.picture.large}`,

            }
        )))
        .then(items => this.setState({
            items,
            isLoaded: false
        }))
        .catch(error => console.log('parsing failed', error))
    }

    render() {
        const {items } = this.state;
        // if(error){
        //     return <div>Error in loading</div>
        // }else if (!isLoaded) {
        //     return <div>Loading ...</div>
        // }else
        // {
        return (
            <div>
                    <ol className="item">
                    {
                        items.length > 0 ? items.map(item => {
                        const {id, firstName, lastName, location, thumbnail} = item;
                        return (
                        <div>
                            <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <div key={id}></div>
                                    <img src={thumbnail}/>
                                    <tr>
                                        <h5>Nama: {firstName} {lastName}</h5>
                                    </tr>
                                    <tr>
                                        <p>Alamat: {location}</p>
                                    </tr>
                                    <tr>
                                        <button>Approved</button>
                                    </tr>
                                </tr>
                            </thead>
                            </Table>
                        </div>
                        );
                        }) : null
                    }
                    </ol>
            </div>
            // <Table striped bordered hover>
            // <thead>
            //     <tr>
            //     <th>#</th>
            //     <th>Nama</th>
            //     <th>Email</th>
            //     <th>Status</th>
            //     </tr>
            // </thead>
            // <tbody>
            //     <tr>
            //     <td>1</td>
            //     <td>gj</td>
            //     <td>hg</td>
            //     <td>hh</td>
            //     </tr>
            //     <tr>
            //     <td>2</td>
            //     <td>Jacob</td>
            //     <td>Thornton@gmail.com</td>
            //     <td>Noaktif</td>
            //     </tr>
            //     <tr>
            //     <td>3</td>
            //     <td>Bob</td>
            //     <td>Bob65@gmail.com</td>
            //     <td>Aktif</td>
            //     </tr>
            // </tbody>
            // </Table>
            );
        }
    }
