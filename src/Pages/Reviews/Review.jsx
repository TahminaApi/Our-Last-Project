import React from 'react';

const Review = ({ review }) => {
  const { name, img, reviews, location } = review;
  return (
    <div>
      <div className="card shadow-xl bg-slate-700 ">
        <div className="card-body items-center text-center">
          <p className="text-left text-orange-500">{reviews}</p>
        </div>
        <div className="flex items-center px-7 py-3">
          <img
            src={img}
            alt="Shoes"
            className="w-16 rounded-full ring ring-primary p-[2px]"
          />

          <div className="ms-4">
            <h2 className="font-bold text-2xl text-yellow-400">{name}</h2>
            <h2 className='text-orange-500'>{location}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
