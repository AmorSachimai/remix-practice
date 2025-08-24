import { Role, type UserRepository } from "@sample/entities";
import {
  TEST_ADMINISTRATOR_PROPS,
  TEST_LIBRARIAN_PROPS,
  TEST_MEMBER,
  TEST_MEMBER_PROPS,
} from "@sample/entities/test-data";
import { afterEach, beforeEach, describe, expect, test, vi } from "vitest";
import { RegisterUserService } from "./register";

const MOCK_REPO = {
  add: vi.fn<UserRepository["add"]>(),
  findById: vi.fn<UserRepository["findById"]>(),
  update: vi.fn<UserRepository["update"]>(),
  remove: vi.fn<UserRepository["remove"]>(),
  findAll: vi.fn<UserRepository["findAll"]>(),
  findByEmail: vi.fn<UserRepository["findByEmail"]>(),
  findByName: vi.fn<UserRepository["findByName"]>(),
} satisfies UserRepository;

const service = new RegisterUserService(MOCK_REPO);

afterEach(() => {
  vi.resetAllMocks();
});
describe("actorの権限別作成結果", () => {
  beforeEach(() => {
    // このテストでは重複登録はない想定
    MOCK_REPO.findByEmail.mockResolvedValue(undefined);
  });

  describe("actor: 管理者", () => {
    const ACTOR_ROLE = Role.Administrator;

    test("管理者の作成: OK", async () => {
      const promise = service.execute(ACTOR_ROLE, TEST_ADMINISTRATOR_PROPS);
      await expect(promise).resolves.toBeDefined();
      expect(MOCK_REPO.add).toBeCalled();
    });
    test("司書の作成: OK", async () => {
      const promise = service.execute(ACTOR_ROLE, TEST_LIBRARIAN_PROPS);
      await expect(promise).resolves.toBeDefined();
      expect(MOCK_REPO.add).toBeCalled();
    });
    test("会員の作成: OK", async () => {
      const promise = service.execute(ACTOR_ROLE, TEST_MEMBER_PROPS);
      await expect(promise).resolves.toBeDefined();
      expect(MOCK_REPO.add).toBeCalled();
    });
  });

  describe("actor: 司書", () => {
    const ACTOR_ROLE = Role.Librarian;

    test("管理者の作成: NG", async () => {
      const promise = service.execute(ACTOR_ROLE, TEST_ADMINISTRATOR_PROPS);
      await expect(promise).rejects.toThrowError("この権限を登録できません");
      expect(MOCK_REPO.add).not.toBeCalled();
    });
    test("司書の作成: OK", async () => {
      const promise = service.execute(ACTOR_ROLE, TEST_LIBRARIAN_PROPS);
      await expect(promise).resolves.toBeDefined();
      expect(MOCK_REPO.add).toBeCalled();
    });
    test("会員の作成: OK", async () => {
      const promise = service.execute(ACTOR_ROLE, TEST_MEMBER_PROPS);
      await expect(promise).resolves.toBeDefined();
      expect(MOCK_REPO.add).toBeCalled();
    });
  });

  describe("actor: 会員", () => {
    const ACTOR_ROLE = Role.Member;

    test("管理者の作成: NG", async () => {
      const promise = service.execute(ACTOR_ROLE, TEST_ADMINISTRATOR_PROPS);
      await expect(promise).rejects.toThrowError("この権限を登録できません");
      expect(MOCK_REPO.add).not.toBeCalled();
    });
    test("司書の作成: NG", async () => {
      const promise = service.execute(ACTOR_ROLE, TEST_LIBRARIAN_PROPS);
      await expect(promise).rejects.toThrowError("この権限を登録できません");
      expect(MOCK_REPO.add).not.toBeCalled();
    });
    test("会員の作成: NG", async () => {
      const promise = service.execute(ACTOR_ROLE, TEST_MEMBER_PROPS);
      await expect(promise).rejects.toThrowError("この権限を登録できません");
      expect(MOCK_REPO.add).not.toBeCalled();
    });
  });

  describe("actor: 未ログイン", () => {
    const ACTOR_ROLE = Role.Anonymous;

    test("管理者の作成: NG", async () => {
      const promise = service.execute(ACTOR_ROLE, TEST_ADMINISTRATOR_PROPS);
      await expect(promise).rejects.toThrowError("この権限を登録できません");
      expect(MOCK_REPO.add).not.toBeCalled();
    });
    test("司書の作成: NG", async () => {
      const promise = service.execute(ACTOR_ROLE, TEST_LIBRARIAN_PROPS);
      await expect(promise).rejects.toThrowError("この権限を登録できません");
      expect(MOCK_REPO.add).not.toBeCalled();
    });
    test("会員の作成: OK", async () => {
      const promise = service.execute(ACTOR_ROLE, TEST_MEMBER_PROPS);
      await expect(promise).resolves.toBeDefined();
      expect(MOCK_REPO.add).toBeCalled();
    });
  });
});

describe("エラー優先度テスト", () => {
  // 権限エラーと重複エラー2つを定義しているため、どちらが優先されるべきかテストする。
  // 基本的には権限エラーを最初に出す。(DBへのリクエストも減らせる)

  beforeEach(() => {
    MOCK_REPO.findByEmail.mockResolvedValue(TEST_MEMBER);
  });

  describe("actor: 管理者", () => {
    const ACTOR_ROLE = Role.Administrator;

    test("管理者の作成: 重複エラー", async () => {
      const promise = service.execute(ACTOR_ROLE, TEST_ADMINISTRATOR_PROPS);
      await expect(promise).rejects.toThrowError(
        "このメールアドレスは既に使われています",
      );
      expect(MOCK_REPO.findByEmail).toBeCalled();
      expect(MOCK_REPO.add).not.toBeCalled();
    });
    test("司書の作成: 重複エラー", async () => {
      const promise = service.execute(ACTOR_ROLE, TEST_LIBRARIAN_PROPS);
      await expect(promise).rejects.toThrowError(
        "このメールアドレスは既に使われています",
      );
      expect(MOCK_REPO.findByEmail).toBeCalled();
      expect(MOCK_REPO.add).not.toBeCalled();
    });
    test("会員の作成: 重複エラー", async () => {
      const promise = service.execute(ACTOR_ROLE, TEST_MEMBER_PROPS);
      await expect(promise).rejects.toThrowError(
        "このメールアドレスは既に使われています",
      );
      expect(MOCK_REPO.findByEmail).toBeCalled();
      expect(MOCK_REPO.add).not.toBeCalled();
    });
  });

  describe("actor: 司書", () => {
    const ACTOR_ROLE = Role.Librarian;

    test("管理者の作成: 権限エラー", async () => {
      const promise = service.execute(ACTOR_ROLE, TEST_ADMINISTRATOR_PROPS);
      await expect(promise).rejects.toThrowError("この権限を登録できません");
      expect(MOCK_REPO.findByEmail).not.toBeCalled();
      expect(MOCK_REPO.add).not.toBeCalled();
    });
    test("司書の作成: 重複エラー", async () => {
      const promise = service.execute(ACTOR_ROLE, TEST_LIBRARIAN_PROPS);
      await expect(promise).rejects.toThrowError(
        "このメールアドレスは既に使われています",
      );
      expect(MOCK_REPO.findByEmail).toBeCalled();
      expect(MOCK_REPO.add).not.toBeCalled();
    });
    test("会員の作成: 重複エラー", async () => {
      const promise = service.execute(ACTOR_ROLE, TEST_MEMBER_PROPS);
      await expect(promise).rejects.toThrowError(
        "このメールアドレスは既に使われています",
      );
      expect(MOCK_REPO.findByEmail).toBeCalled();
      expect(MOCK_REPO.add).not.toBeCalled();
    });
  });

  describe("actor: 会員", () => {
    const ACTOR_ROLE = Role.Member;

    test("管理者の作成: 権限エラー", async () => {
      const promise = service.execute(ACTOR_ROLE, TEST_ADMINISTRATOR_PROPS);
      await expect(promise).rejects.toThrowError("この権限を登録できません");
      expect(MOCK_REPO.findByEmail).not.toBeCalled();
      expect(MOCK_REPO.add).not.toBeCalled();
    });
    test("司書の作成: 権限エラー", async () => {
      const promise = service.execute(ACTOR_ROLE, TEST_LIBRARIAN_PROPS);
      await expect(promise).rejects.toThrowError("この権限を登録できません");
      expect(MOCK_REPO.findByEmail).not.toBeCalled();
      expect(MOCK_REPO.add).not.toBeCalled();
    });
    test("会員の作成: 権限エラー", async () => {
      const promise = service.execute(ACTOR_ROLE, TEST_MEMBER_PROPS);
      await expect(promise).rejects.toThrowError("この権限を登録できません");
      expect(MOCK_REPO.findByEmail).not.toBeCalled();
      expect(MOCK_REPO.add).not.toBeCalled();
    });
  });

  describe("actor: 未ログイン", () => {
    const ACTOR_ROLE = Role.Anonymous;

    test("管理者の作成: 権限エラー", async () => {
      const promise = service.execute(ACTOR_ROLE, TEST_ADMINISTRATOR_PROPS);
      await expect(promise).rejects.toThrowError("この権限を登録できません");
      expect(MOCK_REPO.findByEmail).not.toBeCalled();
      expect(MOCK_REPO.add).not.toBeCalled();
    });
    test("司書の作成: 権限エラー", async () => {
      const promise = service.execute(ACTOR_ROLE, TEST_LIBRARIAN_PROPS);
      await expect(promise).rejects.toThrowError("この権限を登録できません");
      expect(MOCK_REPO.findByEmail).not.toBeCalled();
      expect(MOCK_REPO.add).not.toBeCalled();
    });
    test("会員の作成: 重複エラー", async () => {
      const promise = service.execute(ACTOR_ROLE, TEST_MEMBER_PROPS);
      await expect(promise).rejects.toThrowError(
        "このメールアドレスは既に使われています",
      );
      expect(MOCK_REPO.findByEmail).toBeCalled();
      expect(MOCK_REPO.add).not.toBeCalled();
    });
  });
});
