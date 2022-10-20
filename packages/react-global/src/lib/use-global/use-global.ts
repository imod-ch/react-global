export const useGlobal = <T = string>(variable: string): T => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (global as any)[variable];
};

export default useGlobal;
