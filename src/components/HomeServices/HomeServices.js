import React from 'react';
import { Card, Col} from 'react-bootstrap';

const HomeServices = (props) => {
    const {name, img, price} = props.service;
    return (
        <div>
            <Col>
                <Card className="shadow h-100">
                    <img src={img} alt="" />
                    <div className="w-75 p-3">
                    <h3>{name}</h3>
                    <p>Course Fee: {price}</p>
                    </div>
                </Card>
            </Col>
        </div>
    );
};

export default HomeServices;