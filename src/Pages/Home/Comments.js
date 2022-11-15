import React from 'react';
import people from '../../assets/images/people1.png'
import CommentCart from './CommentCart';
import quote from '../../assets/icons/quote.svg'

const Comments = () => {
    const commentsData = [
        {
            id: 1,
            img: people,
            name: 'Winson herry',
            address: 'london',
            comment: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content'
        },
        {
            id: 2,
            img: people,
            name: 'Winson herry',
            address: 'london',
            comment: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content'
        },
        {
            id: 3,
            img: people,
            name: 'Winson herry',
            address: 'london',
            comment: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content'
        },
    ]
    return (
        <div className='mt-20 mb-36'>
            <div className='flex justify-between'>
                <div>
                    <h2 className=' text-xl text-primary font-bold'>Testimonial </h2>
                    <h2 className=' text-3xl font-bold'>What Our Patients Says </h2>
                </div>
                <div>
                    <img className='w-24 lg:w-48' src={quote} alt="" />
                </div>
            </div>

            <div className='mt-32 gap-12 md:mx-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    commentsData.map(comments => <CommentCart
                        key={comments.id}
                        comments={comments}
                    ></CommentCart>)
                }
            </div>

        </div>
    );
};

export default Comments;