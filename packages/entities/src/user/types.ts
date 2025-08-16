import type { EntityObject } from "../_base";

// 後で実装
export enum Role {
  admin = 0,
  moderator = 1,
  guest = 2,
}

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
