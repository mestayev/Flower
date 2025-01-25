import React, { useEffect } from 'react';
import One from './1 page/One';
import Second from './1 page/Second';
import Banner from './1 page/Banner';
import Vitrina from './1 page/Vitrina';
import News from './1 page/News';
import Info from './1 page/Info';
import Discount from './1 page/Discount';
import Top from './1 page/Top';

const Main = () => {
  useEffect(() => {
    // Adding a delay of 1 second (1000ms) before scrolling to the top
    const timer = setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 1000); // Adjust the time as needed

    return () => clearTimeout(timer); // Clean up the timer on component unmount
  }, []);

  return (
    <div>
      <One />
      <Second />
      <Banner />
      <Vitrina />
      <News />
      <Info />
      <Discount />
      <Top />
    </div>
  );
};

export default Main;
