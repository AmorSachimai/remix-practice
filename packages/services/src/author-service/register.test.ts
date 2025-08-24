import { type Author, type AuthorRepository, Role } from "@sample/entities";
import { afterEach, describe, expect, test, vi } from "vitest";
import { RegisterAuthorService } from "./register";

const MOCK_REPO = {
  add: vi.fn<AuthorRepository["add"]>(),
  findById: vi.fn<AuthorRepository["findById"]>(),
  update: vi.fn<AuthorRepository["update"]>(),
  remove: vi.fn<AuthorRepository["remove"]>(),
  findAll: vi.fn<AuthorRepository["findAll"]>(),
} satisfies AuthorRepository;

const service = new RegisterAuthorService(MOCK_REPO);
const MOCK_AUTHOR: Author = {
  name: "山田太郎",
  kana: "ヤマダタロウ",
  nickname: "たろう",
  description: "著者の説明",
};

afterEach(() => {
  vi.resetAllMocks();
});
describe("actorの権限別作成結果", () => {
  test("管理者: OK", async () => {
    const promise = service.execute(Role.Administrator, MOCK_AUTHOR);
    await expect(promise).resolves.toBeDefined();
    expect(MOCK_REPO.add).toBeCalled();
  });
  test("司書: OK", async () => {
    const promise = service.execute(Role.Librarian, MOCK_AUTHOR);
    await expect(promise).resolves.toBeDefined();
    expect(MOCK_REPO.add).toBeCalled();
  });
  test("会員: NG", async () => {
    const promise = service.execute(Role.Member, MOCK_AUTHOR);
    await expect(promise).rejects.toThrowError("操作権限がありません");
    expect(MOCK_REPO.add).not.toBeCalled();
  });
  test("未ログイン: NG", async () => {
    const promise = service.execute(Role.Anonymous, MOCK_AUTHOR);
    await expect(promise).rejects.toThrowError("操作権限がありません");
    expect(MOCK_REPO.add).not.toBeCalled();
  });
});
