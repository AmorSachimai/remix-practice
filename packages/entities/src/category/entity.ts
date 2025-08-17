import { v4 as uuidv4 } from "uuid";
import { Entity, type Repository } from "../_base";
import type { Category } from "./types";

export class CategoryEntity extends Entity<Category> {
  static create(category: Category): CategoryEntity {
    const id = uuidv4();
    const validCategory = CategoryEntity.validation(category);
    return new CategoryEntity({ id, props: validCategory });
  }

  static validation(category: Category): Category {
    const name = category.name.normalize("NFKC").trim();
    if (name === "") {
      throw new Error("Category name is required");
    }

    const label = category?.label?.normalize("NFKC").trim();
    return {
      name,
      label,
    };
  }

  update(category: Category) {
    this.updateProps = CategoryEntity.validation(category);
  }
}

export interface CategoryRepository extends Repository<Category> {}
