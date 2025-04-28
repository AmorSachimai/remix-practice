export const isNotUndefined = <T>(
  value: T,
): value is Exclude<typeof value, undefined> => {
  return value !== undefined;
};
