import React, { useState, useEffect } from 'react';

const Services = () => {

    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('servicesData.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    return (
        <div>
            <h2>Services: {services.length}</h2>
        </div>
    );
};

export default Services;