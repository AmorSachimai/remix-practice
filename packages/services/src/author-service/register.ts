import {
  type Author,
  AuthorEntity,
  type AuthorObject,
  type AuthorRepository,
  Role,
} from "@sample/entities";

const PERMISSION = new Set([Role.Administrator, Role.Librarian]);

/**
 * ## 著者の新規登録
 */
export class RegisterAuthorService {
  constructor(private authorRepo: AuthorRepository) {}

  async execute(actorRole: Role, author: Author): Promise<AuthorObject> {
    if (!PERMISSION.has(actorRole)) {
      throw new Error("操作権限がありません");
    }

    const entity = AuthorEntity.create(author);
    await this.authorRepo.add(entity);
    return entity.freeze();
  }
}
