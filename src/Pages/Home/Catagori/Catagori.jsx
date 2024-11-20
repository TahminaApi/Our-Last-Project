import React from 'react';

const Catagori = ({ catagori }) => {
  const { name, img, discription } = catagori;
  return (
    <div className='px-24 pt-20 pb-10 '>
      <div className="card w-[400px] shadow-xl  bg-slate-700 ">
        <figure>
          <img  className=" h-[400px]"
            src={img}
            alt="Shoes"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title text-2xl font-bold text-yellow-400">{name}</h2>
          <p className=' text-orange-500'>{discription}</p>
          <div className="card-actions pt-3">
          <button className="btn btn-outline  text-yellow-400 ">Check Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catagori;
