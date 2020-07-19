import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory/AddCategory';
import { GifGrid } from './components/GifGrid/GifGrid';

export const GifExpertApp = () => {

   const initialState = ['Samurai X'];
   const [categories, setCategories] = useState(initialState);

   return (
      <>
         <h2>GifExpertApp</h2>
         <AddCategory setCategories={setCategories} />
         <hr></hr>
         <ol>
            {
               categories.map(category => {
                  return (
                     <GifGrid key={category} category={category}></GifGrid>
                  )
               })
            }
         </ol>
      </>
   )
}


export default GifExpertApp;