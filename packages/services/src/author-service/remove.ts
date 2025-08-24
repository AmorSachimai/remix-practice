import { type AuthorRepository, Role } from "@sample/entities";

const PERMISSION = new Set([Role.Administrator, Role.Librarian]);

/**
 * ## 著者の削除
 */
export class DeleteAuthorService {
  constructor(private authorRepo: AuthorRepository) {}

  async execute(actorRole: Role, authorId: string): Promise<void> {
    if (!PERMISSION.has(actorRole)) {
      throw new Error("操作権限がありません");
    }

    const author = await this.authorRepo.findById(authorId);
    if (author === undefined) {
      throw new Error("削除対象が見つかりません");
    }

    await this.authorRepo.remove(authorId);
  }
}
