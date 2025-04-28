import { BookEntity } from "@core/entities";

export const mockBooks = Array<number>(20).map((value) => {
  return new BookEntity({
    id: `mock-book-${value}`,
    props: {
      title: `Test Book ${value}`,
      description: "Test Description",
      author: ["Test Author"],
      category: ["Test Category"],
    },
  });
});

export const mockBookEntity = new BookEntity({
  id: "1",
  props: {
    title: "Test Book",
    description: "Test Description",
    author: ["Test Author"],
    category: ["Test Category"],
  },
});
