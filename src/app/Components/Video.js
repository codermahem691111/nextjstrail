'use client'
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import YouTube from 'react-youtube';
import './v.css'
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

const VId='4aAn51H0dh4'

const Video = () => {
 
    const playerOptions = {
        height: '200',
        width: '270',
      



      };
    
    

    return (<>
       
        <h3 className='text-2xl text-cyan-950 text-center mb-10'>Discover Homecare at Axzons</h3>        
        <div className='vcnt'>
        <YouTube  id='vbody'    videoId={VId} opts={playerOptions} />
        </div>
        </>);
}

Video.propTypes = propTypes;
Video.defaultProps = defaultProps;
// #endregion

export default Video;