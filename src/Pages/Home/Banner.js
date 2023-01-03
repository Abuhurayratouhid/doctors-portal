import React from 'react';
import chair from '../../assets/images/dental-chair.jpg';
import clock from '../../assets/icons/clock.svg';
import phone from '../../assets/icons/phone.svg';
import marker from '../../assets/icons/marker.svg';

const Banner = () => {
    return (
        <div>
            <div className="hero  bg-base-100">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img alt='' src={chair} className="lg:w-[594px] lg:h-[355px] rounded-lg shadow-2xl lg:mr-8" />
                    <div className='lg:pl-10'>
                        <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn bg-gradient-to-r from-primary to-secondary">Get Started</button>
                    </div>
                </div>
            </div>
            {/* section  */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-20'>
                <div className="card w-96 bg-gradient-to-r from-primary to-secondary text-white">
                    <div className='lg:flex justify-between items-center'>
                    <div className='pl-2'>
                        <img src={clock} alt="" />
                    </div>
                    <div className="card-body">
                        <h2 className="card-title">Opening Hours</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>

                    </div>
                    </div>
                </div>
                <div className="card w-96 bg-accent text-white">
                    <div className='mx-auto lg:flex justify-between items-center'>
                    <div className='pl-2 '>
                        <img src={marker} alt="" />
                    </div>
                    <div className="card-body">
                        <h2 className="card-title">Visit our location</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>

                    </div>
                    </div>
                </div>
                <div className="card w-96 bg-gradient-to-r from-primary to-secondary text-white">
                    <div className='lg:flex justify-between items-center'>
                    <div className='pl-2'>
                        <img src={phone} alt="" />
                    </div>
                    <div className="card-body">
                        <h2 className="card-title">Contact us now</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>

                    </div>
                    </div>
                </div>
                
                
            </div>
        </div>
    );
};

export default Banner;