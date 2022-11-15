import React from 'react';
import doctor from '../../assets/images/doctor.png';
import bg from '../../assets/images/appointment.png'

const MakeAppointment = () => {
    return (
        <section style={{background: `url(${bg})`}}>
            <div className="hero  mt-40">
                <div className="hero-content flex-col lg:flex-row">
                    <img alt='' src={doctor} className="hidden lg:block -mt-40 lg:w-1/2 rounded-lg shadow-2xl" />
                    <div className='lg:w-1/2 '>
                    <h2 className=' text-xl text-primary font-bold'>Appointment </h2>
                        <h1 className="text-5xl font-bold text-white">Make an appointment Today</h1>
                        <p className="py-6 text-white">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeAppointment;