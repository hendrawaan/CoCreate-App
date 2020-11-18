import React, { Component } from "react";
import { 
    Table,
    ListGroup,
    Button
} from 'react-bootstrap'

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
        return (
            <div>
                <h2>Users Test Api Get</h2>
                <hr/>
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
                                    
                                    <ListGroup.Item>
                                    <img className="mb-3" src={thumbnail}/>
                                        <h5>{firstName} {lastName}</h5>
                                        <p>Alamat: {location}</p>
                                        <hr></hr>
                                        <Button variant="outline-success">Approved</Button>{' '}
                                    </ListGroup.Item>
                                    
                                </tr>
                            </thead>
                            </Table>
                            
                        </div>
                        );
                        }) : null
                    }
                    </ol>
            </div>
            
            );
        }
    }
