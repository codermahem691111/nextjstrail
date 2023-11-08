import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Card1 from '../assests/Card1.svg'
import Card8 from '../assests/Card8.svg'
import Card3 from '../assests/Card3.svg'
import Card4 from '../assests/Card4.svg'
import Card5 from '../assests/Card5.svg'
import Card6 from '../assests/Card6.svg'
import Image from 'next/image';
import './card.css'
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
const Cards = () => {
    return (<>
                
      <h3 className='text-2xl text-blue-900 ' id='texth'>Axzons is a Lead CDPAP Provider and Licensed Home Health Care Agency</h3>
          <div className='grid grid-cols-3 gap-3 justify-items-center  items-center xs:grid-cols-1 xs:mr-25 xs:ml-5 text-center' id='row1'>
          <div className="" id='cardno1' data-aos="zoom-in-up" data-aos-duration="1000">
          <h1 className='text-center  mt-10 text-xl'>CDPAP</h1>
          <Image className='text-center' src={Card1} id='cartoon1' ></Image>
          <p>Axzons is the lead CDPAP Agency in Valley Stream NYC</p>
           <button className='text-center grid justify-items-center' id='btn1'>Read more</button>
       </div>
      
       <div className="" id='cardno2' data-aos="zoom-in-up" data-aos-duration="1000">
       <h1 className='text-center mt-10 text-xl'>Homecare</h1>
       <Image className='text-center ' src={Card4} id='cartoon1' ></Image>
       <p>Axzons Homecare is committed to providing high-quality home health care services.</p>
        <button className='text-center grid justify-items-center' id='btn1'>Read more</button>
     </div>
     
     <div className="  " id='cardno1'  data-aos="zoom-in-up" data-aos-duration="1000">
     <h1 className='text-center mt-10 text-xl'>Live_In Care</h1>
     <Image className='text-center' src={Card3} id='cartoon1' ></Image>
     <p>Axzons Homecare offers highly trained, professional Caregivers to assist your loved one around the clock..</p>
      <button className='text-center grid justify-items-center' id='btn1'>Read more</button>
     </div>
               
          </div>
          
          <div className='grid grid-cols-3 gap-3 justify-items-center  items-center mt-10 xs:grid-cols-1 xs:mr-25 xs:ml-5 text-center' id='row1' >
          <div className="" id='cardno1' data-aos="zoom-in-up" data-aos-duration="1000">
          <h1 className='text-center  mt-10 text-xl'>Cardiological Care</h1>
          <Image className='text-center' src={Card1} id='cartoon1' ></Image>
          <p>Axzons is the lead CDPAP Agency in Valley Stream NYC</p>
           <button className='text-center grid justify-items-center' id='btn1'>Read more</button>
       </div>
      
       <div className="" id='cardno2' data-aos="zoom-in-up" data-aos-duration="1000">
       <h1 className='text-center mt-10 text-xl'>Repsite care</h1>
       <Image className='text-center ' src={Card5} id='cartoon1' ></Image>
       <p>Axzons Homecare is committed to providing high-quality home health care services.</p>
        <button className='text-center grid justify-items-center' id='btn1'>Read more</button>
     </div>
     
     <div className="  " id='cardno1'  data-aos="zoom-in-up" data-aos-duration="1000">
     <h1 className='text-center mt-10 text-xl'>Companion care</h1>
     <Image className='text-center' src={Card6} id='cartoon1' ></Image>
     <p>Axzons Homecare offers highly trained, professional Caregivers to assist your loved one around the clock..</p>
      <button className='text-center grid justify-items-center' id='btn1'>Read more</button>
     </div>
               
          </div>      
        </>);
}

Cards.propTypes = propTypes;
Cards.defaultProps = defaultProps;
// #endregion

export default Cards;