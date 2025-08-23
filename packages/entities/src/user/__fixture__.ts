import { Role } from "../constant";
import { UserEntity } from "./main";
import type { User } from "./types";

const BASE_USER_PROPS = {
  name: "base",
  email: "sample@sample.com",
  /** ハッシュ前パスワード: samplePassword */
  password: "$2b$10$PoF18kg08a70plLfFGsWpe8JgZER6Cim/fJOOL.pdMzbPCj24nJr2",
  role: Role.Member,
} as const satisfies User;

/**
 * ### テスト用データ: 通常会員の初期化用
 * ハッシュ前パスワード: samplePassword
 */
export const TEST_MEMBER_PROPS = {
  ...BASE_USER_PROPS,
  name: "通常会員",
} as const satisfies User;
/**
 * ### テスト用データ: 通常会員のEntity
 */
export const TEST_MEMBER = new UserEntity({
  id: "mock-member-entity-1",
  props: TEST_MEMBER_PROPS,
});

/**
 * ### テスト用データ: 司書の初期化用
 * ハッシュ前パスワード: samplePassword
 */
export const TEST_LIBRARIAN_PROPS = {
  ...BASE_USER_PROPS,
  name: "司書",
  role: Role.Librarian,
} as const satisfies User;
/**
 * ### テスト用データ: 司書のEntity
 */
export const TEST_LIBRARIAN = new UserEntity({
  id: "mock-librarian-entity-1",
  props: TEST_LIBRARIAN_PROPS,
});

/**
 * ### テスト用データ: 管理者の初期化用
 * ハッシュ前パスワード: samplePassword
 */
export const TEST_ADMINISTRATOR_PROPS = {
  ...BASE_USER_PROPS,
  name: "システム管理者",
  role: Role.Administrator,
} as const satisfies User;
/**
 * ### テスト用データ: 管理者のEntity
 */
export const TEST_ADMINISTRATOR = new UserEntity({
  id: "mock-administrator-entity-1",
  props: TEST_ADMINISTRATOR_PROPS,
});
