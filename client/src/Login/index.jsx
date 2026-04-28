import React from "react";
import "./style.scss";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
  FormControl,
  FormGroup,
  FormLabel,
  Row,
  Container,
  Col
} from "react-bootstrap";

const Login = () => {
  return (
    <Container fluid>
      <Row>
        <Col sm={{offset:1, span: 10}} md={{offset:3, span:6}} lg={{offset:4, span:4}}>
          <Card className="mt-3 login-card">
            <CardHeader>Login</CardHeader>
            <CardBody>
              <FormGroup controlId="username">
                <FormLabel>Username</FormLabel>
                <FormControl placeholder="Enter Username"></FormControl>
              </FormGroup>
              <FormGroup controlId="password">
                <FormLabel>Password</FormLabel>
                <FormControl
                  placeholder="Enter Password"
                  type="password"
                ></FormControl>
              </FormGroup>
            </CardBody>
            <CardFooter>
              <Button variant="outline-primary">Login</Button>
            </CardFooter>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
