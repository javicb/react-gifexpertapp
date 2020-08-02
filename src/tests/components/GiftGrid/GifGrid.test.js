import React from 'react';
import '@testing-library/jest-dom';
import { useFetchGifs } from '../../../hooks/useFetchGifs';
const { shallow } = require("enzyme")
const { GifGrid } = require("../../../components/GifGrid/GifGrid")
jest.mock('../../../hooks/useFetchGifs');

describe('Pruebas en el GifGrid', () => {
   const category = 'One Punch';

   test('Debe mostrarse correctamente ', () => {
      useFetchGifs.mockReturnValue({
         data: [],
         loading: true
      });

      const wrapper = shallow(<GifGrid category={category}></GifGrid>);
      expect(wrapper).toMatchSnapshot();
   });

   test('Debe mostrar items cuando se cargan imágenes useFetchGifs', () => {
      const gifs = [{
         id: 'ABC',
         url: 'https://localhost/cualquergif',
         title: 'Cualquer cosa'
      }];

      useFetchGifs.mockReturnValue({
         data: gifs,
         loading: false
      });

      const wrapper = shallow(<GifGrid category={category}></GifGrid>);
      expect(wrapper).toMatchSnapshot();
   });
})
