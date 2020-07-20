import '@testing-library/jest-dom';
import React from 'react';
import { shallow } from 'enzyme';
import { AddCategory } from '../../../components/AddCategory/AddCategory';

describe('Pruebas con el AddCategory', () => {

   const setCategories = () => { };
   const wrapper = shallow(<AddCategory setCategories={setCategories} />);

   test('Debe mostrarse correctamente ', () => {
      expect(wrapper).toMatchSnapshot();
   });

   test('Debe cambiar la caja de texto', () => {
      const input = wrapper.find('input');
      const value = 'Hola mundo';
      input.simulate('change', { target: { value } });
   })


})
