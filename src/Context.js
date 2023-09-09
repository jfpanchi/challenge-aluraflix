import { createContext, useEffect, useState } from "react";
import { getVideos } from "./api/getVideos";
import { getCategories } from "./api/getCategories";

export const DataContext = createContext();

export const DataProvider = ({children}) => {
    const [videos, setVideos] = useState([]);
    const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const dataVideos = await getVideos();
      setVideos(dataVideos);

      const dataCategories =  await getCategories();
      setCategories(dataCategories);
    } catch (error) {
      console.error(error);
    }
  };

  const values = {
    videos,
    categories
  }

  return (
    <DataContext.Provider value={values}>
        {children}
    </DataContext.Provider>
  )

}