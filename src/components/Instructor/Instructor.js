import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import HomeService from '../HomeService/HomeService';
import './Instructor.css';


const Instructor = () => {
    //using react bootsrap courasel
    return (
        <div>
            <Header></Header>
            <Carousel className="bg-secondary m-5">
                <Carousel.Item>
                    <img
                        className="d-block imag mx-auto"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQegTbPV2qL8TSVMFG3NPX4qBiGUsDVjicTMR7pczqyJIdmSNRHgAeOieAhD-vuG9IUikI&usqp=CAU"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <div className="bg-dark pb-0">
                            <h3>Sayem Mahmud</h3>
                            <p>Science Instructor</p>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block imag mx-auto"
                        src="https://us.123rf.com/450wm/koldunovaaa/koldunovaaa2001/koldunovaaa200100362/138967740-portrait-of-strict-serious-businessman-in-black-suit-photo-for-id-.jpg?ver=6"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <div className="bg-dark pb-0">
                            <h3>Ridwan Ahmed</h3>
                            <p>Logistic Skill Instructor</p>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block imag mx-auto"
                        src="https://image.shutterstock.com/image-photo/man-poses-passport-photo-260nw-207377266.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <div className="bg-dark pb-0">
                            <h3>Masud Rana</h3>
                            <p>Drawing Instructor</p>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block imag mx-auto"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1aGCJJPLdmre-sCCenhtV_Ic8JYPpYq4nEw&usqp=CAU"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <div className="bg-dark pb-0">
                            <h3>Miraj Shah</h3>
                            <p>Quran Instructor</p>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <HomeService></HomeService>
            <Footer></Footer>
        </div>
    );
};

export default Instructor;