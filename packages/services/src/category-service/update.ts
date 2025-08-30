import {
  type Category,
  type CategoryObject,
  type CategoryRepository,
  Role,
} from "@sample/entities";

const PERMISSION = new Set([Role.Administrator, Role.Librarian]);

/**
 * ## カテゴリの更新
 */
export class UpdateCategoryService {
  constructor(private categoryRepo: CategoryRepository) {}

  async execute(
    actorRole: Role,
    categoryId: string,
    newData: Category,
  ): Promise<CategoryObject> {
    if (!PERMISSION.has(actorRole)) {
      throw new Error("操作権限がありません");
    }

    const author = await this.categoryRepo.findById(categoryId);
    if (author === undefined) {
      throw new Error("更新対象が見つかりません");
    }

    author.update(newData);
    await this.categoryRepo.update(author);
    return author.freeze();
  }
}
