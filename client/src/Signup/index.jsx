import React, { useReducer } from "react";
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
import { ACTIONS, signupReducer, initialState } from "./signupReducer";

const Signup = () => {

  const [state, dispatch] = useReducer(signupReducer, initialState);
  const isPasswordValid = Object.values(state.password.validations).every(Boolean);

  return (
    <Container fluid>
      <Row>
        <Col sm={{offset:1, span: 10}} md={{offset:3, span:6}} lg={{offset:4, span:4}}>
          <Card className="mt-3 signup-card">
            <CardHeader>Signup</CardHeader>
            <CardBody>
               <FormGroup controlId="name" className="mb-3">
                <FormLabel>Name</FormLabel>
                <FormControl onChange={(e)=>{dispatch({type: ACTIONS.NAME_CHANGE, payload: e.target.value})}} placeholder="Enter Name"></FormControl>
              </FormGroup>

              <FormGroup controlId="username" className="mb-3">
                <FormLabel>Username</FormLabel>
                <FormControl onChange={(e)=>{dispatch({type: ACTIONS.USERNAME_CHANGE, payload: e.target.value})}} placeholder="Enter Username"></FormControl>
              </FormGroup>

               <FormGroup controlId="email" className="mb-3">
                <FormLabel>Email</FormLabel>
                <FormControl onChange={(e)=>{dispatch({type: ACTIONS.EMAIL_CHANGE, payload: e.target.value})}} placeholder="Enter Email"></FormControl>
              </FormGroup>

              <FormGroup controlId="password" className="mb-3">
                <FormLabel>Password</FormLabel>
                <FormControl
                  onChange={(e)=>{dispatch({type: ACTIONS.PASSWORD_CHANGE, payload: e.target.value})}}
                  placeholder="Enter Password"
                  type="password"
                ></FormControl>
              </FormGroup>

            </CardBody>
            <CardFooter>
              <Button variant="outline-primary">Signup</Button>
            </CardFooter>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Signup;
