import React from 'react'
import Banner from '../../components/Shared/Banner'
import VideoCard from '../../components/Home/VideoCard'

const Home = () => {
  return (
    <>
        <Banner/>
        <VideoCard 
            videoUrl={"https://www.youtube.com/watch?v=UuAX5azcvDQ"}
        />
    </>
  )
}

export default Home