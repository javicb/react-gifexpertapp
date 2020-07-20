import '@testing-library/jest-dom';
import React from 'react';
import { shallow } from 'enzyme';
import { AddCategory } from '../../../components/AddCategory/AddCategory';

describe('Pruebas con el AddCategory', () => {

   const setCategories = () => { };

   test('Debe mostrarse correctamente ', () => {
      const wrapper = shallow(<AddCategory setCategories={setCategories} />);
      expect(wrapper).toMatchSnapshot();
   });

})
