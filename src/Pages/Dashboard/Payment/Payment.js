import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { } from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckoutForm from './CheckoutForm ';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);
// console.log(stripePromise)


const Payment = () => {
    
    const booking = useLoaderData();
    const { price, slot, appointmentDate, treatment, name } = booking;
    //    console.log(booking)

    return (
        <div>
            <h1 className='text-4xl'>Payment here </h1>
            <h1 className='text-2xl'> Hello Mr. {name}</h1>
            <p>Please payment <strong>${price}</strong> for your appointment <strong>{treatment}</strong> on <strong>{appointmentDate} </strong> at <strong>{slot}</strong></p>

            <div className='w-96 h-40 my-10 p-10 bg-slate-200'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm
                    booking ={booking} 
                    />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;