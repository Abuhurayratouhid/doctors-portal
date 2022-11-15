import React from 'react';
import treatment from '../../assets/images/treatment.png'

const ServiceBanner = () => {
    return (
        <div className="card lg:card-side  shadow-xl lg:mx-40 lg:mt-40">
            <div className='lg:w-1/2 '>
            <img className='' src={treatment} alt="Album" />
            </div>
            <div className="card-body lg:w-1/2 ">
                <div className='py-20'>
                <h2 className="card-title ">Exceptional Dental Care, on Your Terms</h2>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                </div>
                <div className="card-actions ">
                    <button className="btn btn-primary">get Started</button>
                </div>
            </div>
        </div>
    );
};

export default ServiceBanner;