import type { UserObject, UserRepository } from "@sample/entities";

export class LoginService {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(input: {
    email: string;
    password: string;
  }): Promise<UserObject> {
    const user = await this.userRepository.findByEmail(input.email);
    if (user === undefined) {
      // 「ユーザーかパスワードが間違っています」の表示のほうがセキュリティ的に良い
      throw new Error("ユーザーがありません");
    }

    const isValid = await user.checkPassword(input.password);
    if (!isValid) {
      throw new Error("パスワードが異なります");
    }

    // ログを残すならこの辺でLogRepository等に登録する。
    // repositoryはUseCaseで定義でいいかも()

    return user.freeze();
  }
}
