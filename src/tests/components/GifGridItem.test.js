import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { GifGridItem } from '../../components/GifGrid/GifGridItem';

describe('Pruebas en GifGridItem', () => {
   test('Debe mostrar el componente correctamente ', () => {
      const wrapper = shallow(<GifGridItem />);
      expect(wrapper).toMatchSnapshot();
   })

})
