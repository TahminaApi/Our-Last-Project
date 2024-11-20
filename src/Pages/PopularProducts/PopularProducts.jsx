import React from 'react';
import PopularProduct from './PopularProduct';
import Cardimg1 from '../../assets/Images/gold01.webp';
import Cardimg2 from '../../assets/Images/images (2).jpeg';
import Cardimg3 from '../../assets/Images/360_F_705161764_cM4AtMMXyaQg1d267UJzMKCRiDmz8Ziq.jpg';
import Cardimg4 from '../../assets/Images/High_Jewellery.webp';
import Cardimg5 from '../../assets/Images/gold03.jpg';
import Cardimg6 from '../../assets/Images/Gold02.jpeg';

const PopularProducts = () => {
  const productData = [
    {
      id: 1,
      name: 'Gold Necless',
      discription: 'Dhaka Bangladesh',
      img: Cardimg1,
      price: 250000,
    },
    {
      id: 2,
      name: 'Gold Necless',
      discription: 'Dhaka Bangladesh',
      img: Cardimg2,
      price: 250000,
    },
    {
      id: 3,
      name: 'Diamond Ring',
      discription: 'Dhaka Bangladesh',
      img: Cardimg3,
      price: 250000,
    },
    {
      id: 4,
      name: 'Diamond Cut set',
      discription: 'Dhaka Bangladesh',
      img: Cardimg4,
      price: 250000,
    },
    {
      id: 5,
      name: 'Gold plated set',
      discription: 'Dhaka Bangladesh',
      img: Cardimg5,
      price: 250000,
    },
    {
      id: 6,
      name: 'Gold set',
      discription: 'Dhaka Bangladesh',
      img: Cardimg6,
      price: 250000,
    },
  ];
  return (
    <div className="pt-10">
      <h1 className="text-5xl font-semibold text-orange-500 items-center text-center">
        Here are our Most Selling{' '}
        <span className="text-6xl text-yellow-300 "> Products</span>
      </h1>
      <div className=" mt-8 mx-4 grid md:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {productData.map((product) => (
          <PopularProduct key={product.id} product={product}></PopularProduct>
        ))}
      </div>
    </div>
  );
};

export default PopularProducts;
