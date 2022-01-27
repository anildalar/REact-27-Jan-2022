import React, { useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import axios from 'axios';
import swal from 'sweetalert';

const config = require('../config.json')

//RFC
export default function Login() {
    //1. State/Hook Variable
    const [identifier,setIdentifier] = useState('');
    const [password,setPassword] = useState('');

    //2. Functions
    let login = ()=>{
        console.log('OOIOKJOKOKOKKO');
        console.log(identifier);
        console.log(password);

        axios.post(`${ config.prod_url }/api/auth/local`, {
            identifier: identifier,
            password: password,
        })
        .then(response => {
            // Handle success.
            console.log('Well done!');
            localStorage.setItem('token',response.data.jwt);
            localStorage.setItem('userinfo',JSON.stringify(response.data.user));
            swal("Well done!", JSON.stringify(response.data.user), "success");

            console.log('User profile', response.data.user);
            console.log('User token', response.data.jwt);

           
            
        })
        .catch(error => {
            // Handle error.
            console.log('An error occurred:', error.response);
            swal("Opps done!",JSON.stringify(error.response), "error");
           
        });

    }

    //3. Return statement JSX
    return (
        <Container>
            
            <Row>
                <Col md={{ span: 6, offset: 3 }}> 
                    <h1>Strapi Login System</h1>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" name="identifier" value={identifier} onChange={(e)=>{ setIdentifier(e.target.value) }} placeholder="Enter email" />
                            <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" name="password" value={password} onChange={(e)=>{ setPassword(e.target.value) }} placeholder="Password" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <Button variant="primary" type="button" onClick={ ()=>{ login() } }>
                            Submit
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
        
    );
}
