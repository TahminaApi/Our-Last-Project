import React from 'react';

const PopularProduct = ({ product }) => {
  const { img, discription, name, price } = product;
  return (
    <div className="px-16 pt-20 pb-10 ">
      <div className="card card-side w-[500px] shadow-xl ">
        <img className="w-1/2 h-[250px]" src={img} alt="Movie" />

        <div className="card-body   bg-slate-700 ">
          <div className='pb-6'>
            <h2 className="card-title text-2xl text-orange-500 font-bold ">
              {name}
            </h2>
            <p className="text-yellow-400 pt-1 m-0">{discription}</p>
            <h1 className="text-yellow-400 text-2xl pt-0 ">Price: ${price}</h1>
          </div>
          <div className="card-actions justify-end ">
            <button className="btn btn-outline  text-yellow-400 ">
              Order Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularProduct;
