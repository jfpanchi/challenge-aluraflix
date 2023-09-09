export const getVideos = async () => {
    try {
      const response = await fetch('http://localhost:4000/video');
      if (!response.ok) {
        throw new Error(`Error en la solicitud: ${response.status}`);
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      
      console.error(error);
      throw error; 
    }
};