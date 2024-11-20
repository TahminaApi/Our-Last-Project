import React from 'react';
import people1 from '../../assets/Images/people01,jpg.jpeg';
import people2 from '../../assets/Images/download (1).jpeg';
import people3 from '../../assets/Images/download.jpeg';
import Review from './Review';

const Reviews = () => {
  const reviews = [
    {
      _id: 1,
      name: 'Teeth Whitining',
      img: people1,
      reviews:
        ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim inventore alias aperiam laudantium at nostrum vel, blanditiis ad officia dignissimos.',
      location: 'Califonia',
    },
    {
      _id: 2,
      name: 'Teeth Whitining',
      img: people2,
      reviews:
        ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim inventore alias aperiam laudantium at nostrum vel, blanditiis ad officia dignissimos.',
      location: 'Califonia',
    },
    {
      _id: 3,
      name: 'Teeth Whitining',
      img: people3,
      reviews:
        ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim inventore alias aperiam laudantium at nostrum vel, blanditiis ad officia dignissimos.',
      location: 'Califonia',
    },
  ];
  return (
    <div className="pt-16">
      <h1 className="text-5xl font-semibold text-yellow-500 items-center text-center">
        Some Reviews
      </h1>
      <div className=" mt-16 mx-4 grid md:grid-cols-2 lg:grid-cols-3 gap-6 pb-14 ">
        {reviews.map((review) => (
          <Review key={review._id} review={review}></Review>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
