import React from 'react';
import Hello from '../components/Home/Hello';
import OngoingVisas from '../components/Home/OngoingVisas';
import MostCommonVisas from '../components/Home/MostCommonVisas';
import FreshBlogs from '../components/Home/FreshBlogs';
import Testimonials from '../components/Home/Testimonials';
import WhySMV from '../components/Home/WhySMV';

const Home = () => {
  return (
    <div className="flex items-top w-full bg-blue-50">
      <div className="w-full bg-white rounded shadow-lg md:max-w-sm md:mx-auto md:mt-5 md:mb-5">
        <div>
          <img src="/assets/images/Home-top.png" alt="home-header" className="w-full"/>
        </div>
        <Hello/>
        <div>
          <OngoingVisas/>
        </div>
        <div>
          <MostCommonVisas/>
        </div>
        <div>
          <FreshBlogs/>
        </div>
        <div>
          <Testimonials/>
        </div>
        <div>
          <WhySMV/>
        </div>
      </div>
    </div>
  );
};
export default Home;
