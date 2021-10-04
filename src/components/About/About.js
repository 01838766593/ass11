import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './About.css';
const About = () => {
    return (
        <Container>
            <Row>
                <Col xs={12} md={6}>
                    <img src="https://media.istockphoto.com/photos/hand-with-marker-writing-skill-concept-picture-id637711198?k=20&m=637711198&s=612x612&w=0&h=bznzNhH923ckyX6LINoDPtH6z3wbB0yO6Gvk5fQR0ms=" />
                </Col>
                <Col xs={12} md={6}>
                    <h2 className="text-C">Our Goal</h2>
                    <p className="textP">Our main goal is to make our student always advanced with various skills of technical, academic and extra-curriculum sectors. So that they can give us a better balanced future. </p>
                </Col>

            </Row>
        </Container>
    );
};

export default About;