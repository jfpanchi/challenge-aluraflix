import React, { useEffect, useState } from 'react'
import Banner from '../../components/Shared/Banner'
import Carousel from '../../components/Home/Carousel'
import { getVideos } from '../../api/getVideos'

const Home = () => {
  
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getVideos();
        setVideos(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
        <Banner/>
        <Carousel videos={videos} />
        <Carousel category={"Innovacion"} videos={videos}/>
        <Carousel category={"Backend"} videos={videos}/>
    </>
  )
}

export default Home