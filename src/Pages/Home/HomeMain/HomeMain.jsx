import React from 'react';
import HomeBannar from '../HomeBannar/HomeBannar';
import Catagoris from '../Catagori/Catagoris';
import PopularProducts from '../../PopularProducts/PopularProducts';
import Reviews from '../../Reviews/Reviews';

const HomeMain = () => {
  return (
    <div>
      <HomeBannar></HomeBannar>
      <Catagoris></Catagoris>
      <PopularProducts></PopularProducts>
      <Reviews></Reviews>
    </div>
  );
};

export default HomeMain;
