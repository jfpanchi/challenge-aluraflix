import { v4 as uuidv4 } from 'uuid';

export const addCategory = async( name, description, color) => {
    return await fetch('http://localhost:4000/category',{
         method: 'POST',
         headers: {
             "Content-Type": "application/json"
         },
         body: JSON.stringify({ name, description, color, id: uuidv4()})
     })
 }
 