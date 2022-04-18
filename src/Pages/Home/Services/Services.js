import React, { useState, useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import Service from '../Service/Service';


const Services = () => {

    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('servicesData.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    return (
        <div id='services' className='container-fluid'>
            <h2 className='mt-5 text-center'>Services</h2>
            <Row xs={1} md={3} className="g-5 mt-2 mb-5">

                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }

            </Row>
        </div>
    );
};

export default Services;