import { v4 as uuidv4 } from "uuid";
import { EmailEntity, Entity, type Repository } from "../_base";
import { Role } from "../constant";
import { PasswordEntity } from "./password";
import type { User } from "./types";

export interface UserRepository extends Repository<UserEntity> {
  findByEmail(email: string): Promise<UserEntity | undefined>;
  findByName(name: string): Promise<UserEntity | undefined>;
}

/**
 * UserEntityは、ユーザー情報を管理するエンティティです。
 * ユーザーの作成、パスワードのハッシュ化、検証などの機能を提供します。
 */
export class UserEntity extends Entity<User> {
  /**
   * ### Userの新規作成時に利用
   * @param inputUser ユーザー作成に必要な情報を含むオブジェクト
   * @returns 新規ユーザーエンティティ
   * @throws ユーザー情報の検証に失敗した場合はエラーをスローします
   */
  static create(user: User): UserEntity {
    const validUser = UserEntity.validation(user);

    // パスワードはハッシュ化する
    const passwordHash = PasswordEntity.passwordHash(validUser.password);
    const id = uuidv4();

    return new UserEntity({
      id,
      props: {
        ...validUser,
        password: passwordHash,
      },
    });
  }

  /**
   * ### パスワードを検証します。
   * 備考: パスワードのハッシュ化についてはセキュリティの要素が強いのでRepositoryに分けてもいいかも。
   * @param password ユーザーが入力したパスワード
   * @returns パスワードが一致する場合はtrue、一致しない場合はfalse
   */
  async checkPassword(password: string): Promise<boolean> {
    return await PasswordEntity.checkPassword(password, this.props.password);
  }

  /**
   * ### ユーザー情報の検証を行います。
   * @param user ユーザーが入力したユーザー情報
   * @returns 検証済みのユーザー情報
   * @throws エラーが発生した場合は例外をスローします
   */
  static validation(user: User): User {
    const name = user.name.normalize("NFKC").trim();
    if (name === "") {
      throw new Error("ユーザー名は必須です");
    }
    const password = PasswordEntity.validation(user.password);
    const email = EmailEntity.validation(user.email);
    return {
      ...user,
      name,
      email,
      password,
    };
  }

  /** 管理者チェック */
  isAdministrator(): boolean {
    return this.props.role === Role.Administrator;
  }

  /** 司書チェック */
  isLibrarian(): boolean {
    return this.props.role === Role.Librarian;
  }

  /** 通常会員チェック */
  isMember(): boolean {
    return this.props.role === Role.Member;
  }

  /**
   * 更新権限があるかどうかを判定
   * @param target 更新対象ユーザー
   */
  canUpdate(target: UserEntity): boolean {
    // 管理者ならすべてのユーザーを更新可能
    if (this.isAdministrator()) {
      return true;
    }

    // 司書なら管理者以外を更新可能
    if (this.isLibrarian()) {
      return target.isMember() || target.isLibrarian();
    }

    // 会員なら自分のみ更新可能
    if (this.isMember()) {
      return this.id === target.id;
    }

    // ※Anonymous は更新不可
    return false;
  }

  /**
   * 権限・パスワード以外を更新
   * @param newProps
   */
  update(newProps: Partial<Omit<User, "role" | "password">>): this {
    this.updateProps = UserEntity.validation({
      ...this.props,
      ...newProps,
    });

    return this;
  }
}
