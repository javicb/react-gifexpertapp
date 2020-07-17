import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategories }) => {

   const initialValue = '';
   const [inputValue, setInputValue] = useState(initialValue);

   const handleInputChange = (e) => {
      setInputValue(e.target.value)
   }

   const handleSubmit = (e) => {
      e.preventDefault();

      if (inputValue.trim().length > 2) {
         setCategories(cats => {

            // Guardar las categorias que hay
            const exist = cats.find(x => x === inputValue);

            // Si existe, devuelte las categorías ya existentes,
            // si no, añade la nueva categoría
            if (exist) {
               return [...cats];
            } else {
               return [inputValue, ...cats];
            }
         });

         setInputValue('');
      }
   }

   return (
      <>
         <form onSubmit={handleSubmit}>
            <input type='text'
               value={inputValue}
               onChange={handleInputChange}></input>
         </form>
      </>
   )
}

AddCategory.propTypes = {
   setCategories: PropTypes.func.isRequired
};