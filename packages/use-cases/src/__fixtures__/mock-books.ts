import { BookEntity } from "@core/entities";

export const mockBooks = Array<number>(20).map((value) => {
  return new BookEntity({
    id: `mock-book-${value}`,
    props: {
      isbn: `40887429${value}`,
      title: `Test Book ${value}`,
      description: "Test Description",
      authors: [],
      categories: [],
    },
  });
});

export const mockBookEntity = new BookEntity({
  id: "1",
  props: {
    isbn: "4-08-874291-5",
    title: "魔人探偵脳噛ネウロ",
    description: "Test Description",
    authors: [],
    categories: [],
  },
});
