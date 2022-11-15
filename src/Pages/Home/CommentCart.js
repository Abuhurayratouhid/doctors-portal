import React from 'react';

const CommentCart = ({ comments }) => {
    const { img, name, comment, address } = comments;
    return (
        <div className="card card-compact p-5 bg-base-100 shadow-xl">
            <div>
                <h1 >{comment}</h1>
            </div>
            <div className="card-body">
                
                <div className="card-actions ">
                <img className='h-10 w-10 rounded-full' src={img} alt="Shoes" />
                <div className='flex flex-col'>
                <p className='font-bold'>{name}</p>
                <p>{address}</p>
                </div>
                </div>
            </div>
        </div>
    );
};

export default CommentCart;