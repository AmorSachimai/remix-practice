import type { EntityObject } from "../_base";

export type Author = {
  name: string;
  kana: string;
  nickname: string | undefined;
  description: string | undefined;
};

export type AuthorObject = EntityObject<Author>;
