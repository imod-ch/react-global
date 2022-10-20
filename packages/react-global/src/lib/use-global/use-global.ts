import { useCallback } from 'react';

export const useGlobal = <T = string>(
  variable: string
): [T, (value: T) => void] => {
  const setValue = useCallback(
    (value: T) => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (global as any)[variable] = value;
    },
    [variable]
  );

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return [(global as any)[variable], setValue];
};

export default useGlobal;
