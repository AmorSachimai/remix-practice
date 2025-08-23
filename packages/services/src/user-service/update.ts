import type { User, UserObject, UserRepository } from "@sample/entities";

/**
 * ## ユーザーの更新
 * ToDo: テスト作る
 */
export class UpdateUserService {
  constructor(private userRepo: UserRepository) {}

  /**
   * @param actorId ログインユーザーID
   * @param targetId 更新対象ユーザーID
   * @param newData 更新データ
   */
  async execute(
    actorId: string,
    targetId: string,
    newData: Partial<Omit<User, "role" | "password">>,
  ): Promise<UserObject> {
    const actor = await this.userRepo.findById(actorId);
    if (actor === undefined) {
      throw new Error("ログインユーザーが不明です");
    }

    const target = await this.userRepo.findById(targetId);
    if (target === undefined) {
      throw new Error("更新対象のユーザーが存在しません");
    }

    if (!actor.canUpdate(target)) {
      throw new Error("更新権限がありません");
    }

    const updated = target.update(newData);
    await this.userRepo.update(updated);

    return updated.freeze();
  }
}
