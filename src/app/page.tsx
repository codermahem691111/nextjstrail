import Image from 'next/image'
import Hero from './Components/Hero'
import Section1 from './Components/Section1'
import Head from 'next/head'
import { GlobalStyle } from './Components/HeroEl'
import Cards from './Components/Cards'
import Sec2 from './Component2/Sec2'
import Sec3 from './Component3/Sec3'
import Carousel from './Component4/Carousel'
import V from './Components/Video'
import Navbar from './Component2/Navbar'

export default function Home() {



  return (
         <>
          <Navbar></Navbar>        
         <GlobalStyle/>
         <Hero></Hero>
         <Section1></Section1>
         <Cards></Cards>
         <Sec2></Sec2>
         <Sec3></Sec3>
         <V></V>      
         </>
  )
}
