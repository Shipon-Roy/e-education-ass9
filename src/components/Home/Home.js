import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import img1 from '../../Images/banner.jpg';
import img2 from '../../Images/about-img-1.jpg';
import img3 from '../../Images/about-img-1.jpg';
import img4 from '../../Images/about-img-3.jpg';
import img5 from '../../Images/about-img-4.jpg';
import img6 from '../../Images/details-img.jpg';
import img7 from '../../Images/about-img-5.jpg';
import './Home.css';
import { Link } from 'react-router-dom';


const Home = () => {
    return (
        <div className="my-5">
            <Card className="bg-dark text-white">
            <Card.Img className="banner-img" src={img1} alt="Card image" />
            <Card.ImgOverlay className="text-center">
                <Card.Title className="banner-text"><h1>Launch your <br />
                Own online yellow-shapelearning
                <br /> Platform</h1></Card.Title>
                <Card.Text>
                <h3>Unlimited access to all 60+ instructors.</h3>
                </Card.Text>
                <Card.Text>2 passes (with access to all classes) for $240</Card.Text>
                <button className="btn btn-info">Apply Now</button>
            </Card.ImgOverlay>
            </Card>


            <Container className="my-5 p-3 shadow">
                <h1 className="text-center text-info my-3">Services</h1>
                <Row>
                    <Col md={3}>
                    <div className="border h-100">
                        <img className="w-100" src={img3} alt="" />
                        <div>
                        <h3>Build your media and Public presence</h3>
                        <p>Course Fee:3600</p>
                        </div>
                    </div>
                    </Col>
                    <Col md={3}>
                    <div className="border">
                        <img className="w-100" src={img4} alt="" />
                        <div className="w-75">
                        <h3>Become a product Manager learn the skills & job.</h3>
                        <p>Course Fee:4600</p>
                        </div>
                    </div>
                    </Col>
                    <Col md={3}>
                    <div className="border h-100">
                        <img className="w-100" src={img5} alt="" />
                        <div className="w-75">
                        <h3>Fundamentals of music theory Learn new</h3>
                        <p>Course Fee:5600</p>
                        </div>
                    </div>
                    </Col>
                    <Col md={3}>
                    <div className="border h-100">
                        <img className="w-100" src={img7} alt="" />
                        <div className="w-75">
                        <h3>Fundamentals of music theory Learn new</h3>
                        <p>Course Fee:5600</p>
                        </div>
                    </div>
                    </Col>
                </Row>
                <div className="text-center my-3">
                <Link to="/services"><button className="btn btn-info">Service More</button></Link>
                </div>
            </Container>

            <Container fluid="md" className="my-5 shadow p-3">
            <h1 className="text-info text-center my-3">About</h1>
            <Row>
                <Col md={4}>
                    <img className="w-100" src={img2} alt="" />
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
            <div className="text-center">
            <Link to="/about"><button className="btn btn-info">About More</button></Link>
            </div>
            </Container>

            <div className="container border">
            <h1 className="text-center text-info my-3">Course Details</h1>
                <div className="my-5">
                <h1>The business Intelligence analyst Course 2022</h1>
                <img src={img6} alt="" />
                <h3>Course Overview</h3>
                <p>Only a quid me old mucker squiffy tomfoolery grub cheers ruddy cor blimey guvnor in my flat, up the duff Eaton car boot up the kyver pardon you A bit of how's your father David skive off sloshed, don't get shirty with me chip shop vagabond crikey bugger Queen's English chap. Matie boy nancy boy bite your arm off up the kyver old no biggie fantastic boot, David have it show off show off pick your nose and blow off lost the plot porkies bits and bobs only a quid bugger all mate, absolutely bladdered bamboozled it's your round don't get shirty with me down the pub well. Give us a bell bits and bobs</p>
                </div>

                <div className="text-center my-3">
                <Link to="/coursedetails"><button className="btn btn-info">Course Details More</button></Link>
            </div>
            </div>

            

        </div>
    );
};

export default Home;