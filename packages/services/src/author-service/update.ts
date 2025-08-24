import {
  type Author,
  type AuthorObject,
  type AuthorRepository,
  Role,
} from "@sample/entities";

const PERMISSION = new Set([Role.Administrator, Role.Librarian]);

/**
 * ## 著者の更新
 */
export class UpdateAuthorService {
  constructor(private authorRepo: AuthorRepository) {}

  async execute(
    actorRole: Role,
    authorId: string,
    newData: Author,
  ): Promise<AuthorObject> {
    if (!PERMISSION.has(actorRole)) {
      throw new Error("操作権限がありません");
    }

    const author = await this.authorRepo.findById(authorId);
    if (author === undefined) {
      throw new Error("更新対象が見つかりません");
    }

    const updated = author.update(newData);
    await this.authorRepo.update(updated);
    return updated.freeze();
  }
}
