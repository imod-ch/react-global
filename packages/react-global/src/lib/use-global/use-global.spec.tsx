import { renderHook } from '@testing-library/react';

import useGlobal from './use-global';

describe('useGlobal', () => {
  beforeEach(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (global as any)['fruits'] = ['Apple'];
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (global as any)['name'] = 'useGlobalTest';
  });

  it('should return global variable fruits', () => {
    const { result } = renderHook(() => useGlobal<string[]>('fruits'));

    expect(result.current).toEqual(['Apple']);
  });

  it('should return global variable fruits', () => {
    const { result } = renderHook(() => useGlobal<string>('name'));

    expect(result.current).toEqual('useGlobalTest');
  });
});
