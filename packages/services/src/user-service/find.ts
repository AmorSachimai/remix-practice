import { Role, type UserObject, type UserRepository } from "@sample/entities";

const PERMISSION = new Set([Role.Administrator, Role.Librarian]);

export class GetUserService {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(
    actorRole: Role,
    userId: string,
  ): Promise<UserObject | undefined> {
    if (!PERMISSION.has(actorRole)) {
      throw new Error("権限がありません");
    }

    const user = await this.userRepository.findById(userId);
    return user?.freeze();
  }
}
