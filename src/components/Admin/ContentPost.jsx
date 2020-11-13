import React, { Fragment } from "react";
import logo from '../../assets/images/logo.jpg';
import { Card } from 'react-bootstrap'
import './ComponentAdmin.css'

const ContentPost = ()=>  {
    return (
        <Fragment>
        <Card className="container-fluid rounded text-dark">
            <Card.ImgOverlay>
                <Card.Img className="shadow-box-example z-depth-2" src={logo} alt="Card image"
                style={{height: "150px"}} />
                <Card.Text>
                <div className="imgProfile">
                    <img
                        src="https://placeimg.com/640/480/any"
                        alt=""
                        className="avatar m-1 z-depth-2" rounded
                    />
                </div>
                </Card.Text>
            </Card.ImgOverlay>
        </Card>
        </Fragment>
    );
}
export default ContentPost;
