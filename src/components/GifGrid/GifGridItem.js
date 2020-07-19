import React from 'react'

export const GifGridItem = ({ title, url }) => {

   return (
      <>
         <img src={url} alt={title} />
         <p>{title}</p>
      </>
   )
}
