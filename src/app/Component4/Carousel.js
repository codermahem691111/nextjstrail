"use client"
import React, {useState} from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Testo1 from '../assests/Testo1.jpg'
import Testo2 from '../assests/Testo2.jpg'
import Testo3 from '../assests/Testo3.jpg'
import Testo4 from '../assests/Testo4.jpg'
import Testo5 from '../assests/Testo5.jpg'
import Image from 'next/image';
import './crsl.css'
// #region constants

// #endregion

// #region styled-components

// #endregion

// #region functions

// #endregion

// #region component
const propTypes = {};

const defaultProps = {};

/**
 * 
 */



const Carousel = () => {

  const slides = [
    {
      url: 'https://media.istockphoto.com/id/1485546774/photo/bald-man-smiling-at-camera-standing-with-arms-crossed.webp?b=1&s=170667a&w=0&k=20&c=c2rsC66nJQAjkN6vCkhyB0vLHUiZhJSACMCBVF9HJJs=',
      text: " We can’t thank you enough for sending us such wonderful nurses to take care of dad. Mary was wonderful and took control of the situation. Grace and Paul took great care of him. Words cannot express how thankful we are.",
    },
    {
      url: 'https://media.istockphoto.com/id/1452241716/photo/portrait-of-a-mid-adult-man-outdoors.jpg?s=2048x2048&w=is&k=20&c=doXfJfszNH1XnPLM9Gnapo-EXzgbtmgSAxGBJCHldE8=',
      text: 'Sophia is absolutely wonderful with my mother. I can sleep better at night knowing that mom is in good hands. When I think of a CNA helping someone in their home, it is someone like Sophia.'
    },
    {
      url: 'https://media.istockphoto.com/id/1435745704/photo/portrait-of-smiling-mid-adult-businessman-standing-at-corporate-office.jpg?s=2048x2048&w=is&k=20&c=GEVT5y1Q8Gcf8M8lg2FMzb_WGc_zgm_nb312SG_DUzo=',
      text: 'I just want to let you know what a great job Joey did helping me out the last few days.He was always kind,considerate and very professional. I am verygreatful.'
    },

    {
      url: 'https://media.istockphoto.com/id/1410538853/photo/young-man-in-the-public-park.jpg?s=2048x2048&w=is&k=20&c=xs67spov8BxcsTUh29Y7b82waGp_2VggbxuhKnH0ELQ=',
       text: 'I couldn`t be happier with the excellent service and support I received. This company truly exceeded my expectations!'
    },
    {
      url: 'https://media.istockphoto.com/id/1399565382/photo/young-happy-mixed-race-businessman-standing-with-his-arms-crossed-working-alone-in-an-office.jpg?s=2048x2048&w=is&k=20&c=YmjrR4r6G_4XUliPPK3PPLHrkqKLvSY2D3ZEQewLZ38=',
      text:'The team went above and beyond to meet our needs. Their dedication and professionalism are commendable'
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };



    return (<>
        
          <h3 className='text-2xl text-red-950 text-center'>Testomials</h3> 
          <div className=' h-[400px]  m-auto   relative group justify-center items-center ' id='testi2'>
      <div
        style={{ backgroundImage:`linear-gradient(to bottom left,rgba(17,16,16,0.678),rgba(12,10,22,0.863)),  url(${slides[currentIndex].url})` }}
        className='w-3/6 h-3/6 rounded-2xl bg-center text-center flex  justify-center items-center bg-cover  ml-40 xs:ml-20 duration-500' id='testi'
      >
      
      <h1 className='text-xl font-bold text-blue-700 text-center justify-center items-center xs:text-sm' id='texto'> <span  className='text-3xl text-blue-900'>``</span>   {slides[currentIndex].text} </h1>
      </div>
      {/* Left Arrow */}
      <div className='h-10 w-10 ml-10 '>
        <BsChevronCompactLeft onClick={prevSlide} size={20} />
      </div>
      {/* Right Arrow */}
      <div className='h-10 w-10 mr-10'>
        <BsChevronCompactRight onClick={nextSlide} size={20} />
      </div>
      <div className='flex top-4 justify-center py-2'>
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className='text-2xl cursor-pointer'
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>     
        
        </>);
}

Carousel.propTypes = propTypes;
Carousel.defaultProps = defaultProps;
// #endregion

export default Carousel;