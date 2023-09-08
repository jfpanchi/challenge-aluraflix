export const getVideos = async () => {
    try {
      const response = await fetch('http://localhost:4000/video');
      if (!response.ok) {
        // Si la respuesta no es exitosa (por ejemplo, un error 404), puedes manejarlo aquí.
        throw new Error(`Error en la solicitud: ${response.status}`);
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      // Manejar cualquier error que ocurra durante la solicitud o el procesamiento de la respuesta
      console.error(error);
      throw error; // Opcionalmente, puedes volver a lanzar el error para que se maneje en un nivel superior si es necesario
    }
};