import type { EntityObject } from "../_base";
import type { Role } from "../constant";

export type User = {
  name: string;
  email: string;
  passwordHash: string;
  role: Exclude<Role, Role.Anonymous>;
};
export type UserObject = EntityObject<User>;

/**
 * 新規作成時にユーザーが入力する内容
 */
export type InputUser = {
  name: string;
  email: string;
  password: string;
  role: Exclude<Role, Role.Anonymous>;
};
