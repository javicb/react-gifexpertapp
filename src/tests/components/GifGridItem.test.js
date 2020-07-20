import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { GifGridItem } from '../../components/GifGrid/GifGridItem';

describe('Pruebas en GifGridItem', () => {
   const title = 'Un título';
   const url = 'https://localhost.algo.jpg';
   const wrapper = shallow(<GifGridItem title={title} url={url} />);

   test('Debe mostrar el componente correctamente ', () => {
      expect(wrapper).toMatchSnapshot();
   });

   test('Debe tener un párrafo con el title', () => {
      const p = wrapper.find('p');
      expect(p.text().trim()).toBe(title);
   });

   test('Debe tener la imágen igual al url y alt de los props', () => {
      const img = wrapper.find('img');
      expect(img.prop('src')).toBe(url);
      expect(img.prop('alt')).toBe(title);
   });

   test('Debe tener animate__fadeIn', () => {
      const div = wrapper.find('div');
      expect(div.prop('className')).toContain('animate__fadeIn');
      expect(div.hasClass('animate__fadeIn')).toBeTruthy();
   });


})
