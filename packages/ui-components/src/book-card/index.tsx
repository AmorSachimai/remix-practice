import type { FunctionComponent } from "react";

export interface BookCardProps {
  title: string;
  imageUrl: string;
  description?: string;
}

export const BookCard: FunctionComponent<BookCardProps> = (book) => {
  return (
    <article>
      <img src={book.imageUrl} alt="" loading="lazy" />
      <h1>{book.title}</h1>
      {book.description && <p>{book.description}</p>}
    </article>
  );
};
