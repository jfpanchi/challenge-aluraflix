import { v4 as uuidv4 } from 'uuid';

export const addCategory = async( name, descripcion, color) => {
    return await fetch('http://localhost:4000/category',{
         method: 'POST',
         headers: {
             "Content-Type": "application/json"
         },
         body: JSON.stringify({ name, descripcion, color, id: uuidv4()})
     })
 }
 