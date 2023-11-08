'use client'
import { createContext } from 'react'
import styled from "styled-components";
import {createGlobalStyle} from 'styled-components'


export  const GlobalStyle= createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@300&family=Teko:wght@300&display=swap');
  body {

    font-family: 'Teko', sans-serif



  }



`;



export const BodyContainer=styled.div` 
  
   overflow-x:hidden;
   overflow-y:hidden;
   
   width:100%;


`;



export const MyText=styled.h3`
   font-size:30px;
   font-family: 'Oswald', sans-serif;
   text-shadodw: 2px 2px #ff0000;     
   color:white;
   text-shadow: 2px 2px 4px #000000;
   padding-top:40px;   
   padding-right:30px;
   padding-left:30px;
   margin-bottom:35px;
   @media (max-width: 640px) and (min-width: 375px) {
    font-size: 17px;
  } 


`;

export const Button1 =styled.button`
  background-color:blue;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 15px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;

&:hover {
  background-color: #2980b9;
}

`;






