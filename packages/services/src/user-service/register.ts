import {
  Role,
  type User,
  UserEntity,
  type UserObject,
  type UserRepository,
} from "@sample/entities";

/**
 * ## ユーザーの新規登録
 */
export class RegisterUserService {
  constructor(private userRepo: UserRepository) {}

  async execute(actorRole: Role, input: User): Promise<UserObject> {
    if (!this.canRegister(actorRole, input.role)) {
      throw new Error("この権限を登録できません");
    }

    const exist = await this.userRepo.findByEmail(input.email);
    if (exist) {
      throw new Error("このメールアドレスは既に使われています");
    }

    const entity = UserEntity.create(input);
    await this.userRepo.add(entity);
    return entity.freeze();
  }

  private canRegister(actorRole: Role, targetRole: Role): boolean {
    switch (actorRole) {
      case Role.Anonymous: {
        return targetRole === Role.Member;
      }
      case Role.Librarian: {
        return targetRole === Role.Member || targetRole === Role.Librarian;
      }
      case Role.Administrator: {
        return true;
      }
      default: {
        // 通常会員は登録不可にしておく
        return false;
      }
    }
  }
}
