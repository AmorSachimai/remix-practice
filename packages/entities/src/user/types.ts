import type { EntityObject } from "../_base";

export type User = {
  name: string;
  email: string;
  passwordHash: string;
};
export type UserObject = EntityObject<User>;

/**
 * 新規作成時にユーザーが入力する内容
 */
export type InputUser = {
  name: string;
  email: string;
  password: string;
};
