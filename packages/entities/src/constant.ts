/**
 * Entityで用いられる共通の定数を定義する
 */

/**
 * ### 権限の種類
 * ユーザーと紐づき、各Entityのパーミッションを制御する
 */
export enum Role {
  Administrator = 0,
  Librarian = 1,
  Member = 2,
}
