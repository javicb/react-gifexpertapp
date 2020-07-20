import '@testing-library/jest-dom';
import React from 'react';
import { shallow } from 'enzyme';
import { AddCategory } from '../../../components/AddCategory/AddCategory';

describe('Pruebas con el AddCategory', () => {

   const setCategories = jest.fn();
   let wrapper = shallow(<AddCategory setCategories={setCategories} />); // si eliminamos esta asignación perdemos intellisense

   beforeEach(() => {
      jest.clearAllMocks();
      wrapper = shallow(<AddCategory setCategories={setCategories} />);
   })

   test('Debe mostrarse correctamente ', () => {
      expect(wrapper).toMatchSnapshot();
   });

   test('Debe cambiar la caja de texto', () => {
      const input = wrapper.find('input');
      const value = 'Hola mundo';
      input.simulate('change', { target: { value } });
   });

   test('No debe llamar la infomración con submit', () => {
      wrapper.find('form').simulate('submit', { preventDefault: () => { } });
      expect(setCategories).not.toHaveBeenCalled();
   });

   test('Debe llamar al setCategories y limpiar la caja de texto', () => {
      const value = 'Hola mundo';
      wrapper.find('input').simulate('change', { target: { value } });
      wrapper.find('form').simulate('submit', { preventDefault() { } });

      expect(setCategories).toHaveBeenCalled();
      expect(wrapper.find('input').prop('value')).toBe('');
   });


})
