import type { FunctionComponent } from "react";
import { layouts, styles } from "./index.css";

export interface BookCardProps {
  title: string;
  imageUrl: string;
  author: string;
  description?: string;
}

export const BookCard: FunctionComponent<BookCardProps> = (book) => {
  return (
    <article className={layouts.container}>
      <img className={styles.image} src={book.imageUrl} alt="" loading="lazy" />
      <div>
        <h1 className={styles.title}>{book.title}</h1>
        <p className={styles.author}>{book.author}</p>
        {book.description && (
          <p className={styles.description}>{book.description}</p>
        )}
      </div>
    </article>
  );
};
