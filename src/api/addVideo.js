import { v4 as uuidv4 } from 'uuid';

export const addVideo = async( title, link, category, descripcion) => {
    return await fetch('http://localhost:4000/video',{
         method: 'POST',
         headers: {
             "Content-Type": "application/json"
         },
         body: JSON.stringify({ title, link, category, descripcion, id: uuidv4()})
     })
 }
 