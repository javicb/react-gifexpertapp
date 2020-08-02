import React from 'react';
import '@testing-library/jest-dom';
import { useFetchGifs } from '../../hooks/useFetchGifs';
import { renderHook } from '@testing-library/react-hooks';

describe('Pruebas con el hook useFetchGifs', () => {
   test('Debe devoler el estado inicial', async () => {
      const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('One Punch'));
      const { data, loading } = result.current;
      await waitForNextUpdate();

      expect(data).toEqual([]);
      expect(loading).toBe(true);
   });

   test('Debe debolber un array de img y el loadign en false', async () => {
      const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('One Punch'));
      await waitForNextUpdate();

      const { data, loading } = result.current;

      expect(data.length).toEqual(10);
      expect(loading).toBe(false);
   })


})
