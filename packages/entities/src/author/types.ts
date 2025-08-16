import type { EntityObject } from "../_base/entity";

export type Author = {
  name: string;
  kana: string;
  nickname: string | undefined;
  description: string | undefined;
  imageUrl: string | undefined;
  twitterUrl: string | undefined;
};

export type AuthorObject = EntityObject<Author>;
