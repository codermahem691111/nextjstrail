import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Image from 'next/image';
import Smile from '../assests/Sec3.jpg'
import './sec3.css'
import { FaUserDoctor } from 'react-icons/fa6'
import {FaUserNurse} from 'react-icons/fa6'
import {FaRegClock} from 'react-icons/fa6'
import {GiSelfLove} from 'react-icons/gi'
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
const Sec3 = () => {
    return (<>
          <h2 className='text-2xl text-center text-cyan-950'> Smiles are true testimonials!</h2>
          <div className='flex flex-row justify-center items-center xs:flex-col' id='maincon'>
           <Image className='' id='smile' src={Smile}></Image>
           <div className=' flex flex-col p-10' id='textcontainer2'>
             <h3 className='text-cyan-950 text-xl  '>We can’t thank you enough for sending us such wonderful nurses to take care of dad. Mary was wonderful and took control of the situation. Grace and Paul took great care of him. Words cannot express how thankful we are.</h3>
           
             <div className='flex flex-row mt-5 xs:flex-col' id='icondiv1'>
                <div className='flex flex-row ' id='subicondiv'>
                   <FaUserDoctor className='text-3xl text-blue-900'/>
                   <h3 className='text-xl text-cyan-950 '>Quality Care</h3>
                </div>
                <div className='flex flex-row ml-5 xs:ml-0 xs:mt-5' id='subicondiv'>
                   <FaUserNurse className='text-3xl text-blue-900'/>
                   <h3 className='text-xl text-cyan-950 '>Quality Care</h3>
                </div>
             </div> 
             <div className='flex flex-row mt-5 xs:flex-col' id='icondiv2'>
             <div className='flex flex-row ' id='subicondiv'>
                <FaRegClock className='text-3xl text-blue-900'/>
                <h3 className='text-xl text-cyan-950 '>Quality Care</h3>
             </div>
             <div className='flex flex-row ml-5 xs:ml-0 xs:mt-5' id='subicondiv'>
                <GiSelfLove className='text-3xl text-blue-900'/>
                <h3 className='text-xl text-cyan-950 '>Quality Care</h3>
             </div>
          </div> 
             </div>   
          </div>
        
        </>);
}

Sec3.propTypes = propTypes;
Sec3.defaultProps = defaultProps;
// #endregion

export default Sec3;