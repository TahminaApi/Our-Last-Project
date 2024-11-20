import React from 'react';
import Diamond1 from '../../../../assets/Images/daimond1.jpg';
import Diamond2 from '../../../../assets/Images/diamond2.jpg';
import Diamond7 from '../../../../assets/Images/diamond7jpeg.jpeg';
import Diamond8 from '../../../../assets/Images/diamond8.jpg';
import Diamond9 from '../../../../assets/Images/diamond9.jpg';
import Diamond10 from '../../../../assets/Images/diamond10.jpg';
import Slider from 'react-slick';
import DiamondLatest from './DiamondLatest';

const DiamondLatests = () => {
  const diamondlatestData = [
    {
      id: 1,
      img: Diamond7,
      name: 'Gold Necless',
      price: 1000,
    },
    {
      id: 2,
      img: Diamond8,
      name: 'Gold Necless',
      price: 1000,
    },
    {
      id: 3,
      img: Diamond9,
      name: 'Diamond Ring',
      price: 1000,
    },
    {
      id: 4,
      img: Diamond10,
      name: 'Diamond Cut set',
      price: 1000,
    },
    {
      id: 5,
      img: Diamond1,
      name: 'Gold plated set',
      price: 1000,
    },
    {
      id: 6,
      img: Diamond2,
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
    <div className="pt-20">
      <h1 className="font-bold text-4xl text-center text-yellow-400">
        Here are the
        <span className="text-6xl"> Latest Collections</span>
      </h1>
      <p className="text-center text-orange-500">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ad quos
        eius maiores provident consequatur, nam quam obcaecati saepe reiciendis.
      </p>

      <Slider {...settings}>
        {diamondlatestData.map((diamond) => (
          <DiamondLatest key={diamond.id} diamond={diamond}></DiamondLatest>
        ))}
      </Slider>
    </div>
  );
};

export default DiamondLatests;
