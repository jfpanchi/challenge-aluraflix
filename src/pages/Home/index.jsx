import React from 'react'
import Banner from '../../components/Shared/Banner'
import Carousel from '../../components/Home/Carousel'

const Home = () => {
  return (
    <>
        <Banner/>
        <Carousel />
        <Carousel category={"Innovacion"}/>
        <Carousel category={"Backend"}/>
    </>
  )
}

export default Home