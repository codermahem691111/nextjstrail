'use client'
import { createContext } from 'react'
import styled from "styled-components";

export const Body =styled.div`
 
  margin:0;
  padding:0;
  background-color:#ffffff;
  display:flex;
  flex-direction:row;  
  overflow-x:hidden;
  width:100%;
  @media (max-width: 640px) and (min-width: 375px) {
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
  } 
  



`;

 export const Text=styled.h3`
    font-size:20px;
    background-color:#ffffff;
    text-shadow: 2px 2px 4px #0000000;
    padding:30px;
    font-family: 'Oswald', sans-serif;
    
    @media (max-width: 640px) and (min-width: 375px) {
    font-size:17px;
    } 
 
 
 
 
 `;




