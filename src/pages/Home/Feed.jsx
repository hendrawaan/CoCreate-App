
import React, {useState} from "react";
import {
Button,
Card,
Collapse,
Form,
FormGroup
} from "react-bootstrap";
import { CgProfile } from "react-icons/cg";

const Feed = (props) => {
    const [open, setOpen] = useState(false);
    return (
        <div>
            <Card className="mb-2">
                <Card.Body style={{"font-size": "15px"}} >
                <h6> {props.title} </h6> <hr></hr>
                <Card.Title>
                    <CgProfile /> <p>{props.userId}</p>
                </Card.Title>
                <Card.Text>
                    {props.desc}
                </Card.Text>
                <Button variant="link" className="mr-2">Read More..</Button>
                <Button variant="danger" className="mr-2">Like</Button>
                <Button variant="light" onClick={() => setOpen(!open)}
                aria-controls="collapse-comment"
                aria-expanded={open}>Comment</Button>
                <Collapse in={open}>
                    <div id="collapse-comment">
                    <Form.Group controlId="textComment">
                        <Form.Control as="textarea" rows={3} placeholder="Add comment.." />
                    </Form.Group>
                    </div>
                </Collapse>
                </Card.Body>
            </Card>
        </div>
    )
}
export default Feed