export const getObjectKeys = <T extends Readonly<{ [key: string]: unknown }>>(
  obj: T,
): ReadonlyArray<keyof T> => {
  return Object.freeze(Object.keys(obj));
};
