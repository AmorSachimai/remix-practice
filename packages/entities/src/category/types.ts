import type { EntityObject } from "../_base";

export type Category = {
  name: string;
  label: string | undefined;
};

export type CategoryObject = EntityObject<Category>;
