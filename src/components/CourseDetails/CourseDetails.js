import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import img from '../../Images/details-img.jpg';
import img1 from '../../Images/instartor-1.jpg';
import img2 from '../../Images/teacher-2.jpg';
import imgt3 from '../../Images/teacher-3.jpg';
import img3 from '../../Images/about-img-1.jpg';
import img4 from '../../Images/about-img-4.jpg';
import '../Apply/Apply.css'

const CourseDetails = () => {
    return (
        <div className="container margin-top">
            <h1 className="text-center text-info my-5">Course Details</h1>
            <div className="my-5">
                <h1>The business Intelligence analyst Course 2022</h1>
                <img src={img} alt="" />
                <h3>Course Overview</h3>
                <p>Only a quid me old mucker squiffy tomfoolery grub cheers ruddy cor blimey guvnor in my flat, up the duff Eaton car boot up the kyver pardon you A bit of how's your father David skive off sloshed, don't get shirty with me chip shop vagabond crikey bugger Queen's English chap. Matie boy nancy boy bite your arm off up the kyver old no biggie fantastic boot, David have it show off show off pick your nose and blow off lost the plot porkies bits and bobs only a quid bugger all mate, absolutely bladdered bamboozled it's your round don't get shirty with me down the pub well. Give us a bell bits and bobs Charles he lost his bottle super my lady cras starkers bite your arm off Queen's English, pardon me horse play Elizabeth a blinding shot chinwag knees up do one David, blag cup of tea Eaton so I said bleeding haggle James Bond cup of char. Gosh William ummm I'm telling crikey burke I don't want no agro A bit of how's your father bugger all mate off his nut that, what a plonker cuppa owt to do with me nancy boy show off show off pick your nose and blow off spiffing good time lavatory me old mucker, chimney pot what a load of rubbish boot squiffy lost the plot brolly wellies excuse my french.</p>
                <p><small> Big data, Data analysis, Data modeling</small></p>
                <h3>What is the Target Audience?</h3>
                <ul>
                    <li> Business's managers, leaders</li>
                    <li> Downloadable lectures, code and design assets for all projects</li>
                    <li> Anyone who is finding a chance to get the promotion</li>
                </ul>
                
                <Container className="my-5">
                <h3>Other Instructors</h3>
                    <Row>
                        <Col md={4}>
                        <img className="rounded-circle my-2" src={img1} alt="" />
                        <h6>Eleanor Fant</h6>
                        <p>Instructor</p>
                        </Col>
                        <Col md={4}>
                        <img className="rounded-circle my-2" src={img2} alt="" />
                        <h6>Lauren Stamps</h6>
                        <p>Teacher</p>
                        </Col>
                        <Col md={4}>
                        <img className="rounded-circle my-2" src={imgt3} alt="" />
                        <h6>Jonquil Von</h6>
                        <p>Associate</p>
                        </Col>
                    </Row>
                </Container>
                <Container className="my-5">
                <Row>
                    <Col md={6}>
                        <div className="shadow h-100">
                            <img className="w-100" src={img3} alt="" />
                            <div className="w-75 p-3">
                            <p>72 Lesson</p>
                            <h3>Fundamentals of music theory Learn new.</h3>
                            </div>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className="shadow">
                            <img className="w-100" src={img4} alt="" />
                            <div className="w- p-3">
                            <p>43 Lesson</p>
                            <h3>Become a product Manager learn the skills & job.</h3>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            </div>
        </div>
    );
};

export default CourseDetails;