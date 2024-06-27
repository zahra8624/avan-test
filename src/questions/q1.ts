export const convertObjToArray = (obj: Record<string, unknown>) => {
  return Object.values(obj).map((val) => val);
};

//with Set
export const convertObjToArrayWithoutRepeatedValues = (
  obj: Record<string, unknown>
) => {
  return [...new Set(Object.values(obj).map((val) => val))];
};

//with looping through values and create array
export const convertObjToArrayWithoutRepeatedValues2 = (
  obj: Record<string, unknown>
) => {
  const result: unknown[] = [];
  Object.values(obj).forEach((val) => {
    if (!result.includes(val)) {
      result.push(val);
    }
  });
  return result;
};
