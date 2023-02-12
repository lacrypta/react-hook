interface UseHookReturn {
  test: boolean;
}

export const useHook = (): UseHookReturn => {
  const test = true;
  return { test };
};

export default useHook;
