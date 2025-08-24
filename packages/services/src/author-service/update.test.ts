import {
  type Author,
  AuthorEntity,
  type AuthorRepository,
  Role,
} from "@sample/entities";
import { afterEach, beforeEach, describe, expect, test, vi } from "vitest";
import { UpdateAuthorService } from "./update";

const MOCK_REPO = {
  add: vi.fn<AuthorRepository["add"]>(),
  findById: vi.fn<AuthorRepository["findById"]>(),
  update: vi.fn<AuthorRepository["update"]>(),
  remove: vi.fn<AuthorRepository["remove"]>(),
  findAll: vi.fn<AuthorRepository["findAll"]>(),
} satisfies AuthorRepository;

const service = new UpdateAuthorService(MOCK_REPO);
const AUTHOR: Author = {
  name: "山田太郎",
  kana: "ヤマダタロウ",
  nickname: "たろう",
  description: "著者の説明",
};
const ENTITY = new AuthorEntity({
  id: "update-test-id",
  props: AUTHOR,
});

afterEach(() => {
  vi.resetAllMocks();
});
describe("actorの権限別作成結果", () => {
  beforeEach(() => {
    MOCK_REPO.findById.mockResolvedValue(ENTITY);
  });
  test("管理者: OK", async () => {
    const promise = service.execute(Role.Administrator, "dummy-id", AUTHOR);
    await expect(promise).resolves.toBeDefined();
    expect(MOCK_REPO.update).toBeCalled();
  });
  test("司書: OK", async () => {
    const promise = service.execute(Role.Librarian, "dummy-id", AUTHOR);
    await expect(promise).resolves.toBeDefined();
    expect(MOCK_REPO.update).toBeCalled();
  });
  test("会員: NG", async () => {
    const promise = service.execute(Role.Member, "dummy-id", AUTHOR);
    await expect(promise).rejects.toThrowError("操作権限がありません");
    expect(MOCK_REPO.update).not.toBeCalled();
  });
  test("未ログイン: NG", async () => {
    const promise = service.execute(Role.Anonymous, "dummy-id", AUTHOR);
    await expect(promise).rejects.toThrowError("操作権限がありません");
    expect(MOCK_REPO.update).not.toBeCalled();
  });
});

describe("エラー優先度テスト", () => {
  beforeEach(() => {
    MOCK_REPO.findById.mockResolvedValue(undefined);
  });
  describe("対象著者がundefined", () => {
    test("管理者", async () => {
      const promise = service.execute(Role.Administrator, "dummy-id", AUTHOR);
      await expect(promise).rejects.toThrowError("更新対象が見つかりません");
      expect(MOCK_REPO.findById).toBeCalled();
      expect(MOCK_REPO.update).not.toBeCalled();
    });
    test("司書", async () => {
      const promise = service.execute(Role.Librarian, "dummy-id", AUTHOR);
      await expect(promise).rejects.toThrowError("更新対象が見つかりません");
      expect(MOCK_REPO.findById).toBeCalled();
      expect(MOCK_REPO.update).not.toBeCalled();
    });
    test("会員", async () => {
      const promise = service.execute(Role.Member, "dummy-id", AUTHOR);
      await expect(promise).rejects.toThrowError("操作権限がありません");
      expect(MOCK_REPO.findById).not.toBeCalled();
      expect(MOCK_REPO.update).not.toBeCalled();
    });
    test("未ログイン", async () => {
      const promise = service.execute(Role.Anonymous, "dummy-id", AUTHOR);
      await expect(promise).rejects.toThrowError("操作権限がありません");
      expect(MOCK_REPO.findById).not.toBeCalled();
      expect(MOCK_REPO.update).not.toBeCalled();
    });
  });
});
