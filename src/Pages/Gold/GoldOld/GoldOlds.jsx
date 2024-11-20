// import React from 'react';
// import Slider from 'react-slick';
// import GoldLatest from '../GoldLatest/GoldLatest';


// const GoldOlds = () => {
//   const goldOldData = [
//     {
//       id: 1,
//       img: gold1,
//       name: 'Gold Necless',
//       price: 1000,
//     },
//     {
//       id: 2,
//       img: gold2,
//       name: 'Gold Necless',
//       price: 1000,
//     },
//     {
//       id: 3,
//       img:gold3,
//       name: 'Diamond Ring',
//       price: 1000,
//     },
//     {
//       id: 4,
//       img: gold4,
//       name: 'Diamond Cut set',
//       price: 1000,
//     },
//     {
//       id: 5,
//       img: gold5,
//       name: 'Gold plated set',
//       price: 1000,
//     },
//     {
//       id: 6,
//       img: gold6,
//       name: 'Gold set',
//       price: 1000,
//     },
//   ];
//   var settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//   };
//   return (
//     <div className="pt-20">
//       <h1 className="font-bold text-4xl text-center text-yellow-400">
//         Here are the
//         <span className="text-6xl"> Latest Collections</span>
//       </h1>
//       <p className="text-center text-orange-500">
//         Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ad quos
//         eius maiores provident consequatur, nam quam obcaecati saepe reiciendis.
//       </p>

//       <Slider {...settings}>
//         {goldOldData.map((gold) => (
//           <GoldLatest key={gold.id} gold={gold}></GoldLatest>
//         ))}
//       </Slider>
//     </div>
//   );
// };

// export default GoldOlds;
