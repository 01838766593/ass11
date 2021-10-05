import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import HomeService from '../HomeService/HomeService';
import './Home.css';


const Home = () => {

    return (
        <div>
            <Header></Header>
            <Card className="show-grid backColor">
                <Container>
                    <Row>
                        <Col xs={12} md={8}>
                            <h1 className="textColor">Welcome to Our Online Learning Platform</h1>
                            <Button variant="danger"><Link style={{ margin: '10px', textDecoration: 'none', color: 'white' }} to="/">All Sevices</Link></Button>{' '}
                        </Col>
                        <Col xs={12} md={4}>
                            <iframe width="420" height="315"
                                src="https://www.youtube.com/embed/2y-6yAzFo_w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                            </iframe>
                        </Col>
                    </Row>
                </Container>
            </Card>
            <HomeService></HomeService>
            <Footer></Footer>
        </div>
    );
};

export default Home;