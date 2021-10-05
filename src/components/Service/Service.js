import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';

const Service = (props) => {
    const { img, price, name } = props.homeService;
    //react bootstrap using
    return (
        <div>
            <Col>
                <Card style={{ fontSize: 'larger' }}>
                    <Card.Img style={{ height: '200px' }} variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            {price} BDT/Month
                        </Card.Text>
                        <Button variant="primary">Enroll Now</Button>{' '}
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Service;