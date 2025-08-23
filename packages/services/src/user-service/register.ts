import {
  type User,
  UserEntity,
  type UserObject,
  type UserRepository,
} from "@sample/entities";

/**
 * ## ユーザーの新規登録
 * ToDo: 誰でも管理者権限が作れちゃうので、そのガードロジックを作る。
 */
export class RegisterUserService {
  constructor(private userRepo: UserRepository) {}

  async execute(input: User): Promise<UserObject> {
    const entity = UserEntity.create(input);
    await this.userRepo.add(entity);
    return entity.freeze();
  }
}
