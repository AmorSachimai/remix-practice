import { Role, type UserObject, type UserRepository } from "@sample/entities";

const PERMISSION = new Set([Role.Administrator, Role.Librarian]);

export class GetUserListService {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(
    actorRole: Role,
    option = { volume: 20, offset: 0 },
  ): Promise<UserObject[] | undefined> {
    if (!PERMISSION.has(actorRole)) {
      throw new Error("権限がありません");
    }

    const { volume, offset } = option;
    const users = await this.userRepository.findAll(volume, offset);
    return users.map((user) => user.freeze());
  }
}
