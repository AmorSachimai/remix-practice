import {
  type Category,
  CategoryEntity,
  type CategoryObject,
  type CategoryRepository,
  Role,
} from "@sample/entities";

const PERMISSION = new Set([Role.Administrator, Role.Librarian]);

/**
 * ## カテゴリの新規登録
 */
export class RegisterCategoryService {
  constructor(private categoryRepo: CategoryRepository) {}

  async execute(actorRole: Role, category: Category): Promise<CategoryObject> {
    if (!PERMISSION.has(actorRole)) {
      throw new Error("操作権限がありません");
    }

    const entity = CategoryEntity.create(category);
    await this.categoryRepo.add(entity);
    return entity.freeze();
  }
}
