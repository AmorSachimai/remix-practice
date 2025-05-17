import type { FunctionComponent } from "react";
import { title } from "./styles.css";

export interface BookCardProps {
  title: string;
  imageUrl: string;
  description?: string;
}

export const BookCard: FunctionComponent<BookCardProps> = (book) => {
  return (
    <article>
      <img src={book.imageUrl} alt="" loading="lazy" />
      <h1 className={title}>{book.title}</h1>
      {book.description && <p>{book.description}</p>}
    </article>
  );
};
