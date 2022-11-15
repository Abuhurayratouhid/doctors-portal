import React from 'react';
import fluoride from '../../../assets/images/fluoride.png';
import cavity from '../../../assets/images/cavity.png';
import whitening from '../../../assets/images/whitening.png';
import ServiceCart from '../ServiceCart';
import ServiceBanner from '../ServiceBanner';

const Service = () => {
    const services = [
        {
            id: 1,
            img :fluoride,
            name : "Fluoride Treatment",
            details : "All people are like this service",
        },
        {
            id: 2,
            img :cavity,
            name : "cavity",
            details : "All people are like this service",
        },
        {
            id: 3,
            img :whitening,
            name : "whitening",
            details : "All people are like this service",
        }
    ];
    return (
        <div className='mt-32 min-h-screen'>
            <div className='mb-32'>
            <h2 className='text-center text-xl text-primary font-bold'>Our service</h2>
            <h2 className='text-center text-2xl font-semibold'>Services We Provide</h2>
            </div>
            <div className='gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-6'>
                {
                    services.map(service => <ServiceCart
                    key={service.id}
                    service={service}
                    ></ServiceCart>)
                }

            </div>
            <ServiceBanner></ServiceBanner>
        </div>
    );
};

export default Service;