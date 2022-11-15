import React from 'react';
import bg from '../../assets/images/appointment.png'

const ContactSection = () => {
    return (
        <section className='' style={{background: `url(${bg})`}}>
            <div className='text-center '>
                <h1 className='text-primary text-bold font-bold pt-10'>Contact us </h1>
                <h1 className='text-2xl text-white'>Stay connected with us</h1>
                
            </div>
            <div className='text-center mt-10'>
                <form>
                <input type="text" placeholder="Email address" className="input input-bordered input-secondary mb-2 w-full lg:w-[450px] " />
                <br/>
                <input type="text" placeholder="Subject" className="input input-bordered input-secondary mb-2 w-full lg:w-[450px] " />
                <br />
                <textarea className="textarea textarea-primary w-full lg:w-[450px]" placeholder="Your message"></textarea>
                <br />
                <button className="btn bg-gradient-to-r from-primary to-secondary my-9">Submit </button>
                </form>
            </div>
        </section>
    );
};

export default ContactSection;