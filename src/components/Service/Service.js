import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Service = (props) => {
    const { img, price, name } = props.homeService;
    return (
        <Col>
            <Card style={{ fontSize: 'larger' }}>
                <Card.Img style={{ height: '200px' }} variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {price} BDT/Month
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Service;