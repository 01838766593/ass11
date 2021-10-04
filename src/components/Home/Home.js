import { Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Home.css';


const Home = () => {

    return (
        <Card className="show-grid backColor">
            <Container>
                <Row>
                    <Col xs={12} md={8}>
                        <h1 className="textColor">Welcome to Our Online Learning Platform</h1>
                        <button style={{ backgroundColor: 'goldenrod' }}>
                            <Link style={{ margin: '10px', textDecoration: 'none', color: 'black' }} to="/">All Sevices</Link>
                        </button>
                    </Col>
                    <Col xs={12} md={4}>
                        <iframe width="420" height="315"
                            src="https://www.youtube.com/embed/2y-6yAzFo_w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                        </iframe>
                    </Col>
                </Row>
            </Container>
        </Card>


    );
};

export default Home;