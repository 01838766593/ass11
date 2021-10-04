import React, { useEffect, useState } from 'react';
import { Row, Spinner } from 'react-bootstrap';
import Service from '../Service/Service';
import './HomeService.css';

const HomeService = () => {
    const [homeService, setHomeService] = useState([]);

    useEffect(() => {
        fetch('./fakeData/products.JSON')
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setHomeService(data);
            })
    }, []);
    return (
        <div className="background">
            <h2 className="p-3 text">Premium Services </h2>
            {
                homeService.length === 0 ?
                    <Spinner animation="border" /> :
                    <Row xs={1} md={4} className="g-4 pb-4 px-4">
                        {
                            homeService.slice(0, 4).map(hs => <Service key={hs.id} homeService={hs}></Service>)
                        }
                    </Row>
            }
        </div>
    );
};

export default HomeService;