import type { UserRepository } from "@sample/entities";

/**
 * ## ユーザーの削除(退会)
 */
export class DeleteUserService {
  constructor(private userRepo: UserRepository) {}

  /**
   * @param actorId ログインユーザーID
   * @param targetId 更新対象ユーザーID
   */
  async execute(actorId: string, targetId: string): Promise<void> {
    const actor = await this.userRepo.findById(actorId);
    if (actor === undefined) {
      throw new Error("ログインユーザーが不明です");
    }

    const target = await this.userRepo.findById(targetId);
    if (target === undefined) {
      throw new Error("削除対象のユーザーが存在しません");
    }

    // 更新権限持ってたら削除できるってことでOKにする
    if (!actor.canUpdate(target)) {
      throw new Error("削除権限がありません");
    }

    await this.userRepo.remove(target.id);
  }
}
