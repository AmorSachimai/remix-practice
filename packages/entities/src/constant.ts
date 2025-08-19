/**
 * ### 権限の種類
 * ユーザーと紐づき、各Entityのパーミッションを制御する
 */
export enum Role {
  /** 未ログイン */
  Anonymous = 0,
  /** 通常会員 */
  Member = 1,
  /** 司書 */
  Librarian = 2,
  /** システム管理者 */
  Administrator = 3,
}
