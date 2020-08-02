import React from 'react';
import '@testing-library/jest-dom';
import { useFetchGifs } from '../../hooks/useFetchGifs';
import { renderHook } from '@testing-library/react-hooks';

describe('Pruebas con el hook useFetchGifs', () => {
   test('Debe devoler el estado inicial', () => {
      const { result } = renderHook(() => useFetchGifs('One Punch'));
      const { data, loading } = result.current;

      expect(data).toEqual([]);
      expect(loading).toBe(true);
   })

})
