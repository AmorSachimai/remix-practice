export const isISBN = (isbn: string): boolean => {
  const regex = /^[0-9]{10,13}$/;
  return regex.test(isbn);
};
