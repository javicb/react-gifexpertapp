import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { GifGridItem } from '../../components/GifGrid/GifGridItem';

describe('Pruebas en GifGridItem', () => {
   const title = 'Un título';
   const url = 'https://localhost.algo.jpg';

   test('Debe mostrar el componente correctamente ', () => {
      const wrapper = shallow(<GifGridItem title={title} url={url} />);
      expect(wrapper).toMatchSnapshot();
   })

})
