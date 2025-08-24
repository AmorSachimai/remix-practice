import { UserEntity, type UserRepository } from "@sample/entities";
import {
  TEST_ADMINISTRATOR,
  TEST_ADMINISTRATOR_PROPS,
  TEST_LIBRARIAN,
  TEST_LIBRARIAN_PROPS,
  TEST_MEMBER,
  TEST_MEMBER_PROPS,
} from "@sample/entities/test-data";
import { afterEach, beforeEach, describe, expect, test, vi } from "vitest";
import { DeleteUserService } from "./remove";

const MOCK_REPO = {
  add: vi.fn<UserRepository["add"]>(),
  findById: vi.fn<UserRepository["findById"]>(),
  update: vi.fn<UserRepository["update"]>(),
  remove: vi.fn<UserRepository["remove"]>(),
  findAll: vi.fn<UserRepository["findAll"]>(),
  findByEmail: vi.fn<UserRepository["findByEmail"]>(),
  findByName: vi.fn<UserRepository["findByName"]>(),
} satisfies UserRepository;

const service = new DeleteUserService(MOCK_REPO);

afterEach(() => {
  vi.resetAllMocks(); // mockResolvedValueOnceを使うので呼び出す。
});

describe("actorの権限別削除結果", () => {
  describe("actor: 管理者", () => {
    const ACTOR_ID = "delete-test-id";
    const ACTOR = new UserEntity({
      id: ACTOR_ID,
      props: TEST_ADMINISTRATOR_PROPS,
    });

    beforeEach(() => {
      // findByIdの初回呼び出しはactorを返す
      MOCK_REPO.findById.mockResolvedValueOnce(TEST_ADMINISTRATOR);
    });
    test("自分の削除: OK", async () => {
      MOCK_REPO.findById.mockResolvedValueOnce(ACTOR);
      const promise = service.execute(ACTOR_ID, "dummy-id");
      await expect(promise).resolves.toBeUndefined(); // resolveならOK
      expect(MOCK_REPO.remove).toBeCalled(); // repositoryが呼ばれることの確認
    });
    test("他の管理者の削除: OK", async () => {
      MOCK_REPO.findById.mockResolvedValueOnce(TEST_ADMINISTRATOR);
      const promise = service.execute(ACTOR_ID, "dummy-id");
      await expect(promise).resolves.toBeUndefined();
      expect(MOCK_REPO.remove).toBeCalled();
    });
    test("司書の削除: OK", async () => {
      MOCK_REPO.findById.mockResolvedValueOnce(TEST_LIBRARIAN);
      const promise = service.execute(ACTOR_ID, "dummy-id");
      await expect(promise).resolves.toBeUndefined();
      expect(MOCK_REPO.remove).toBeCalled();
    });
    test("会員の削除: OK", async () => {
      MOCK_REPO.findById.mockResolvedValueOnce(TEST_MEMBER);
      const promise = service.execute(ACTOR_ID, "dummy-id");
      await expect(promise).resolves.toBeUndefined();
      expect(MOCK_REPO.remove).toBeCalled();
    });
  });

  describe("actor: 司書", () => {
    const ACTOR_ID = "update-test-id";
    const ACTOR = new UserEntity({
      id: ACTOR_ID,
      props: TEST_LIBRARIAN_PROPS,
    });

    beforeEach(() => {
      // findByIdの初回呼び出しはactorを返す
      MOCK_REPO.findById.mockResolvedValueOnce(ACTOR);
    });
    test("自分の削除: OK", async () => {
      MOCK_REPO.findById.mockResolvedValueOnce(ACTOR);
      const promise = service.execute(ACTOR_ID, "dummy-id");
      await expect(promise).resolves.toBeUndefined();
      expect(MOCK_REPO.remove).toBeCalled();
    });
    test("管理者の削除: NG", async () => {
      MOCK_REPO.findById.mockResolvedValueOnce(TEST_ADMINISTRATOR);
      const promise = service.execute(ACTOR_ID, "dummy-id");
      await expect(promise).rejects.toThrowError("削除権限がありません");
      expect(MOCK_REPO.remove).not.toBeCalled();
    });
    test("他の司書の削除: OK", async () => {
      MOCK_REPO.findById.mockResolvedValueOnce(TEST_LIBRARIAN);
      const promise = service.execute(ACTOR_ID, "dummy-id");
      await expect(promise).resolves.toBeUndefined();
      expect(MOCK_REPO.remove).toBeCalled();
    });
    test("会員の削除: OK", async () => {
      MOCK_REPO.findById.mockResolvedValueOnce(TEST_MEMBER);
      const promise = service.execute(ACTOR_ID, "dummy-id");
      await expect(promise).resolves.toBeUndefined();
      expect(MOCK_REPO.remove).toBeCalled();
    });
  });

  describe("actor: 通常会員", () => {
    const ACTOR_ID = "update-test-id";
    const ACTOR = new UserEntity({
      id: ACTOR_ID,
      props: TEST_MEMBER_PROPS,
    });

    beforeEach(() => {
      // findByIdの初回呼び出しはactorを返す
      MOCK_REPO.findById.mockResolvedValueOnce(ACTOR);
    });
    test("自分の削除: OK", async () => {
      MOCK_REPO.findById.mockResolvedValueOnce(ACTOR);
      const promise = service.execute(ACTOR_ID, "dummy-id");
      await expect(promise).resolves.toBeUndefined();
      expect(MOCK_REPO.remove).toBeCalled();
    });
    test("管理者の削除: NG", async () => {
      MOCK_REPO.findById.mockResolvedValueOnce(TEST_ADMINISTRATOR);
      const promise = service.execute(ACTOR_ID, "dummy-id");
      await expect(promise).rejects.toThrowError("削除権限がありません");
      expect(MOCK_REPO.remove).not.toBeCalled();
    });
    test("司書の削除: NG", async () => {
      MOCK_REPO.findById.mockResolvedValueOnce(TEST_LIBRARIAN);
      const promise = service.execute(ACTOR_ID, "dummy-id");
      await expect(promise).rejects.toThrowError("削除権限がありません");
      expect(MOCK_REPO.remove).not.toBeCalled();
    });
    test("他の会員の削除: NG", async () => {
      MOCK_REPO.findById.mockResolvedValueOnce(TEST_MEMBER);
      const promise = service.execute(ACTOR_ID, "dummy-id");
      await expect(promise).rejects.toThrowError("削除権限がありません");
      expect(MOCK_REPO.remove).not.toBeCalled();
    });
  });
});

describe("異常系テスト", () => {
  test("actorがundefined", async () => {
    MOCK_REPO.findById.mockResolvedValueOnce(undefined);
    MOCK_REPO.findById.mockResolvedValueOnce(TEST_ADMINISTRATOR);
    const promise = service.execute("actor-id", "target-id");
    await expect(promise).rejects.toThrowError("ログインユーザーが不明です");
    expect(MOCK_REPO.remove).not.toBeCalled();
  });
  test("targetがundefined", async () => {
    MOCK_REPO.findById.mockResolvedValueOnce(TEST_ADMINISTRATOR);
    MOCK_REPO.findById.mockResolvedValueOnce(undefined);
    const promise = service.execute("actor-id", "target-id");
    await expect(promise).rejects.toThrowError(
      "削除対象のユーザーが存在しません",
    );
    expect(MOCK_REPO.remove).not.toBeCalled();
  });
  test("actor取得時にreject", async () => {
    MOCK_REPO.findById.mockRejectedValueOnce(
      new Error("mock repository error"),
    );
    MOCK_REPO.findById.mockResolvedValueOnce(TEST_ADMINISTRATOR);
    const promise = service.execute("actor-id", "target-id");
    await expect(promise).rejects.toThrowError("mock repository error");
    expect(MOCK_REPO.remove).not.toBeCalled();
  });
  test("target取得時にreject", async () => {
    MOCK_REPO.findById.mockResolvedValueOnce(TEST_ADMINISTRATOR);
    MOCK_REPO.findById.mockRejectedValueOnce(
      new Error("mock repository error"),
    );
    const promise = service.execute("actor-id", "target-id");
    await expect(promise).rejects.toThrowError("mock repository error");
    expect(MOCK_REPO.remove).not.toBeCalled();
  });
});
