import React, { useState } from 'react'

export const GifExpertApp = () => {

   const initialState = ['One Punch', 'Samurai X', 'Dragon Ball'];
   const [categories, setCategories] = useState(initialState)

   const handleAdd = () => {
      // Una forma
      // setCategories([...categories, 'HunterxHunter']);

      // Otra forma. Más recomendado
      setCategories(c => [...c, 'HunterXHunter']);
   }

   return (
      <>
         <h2>GifExpertApp</h2>
         <hr></hr>
         <button onClick={handleAdd}>Añadir</button>
         <ol>
            {
               categories.map(category => {
                  return <li key={category}>{category}</li>
               })
            }
         </ol>
      </>
   )
}


export default GifExpertApp;