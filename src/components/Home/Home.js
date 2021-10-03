import React from 'react';
import { Card } from 'react-bootstrap';
import img from '../../Images/banner.jpg'
import './Home.css'

const Home = () => {
    return (
        <div>
            <Card className="bg-dark text-white">
            <Card.Img className="banner-img" src={img} alt="Card image" />
            <Card.ImgOverlay className="text-center">
                <Card.Title className="banner-text"><h1>Launch your <br />
                Own online yellow-shapelearning
                <br /> Platform</h1></Card.Title>
                <Card.Text>
                <h3>Unlimited access to all 60+ instructors.</h3>
                </Card.Text>
                <Card.Text>2 passes (with access to all classes) for $240</Card.Text>
            </Card.ImgOverlay>
            </Card>
        </div>
    );
};

export default Home;