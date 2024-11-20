import React from 'react';
import AntiqueOld from './AntiqueOld';
import me1 from '../../../assets/Images/gold01.webp';
import me2 from '../../../assets/Images/images (2).jpeg';
import me3 from '../../../assets/Images/360_F_705161764_cM4AtMMXyaQg1d267UJzMKCRiDmz8Ziq.jpg';
import me4 from '../../../assets/Images/gold set 02.jpg';
import me5 from '../../../assets/Images/gold03.jpg';
import me6 from '../../../assets/Images/Gold02.jpeg';
import Slider from 'react-slick';

const AntiqueOlds = () => {
  const antiqueOldData = [
    {
      id: 1,
      img: me1,
      name: 'Gold Necless',
      price: 1000,
    },
    {
      id: 2,
      img: me2,
      name: 'Gold Necless',
      price: 1000,
    },
    {
      id: 3,
      img: me3,
      name: 'Diamond Ring',
      price: 1000,
    },
    {
      id: 4,
      img: me4,
      name: 'Diamond Cut set',
      price: 1000,
    },
    {
      id: 5,
      img: me5,
      name: 'Gold plated set',
      price: 1000,
    },
    {
      id: 6,
      img: me6,
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
        {antiqueOldData.map((antique) => (
          <AntiqueOld key={antique.id} antique={antique}></AntiqueOld>
        ))}
      </Slider>
    </div>
  );
};

export default AntiqueOlds;
