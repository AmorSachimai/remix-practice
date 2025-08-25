import { Role, type UserRepository } from "@sample/entities";
import { TEST_ADMINISTRATOR } from "@sample/entities/test-data";
import { afterEach, describe, expect, test, vi } from "vitest";
import { GetUserService } from "./find";

const MOCK_REPO = {
  add: vi.fn<UserRepository["add"]>(),
  findById: vi.fn<UserRepository["findById"]>(),
  update: vi.fn<UserRepository["update"]>(),
  remove: vi.fn<UserRepository["remove"]>(),
  findAll: vi.fn<UserRepository["findAll"]>(),
  findByEmail: vi.fn<UserRepository["findByEmail"]>(),
  findByName: vi.fn<UserRepository["findByName"]>(),
} satisfies UserRepository;

const service = new GetUserService(MOCK_REPO);

afterEach(() => {
  vi.resetAllMocks();
});
describe("actorの権限別操作結果", () => {
  describe("actor: 管理者", () => {
    const ACTOR_ROLE = Role.Administrator;

    test("ユーザーが見つかった時", async () => {
      MOCK_REPO.findById.mockResolvedValue(TEST_ADMINISTRATOR);
      const promise = service.execute(ACTOR_ROLE, "user-id");
      await expect(promise).resolves.toBeDefined();
      expect(MOCK_REPO.findById).toBeCalled();
    });
    test("ユーザーが見つからなかったとき", async () => {
      MOCK_REPO.findById.mockResolvedValue(undefined);
      const promise = service.execute(ACTOR_ROLE, "user-id");
      await expect(promise).resolves.toBeUndefined();
      expect(MOCK_REPO.findById).toBeCalled();
    });
  });

  describe("actor: 司書", () => {
    const ACTOR_ROLE = Role.Librarian;

    test("ユーザーが見つかった時", async () => {
      MOCK_REPO.findById.mockResolvedValue(TEST_ADMINISTRATOR);
      const promise = service.execute(ACTOR_ROLE, "user-id");
      await expect(promise).resolves.toBeDefined();
      expect(MOCK_REPO.findById).toBeCalled();
    });
    test("ユーザーが見つからなかったとき", async () => {
      MOCK_REPO.findById.mockResolvedValue(undefined);
      const promise = service.execute(ACTOR_ROLE, "user-id");
      await expect(promise).resolves.toBeUndefined();
      expect(MOCK_REPO.findById).toBeCalled();
    });
  });

  describe("actor: 通常会員", () => {
    const ACTOR_ROLE = Role.Member;

    test("ユーザーが見つかった時", async () => {
      MOCK_REPO.findById.mockResolvedValue(TEST_ADMINISTRATOR);
      const promise = service.execute(ACTOR_ROLE, "user-id");
      await expect(promise).rejects.toThrowError("権限がありません");
      expect(MOCK_REPO.findById).not.toBeCalled();
    });
    test("ユーザーが見つからなかったとき", async () => {
      MOCK_REPO.findById.mockResolvedValue(undefined);
      const promise = service.execute(ACTOR_ROLE, "user-id");
      await expect(promise).rejects.toThrowError("権限がありません");
      expect(MOCK_REPO.findById).not.toBeCalled();
    });
  });

  describe("actor: 未ログイン", () => {
    const ACTOR_ROLE = Role.Anonymous;

    test("ユーザーが見つかった時", async () => {
      MOCK_REPO.findById.mockResolvedValue(TEST_ADMINISTRATOR);
      const promise = service.execute(ACTOR_ROLE, "user-id");
      await expect(promise).rejects.toThrowError("権限がありません");
      expect(MOCK_REPO.findById).not.toBeCalled();
    });
    test("ユーザーが見つからなかったとき", async () => {
      MOCK_REPO.findById.mockResolvedValue(undefined);
      const promise = service.execute(ACTOR_ROLE, "user-id");
      await expect(promise).rejects.toThrowError("権限がありません");
      expect(MOCK_REPO.findById).not.toBeCalled();
    });
  });
});
