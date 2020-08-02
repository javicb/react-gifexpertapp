import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory/AddCategory';
import { GifGrid } from './components/GifGrid/GifGrid';

export const GifExpertApp = ({ defaultCategories = [] }) => {

   const initialState = defaultCategories;
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