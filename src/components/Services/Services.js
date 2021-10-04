import React, { useEffect, useState } from 'react';
import { Row, Spinner } from 'react-bootstrap';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const [allService, setAllServices] = useState([]);

    useEffect(() => {
        fetch('./fakeData/products.JSON')
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setAllServices(data);
            })
    }, []);
    return (
        <div className="backgroundServices">
            <h2 className="p-3 textCol">All Running Services </h2>
            {
                <Row xs={1} md={3} className="g-4 pb-4 px-4">
                    {
                        allService.slice(0, 9).map(hs => <Service key={hs.id} homeService={hs}></Service>)
                    }
                </Row>
            }
        </div>
    );
};
export default Services;