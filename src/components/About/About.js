import React from 'react';
import { Col, Row } from 'react-bootstrap';
import img from '../../Images/about-img-1.jpg'

const About = () => {
    return (
        <div>
            <h1 className="text-info text-center">About</h1>
            <div>
            <Row>
                <Col md={4}>
                    <img src={img} alt="" />
                </Col>
                <Col md={8}>
                <h3>Achieve YourGoals With Educal</h3>
                 <p>Lost the plot bobby such a fibber bleeding bits and bobs don't get shirty with me bugger all mate chinwag super pukka william barney, horse play buggered.</p>
                </Col>
            </Row>
            </div>
        </div>
    );
};

export default About;