export const createMyFunction = () => {
  const memoization: Map<string, unknown> = new Map();
  const func = (callback: any) => {
    const callbackKey = callback + "";
    if (memoization.has(callbackKey)) {
      //from cache
      return memoization.get(callbackKey);
    }
    //from callback
    const result = callback();
    memoization.set(callbackKey, result);
    return result;
  };

  return func;
};
