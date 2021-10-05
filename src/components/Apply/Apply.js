import React from 'react';
import { Form } from 'react-bootstrap';
import './Apply.css'

const Apply = () => {
    return (
        <div className="container margin-top">
            <Form className="w-50 mx-auto">
            <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <button className="btn btn-info mb-5">Pey Now</button>
            </Form>
        </div>
    );
};

export default Apply;