
import React from "react";
import {
Button,
Card,
} from "react-bootstrap";
import { CgProfile } from "react-icons/cg";

const Feed = (props) => {
    return (
        <div>
            <Card className="mb-2">
                <Card.Header as="h5"> {props.title} </Card.Header>
                <Card.Body>
                <Card.Title>
                    <CgProfile /> <p>{props.userId}</p>
                </Card.Title>
                <Card.Text>
                {props.desc}
                </Card.Text>
                <Button variant="primary">Read More</Button>
                </Card.Body>
            </Card>
        </div>
    )
}
export default Feed