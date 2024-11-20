import React from 'react';
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';
import Slider from 'react-slick';
import BgImg1 from '../../../assets/Images/girl01.png';
import BgImg2 from '../../../assets/Images/new1.png';
import BgImg3 from '../../../assets/Images/new2.png';

const BgImageList = [
  {
    id: 1,
    img: BgImg1,
    title: 'Upto 15% off on all products',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque repellendus aliquam dolores quo modi sunt cumque facilis optio perferendis, totam doloremque esse ea vitae inventore!',
  },
  {
    id: 2,
    img: BgImg2,
    title: 'Upto 15% off on all products',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque repellendus aliquam dolores quo modi sunt cumque facilis optio perferendis, totam doloremque esse ea vitae inventore!',
  },
  {
    id: 3,
    img: BgImg3,
    title: 'Upto 15% off on all products',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque repellendus aliquam dolores quo modi sunt cumque facilis optio perferendis, totam doloremque esse ea vitae inventore!',
  },
];

const HomeBannar = () => {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: 'ease-in-out',
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  return (
    <div className=" relative overflow-hidden min-h-[550px] sm:min-h-[650px]  flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200">
      {/* Background-Patern */}
      <div className="h-[700px] w-[700px] bg-primary/40 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z-9"></div>
      {/* hero section */}
      <div className="container pb-8 sm:pb-0">
        <Slider {...settings}>
          {BgImageList.map((data) => (
            <div key={data.id}>
              <div className="grid grid-cols-1 sm:grid-cols-2">
                {/* text content section */}
                <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10 ">
                  <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold text-orange-500">
                    {data.title}
                  </h1>
                  <p className="text-sm text-yellow-400">{data.description}</p>
                  <div>
                    {' '}
                    <PrimaryButton></PrimaryButton>{' '}
                  </div>
                </div>
                {/* Image section */}
                <div className="order-2 sm:order-1">
                  <div className="relative z-10">
                    <img
                      src={data.img}
                      alt=""
                      className="w-[300px] h-[300px] sm:h-[450px] sm:scale-125 lg:scale-120 object-contain mx-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default HomeBannar;
