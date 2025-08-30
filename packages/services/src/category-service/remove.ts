import { type CategoryRepository, Role } from "@sample/entities";

const PERMISSION = new Set([Role.Administrator, Role.Librarian]);

/**
 * ## カテゴリの削除
 */
export class DeleteCategoryService {
  constructor(private categoryRepo: CategoryRepository) {}

  async execute(actorRole: Role, categoryId: string): Promise<void> {
    if (!PERMISSION.has(actorRole)) {
      throw new Error("操作権限がありません");
    }

    const category = await this.categoryRepo.findById(categoryId);
    if (category === undefined) {
      throw new Error("削除対象が見つかりません");
    }

    await this.categoryRepo.remove(category.id);
  }
}
