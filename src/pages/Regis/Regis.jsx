import React from "react";
import {
    Button,
    Container,
    Row,
    Card
} from "react-bootstrap";

const Regis = () => {
    return (
        <Container fluid style={{ backgroundColor: "#14274e" }}>
            <Row className="align-items-center" style={{ height: "100vh" }}>
                <div className="mx-auto">
                    <Card className="text-center">
                        <Card.Header className="text-left"> Registrasi  </Card.Header>
                        <Card.Body>

                            <label for="usr">Name:</label>
                            <input type="text" class="form-control" id="usr" />

                            <label for="pwd">Password:</label>
                            <input type="password" class="form-control" id="pwd" />

                            <label for="cpwd">Confirm Password:</label>
                            <input type="password" class="form-control" id="cpwd" />

                        </Card.Body>
                        <Card.Footer >
                            <Button class="btn btn-warning">Registrasi</Button>

                        </Card.Footer>

                    </Card>
                </div>

            </Row>

        </Container>
    );
};

export default Regis;
