import React from 'react';
import Banner from './Banner';
import Comments from './Comments';
import ContactSection from './ContactSection';
import MakeAppointment from './MakeAppointment';
import Service from './Service/Service';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <Service></Service>
            <MakeAppointment></MakeAppointment>
            <Comments></Comments>
            <ContactSection></ContactSection>
        </div>
    );
};

export default Home;