import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';

import React, { useEffect, useState } from 'react';

const CheckoutForm = ({booking}) => {
    
    // const treatmentPrice = {price};
    // console.log(treatmentPrice)
    const [cardError, setCardError] = useState([''])
    const [clientSecret, setClientSecret] = useState("");
    // console.log(cardError)
    const {price} = booking;

    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        fetch("http://localhost:5000/create-payment-intent", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({price}),
        })
          .then((res) => res.json())
          .then((data) => setClientSecret(data.clientSecret));
      }, [price]);


    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement);

        if (card === null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.log(error)
            setCardError(error)
        }
        else {
            // console.log(paymentMethod,)
            setCardError('')
        }
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button 
                className='btn btn-sm btn-primary mt-10' 
                type="submit" 
                disabled={!stripe}>
                    Pay
                </button>

            </form>
            {
                cardError && <p className="text-red-500">{cardError.message}</p>
            }
        </>
    );
};

export default CheckoutForm;