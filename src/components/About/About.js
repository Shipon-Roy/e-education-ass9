import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import img from '../../Images/about-img-1.jpg';
import img2 from '../../Images/about-img-2.png';
import img3 from '../../Images/about-img-3.jpg';
import img4 from '../../Images/about-img-4.jpg';

const About = () => {
    return (
        <div className="my-5">
            <h1 className="text-info text-center my-5">About</h1>
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
                    <Col md={8} className="my-5">
                        <small className="text-info">Why Choses Me</small>
                        <h3>Tools For Teachers And Learners</h3>
                        <p>Oxford chimney pot Eaton faff about blower blatant brilliant, bubble and squeak he legged it Charles bonnet arse at public school bamboozled.</p>
                    </Col>
                    <Col md={4}>
                        <img className="w-75" src={img2} alt="" />
                    </Col>
                </Row>
            </Container>
            <Container className="my-5 shadow-lg">
                <Row>
                    <Col className="p-5" md={6}>
                        <img className="w-75" src={img3} alt="" />
                        <div className="w-75">
                        <p>72 Lesson</p>
                        <h3>Fundamentals of music theory Learn new.</h3>
                        </div>
                    </Col>
                    <Col className="p-5" md={6}>
                        <img className="w-75" src={img4} alt="" />
                        <div className="w-75">
                        <p>43 Lesson</p>
                        <h3>Become a product Manager learn the skills & job.</h3>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default About;