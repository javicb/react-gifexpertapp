import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { GifExpertApp } from '../GifExpertApp';

describe('Pruebas en GifExpertApp', () => {
   test('Debe mostrarse correctamente', () => {
      const wrapper = shallow(<GifExpertApp></GifExpertApp>)
      expect(wrapper).toMatchSnapshot();
   });

   test('Debe mostrar una lista de categorias', () => {
      const categories = ['One Punch', 'Dragon Ball'];
      const wrapper = shallow(<GifExpertApp defaultCategories={categories}></GifExpertApp>);
      expect(wrapper).toMatchSnapshot();
      expect(wrapper.find('GifGrid').length).toBe(categories.length);
   })

})
