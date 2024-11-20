import React from 'react';
import BgImage1 from '../../../assets/Images/gold01.webp';
import BgImage2 from '../../../assets/Images/IMG_6898_grande.webp';
import BgImage3 from '../../../assets/Images/girl02.png';
import Catagori from './Catagori';

const Catagoris = () => {
  const catagoriData = [
    {
      id: 1,
      name: 'Gold Jewellerys',
      discription: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus, praesentium. Enim, vitae. Quia, repudiandae dolorum.",
      img: BgImage1,
    },
    {
      id: 2,
      name: 'Diamond Cut Jewellery',
      discription: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus, praesentium. Enim, vitae. Quia, repudiandae dolorum.",
      img: BgImage2,
    },
    {
      id: 3,
      name: 'Antique Jewellery Set',
      discription: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus, praesentium. Enim, vitae. Quia, repudiandae dolorum.",
      img: BgImage3,
    },
  ];
  return (
    <div className="pt-8">
      <h1 className="text-5xl font-semibold text-orange-500 items-center text-center">
        Here are All The Catagoris
      </h1>
      <h3 className='text-2xl text-yellow-400 items-center text-center pt-5 pb-0'>You can sellect your favourite once</h3>
      <div className=" mt-6 mx-4 grid md:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {catagoriData.map((catagori) => (
          <Catagori key={catagori.id} catagori={catagori}></Catagori>
        ))}
      </div>
    </div>
  );
};

export default Catagoris;
