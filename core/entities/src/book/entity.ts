import { v4 as uuidv4 } from "uuid";
import { BaseEntity } from "../base-entity";
import type { Book } from "./types";

// ToDo: 作成しながら拡張していく。
export class BookEntity extends BaseEntity<Book> {
  /**
   * Entityの新規作成時に利用
   */
  static create(props: Book): BookEntity {
    const id = uuidv4();
    return new BookEntity({ id, props });
  }
}
