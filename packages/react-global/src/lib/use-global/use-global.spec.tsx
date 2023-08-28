/* eslint-disable @typescript-eslint/no-explicit-any */
import { renderHook } from '@testing-library/react';
import { act } from 'react-dom/test-utils';

import useGlobal from './use-global';

describe('useGlobal', () => {
  beforeEach(() => {
    (globalThis as any)['fruits'] = ['Apple'];
    (globalThis as any)['name'] = 'useGlobalTest';
  });

  it('should return global variable fruits', () => {
    const { result } = renderHook(() => useGlobal<string[]>('fruits'));

    expect(result.current[0]).toEqual(['Apple']);
  });

  it('should return global variable fruits', () => {
    const { result } = renderHook(() => useGlobal<string>('name'));

    expect(result.current[0]).toEqual('useGlobalTest');
  });

  it('should set global variable', () => {
    const { result } = renderHook(() => useGlobal<string>('setterTest'));

    expect((globalThis as any)['setterTest']).toBe(undefined);

    act(() => {
      result.current[1]('This is a test for setter');
    });

    expect((globalThis as any)['setterTest']).toBe('This is a test for setter');
  });
});
