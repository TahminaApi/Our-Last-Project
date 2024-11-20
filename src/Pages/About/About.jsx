import React from 'react';

const About = () => {
  return (
    <div className='p-24'> 
        <div className="about-container text-center text-xl gap-10">
      <h1 className='text-5xl text-yellow-400 font-bold p-10'>About Us</h1>
      <p className='text-2xl text-orange-500 m-5'>
        Welcome to our website! We are a passionate team dedicated to creating
        innovative solutions. Our goal is to provide high-quality services that
        help businesses thrive in today's digital world.
      </p>
      <h2 className='text-5xl text-yellow-400 font-bold p-10' >Our Mission</h2>
      <p className='text-2xl text-orange-500 m-5'>
        Our mission is to deliver cutting-edge products and services that
        empower businesses to grow. We value creativity, collaboration, and
        excellence.
      </p>
      <h2 className='text-3xl text-yellow-400 font-bold p-16'>Meet the Team</h2>
      <ul>
        <li className='text-xl text-yellow-400'>
          <strong className='text-4xl text-orange-500'>Atikul Islam</strong> - CEO & Founder
        </li>
        <li className='text-xl text-yellow-400'>
          <strong className='text-3xl text-orange-500'>Jane Smith</strong> - CTO
        </li>
        <li className='text-xl text-yellow-400'>
          <strong className='text-3xl text-orange-500'>Mary Johnson</strong> - Lead Developer
        </li>
      </ul>
      <h2 className='text-5xl text-yellow-400 font-bold p-10'>Contact Us</h2>
      <p className='text-2xl text-orange-500 m-5' >If you have any questions, feel free to reach out to us!</p>
      <p className='text-2xl text-orange-500 m-5' >Email: contact@example.com</p>
    </div>
    </div>
  );
};

export default About;
