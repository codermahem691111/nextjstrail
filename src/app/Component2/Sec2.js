import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import './sec2.css'
import Image from 'next/image';
import Mix from '../assests/Mix.png'
import {FaClover} from 'react-icons/fa6'
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
const Sec2 = () => {
    return (<>
        
        <h3 className='text-2xl text-blue-900 mt-10 text-center'>Experts Care Patient</h3>
         <div className='flex flex-row justify-center items-center xs:flex-col' id='maincont'>
             <div className='flex flex-col p-10 ' id='text-cont'>
                <h3 className='text-2xl text-cyan-900 '>Axzons home health care is managed by physicians and nurses</h3> 
                <div className='flex flex-row ml-10'>
                  <FaClover className='text-blue-700 text-3xl'/>
                  <h3 className='text-2xl text-cyan-950'>Medication reminders</h3>
                </div> 
                <div className='flex flex-row ml-10'>
                <FaClover className='text-blue-700 text-3xl'/>
                <h3 className='text-2xl text-cyan-950'>Quality Medical Home Care</h3>
              </div> 
              <div className='flex flex-row ml-10'>
              <FaClover className='text-blue-700 text-3xl'/>
              <h3 className='text-2xl text-cyan-950'>Appointment assistance</h3>
            </div> 
            <div className='flex flex-row ml-10'>
            <FaClover className='text-blue-700 text-3xl'/>
            <h3 className='text-2xl text-cyan-950'>Safety supervision</h3>
          </div> 
                </div>
             <Image className='' id='imgmix' src={Mix}></Image> 
         </div>  
        </>);
}

Sec2.propTypes = propTypes;
Sec2.defaultProps = defaultProps;
// #endregion

export default Sec2;