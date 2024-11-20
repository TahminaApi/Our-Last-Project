import React from 'react';
import Diamond1 from '../../../assets/Images/daimond1.jpg';
import Diamond2 from '../../../assets/Images/diamond2.jpg';
import Diamond3 from '../../../assets/Images/diamond3.jpg';
import Diamond4 from '../../../assets/Images/Diamond4.webp';
import Diamond5 from '../../../assets/Images/diamond2.jpg';
import Diamond6 from '../../../assets/Images/Diamond6.jpg';
import Slider from 'react-slick';
import DiamondOld from './DiamondOld';

const DiamondOlds = () => {
  const diamondOldData = [
    {
      id: 1,
      img: Diamond1,
      name: 'Gold Necless',
      price: 1000,
    },
    {
      id: 2,
      img: Diamond2,
      name: 'Gold Necless',
      price: 1000,
    },
    {
      id: 3,
      img: Diamond3,
      name: 'Diamond Ring',
      price: 1000,
    },
    {
      id: 4,
      img: Diamond4,
      name: 'Diamond Cut set',
      price: 1000,
    },
    {
      id: 5,
      img: Diamond5,
      name: 'Gold plated set',
      price: 1000,
    },
    {
      id: 6,
      img: Diamond6,
      name: 'Gold set',
      price: 1000,
    },
  ];
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <div className="pt-16">
      <h1 className="font-bold text-4xl text-center text-yellow-400">
        Here are the
        <span className="text-6xl"> SecondHand Products</span>
      </h1>
      <p className="text-center text-orange-500">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ad quos
        eius maiores provident consequatur, nam quam obcaecati saepe reiciendis.
      </p>

      <Slider {...settings}>
        {diamondOldData.map((diamond) => (
          <DiamondOld key={diamond.id} diamond={diamond}></DiamondOld>
        ))}
      </Slider>
    </div>
  );
};

export default DiamondOlds;
