import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import img from '../../Images/about-img-1.jpg';
import img2 from '../../Images/about-img-2.png';

const About = () => {
    return (
        <div>
            <h1 className="text-info text-center">About</h1>
            <Container fluid="md" className="my-5 shadow p-3">
            <Row>
                <Col md={4}>
                    <img className="w-100" src={img} alt="" />
                </Col>
                <Col md={8}>
                <h3>Achieve YourGoals With Educal</h3>
                 <p>Lost the plot bobby such a fibber bleeding bits and bobs don't get shirty with me bugger all mate chinwag super pukka william barney, horse play buggered.</p>
                 <ul>
                     <li>Upskill your organization.</li>
                     <li>Access more then 100K online courses</li>
                     <li>Learn the latest skills</li>
                 </ul>
                </Col>
            </Row>
            </Container>
            <Container fluid="md">
                <Row>
                    <Col md={8} className="my-10">
                        <small className="text-info">Why Choses Me</small>
                        <h3>Tools For Teachers And Learners</h3>
                        <p>Oxford chimney pot Eaton faff about blower blatant brilliant, bubble and squeak he legged it Charles bonnet arse at public school bamboozled.</p>
                    </Col>
                    <Col md={4}>
                        <img src={img2} alt="" />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default About;