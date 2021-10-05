import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import HomeServices from '../HomeServices/HomeServices';
import '../Apply/Apply.css'


const Services = () => {
    const [services, setServices] = useState([])
    useEffect( () => {
        fetch('./services.json')
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])
    return (
        <div className="margin-top">
            <h1 className="text-info text-center my-3">Services</h1>
            <Container className="my-5">
                <Row sm={1} md={3} className="g-5 mx-3">
                {
                    services.map(service => <HomeServices service={service}></HomeServices>)
                }
                </Row>
            </Container>
        </div>
    );
};

export default Services;