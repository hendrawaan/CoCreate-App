import './Content.css';
import React, { Component } from "react";
import logo from './assets/images/logo.jpg';
import { Card } from 'react-bootstrap'

class Content extends Component {
    render() {
    return (
        <Card className="container-fluid rounded text-dark">
            <Card.ImgOverlay>
                <Card.Img className="shadow-box-example z-depth-2" src={logo} alt="Card image"
                style={{height: "150px"}} />
                <Card.Text>
                <div className="imgProfile">
                    <img
                        src="https://mdbootstrap.com/img/Photos/Avatars/img%20(9).jpg"
                        alt=""
                        className="avatar m-1 z-depth-2" rounded
                    />
                </div>
                </Card.Text>
            </Card.ImgOverlay>
        </Card>
    );
}
}


export default Content;