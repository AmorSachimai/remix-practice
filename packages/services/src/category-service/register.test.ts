import { type Category, type CategoryRepository, Role } from "@sample/entities";
import { afterEach, describe, expect, test, vi } from "vitest";
import { RegisterCategoryService } from "./register";

const MOCK_REPO = {
  add: vi.fn<CategoryRepository["add"]>(),
  findById: vi.fn<CategoryRepository["findById"]>(),
  update: vi.fn<CategoryRepository["update"]>(),
  remove: vi.fn<CategoryRepository["remove"]>(),
  findAll: vi.fn<CategoryRepository["findAll"]>(),
} satisfies CategoryRepository;

const service = new RegisterCategoryService(MOCK_REPO);
const MOCK_CATEGORY: Category = {
  name: "comic",
  label: "漫画",
};

afterEach(() => {
  vi.resetAllMocks();
});
describe("actorの権限別作成結果", () => {
  test("管理者: OK", async () => {
    const promise = service.execute(Role.Administrator, MOCK_CATEGORY);
    await expect(promise).resolves.toBeDefined();
    expect(MOCK_REPO.add).toBeCalled();
  });
  test("司書: OK", async () => {
    const promise = service.execute(Role.Librarian, MOCK_CATEGORY);
    await expect(promise).resolves.toBeDefined();
    expect(MOCK_REPO.add).toBeCalled();
  });
  test("会員: NG", async () => {
    const promise = service.execute(Role.Member, MOCK_CATEGORY);
    await expect(promise).rejects.toThrowError("操作権限がありません");
    expect(MOCK_REPO.add).not.toBeCalled();
  });
  test("未ログイン: NG", async () => {
    const promise = service.execute(Role.Anonymous, MOCK_CATEGORY);
    await expect(promise).rejects.toThrowError("操作権限がありません");
    expect(MOCK_REPO.add).not.toBeCalled();
  });
});
