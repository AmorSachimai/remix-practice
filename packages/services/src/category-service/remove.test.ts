import {
  type Category,
  CategoryEntity,
  type CategoryRepository,
  Role,
} from "@sample/entities";
import { afterEach, beforeEach, describe, expect, test, vi } from "vitest";
import { DeleteCategoryService } from "./remove";

const MOCK_REPO = {
  add: vi.fn<CategoryRepository["add"]>(),
  findById: vi.fn<CategoryRepository["findById"]>(),
  update: vi.fn<CategoryRepository["update"]>(),
  remove: vi.fn<CategoryRepository["remove"]>(),
  findAll: vi.fn<CategoryRepository["findAll"]>(),
} satisfies CategoryRepository;

const service = new DeleteCategoryService(MOCK_REPO);
const MOCK_CATEGORY: Category = {
  name: "comic",
  label: "漫画",
};
const ENTITY = CategoryEntity.create(MOCK_CATEGORY);

afterEach(() => {
  vi.resetAllMocks();
});
describe("actorの権限別実行結果", () => {
  beforeEach(() => {
    MOCK_REPO.findById.mockResolvedValue(ENTITY);
  });
  test("管理者: OK", async () => {
    const promise = service.execute(Role.Administrator, "dummy-id");
    await expect(promise).resolves.toBeUndefined();
    expect(MOCK_REPO.remove).toBeCalled();
  });
  test("司書: OK", async () => {
    const promise = service.execute(Role.Librarian, "dummy-id");
    await expect(promise).resolves.toBeUndefined();
    expect(MOCK_REPO.remove).toBeCalled();
  });
  test("会員: NG", async () => {
    const promise = service.execute(Role.Member, "dummy-id");
    await expect(promise).rejects.toThrowError("操作権限がありません");
    expect(MOCK_REPO.remove).not.toBeCalled();
  });
  test("未ログイン: NG", async () => {
    const promise = service.execute(Role.Anonymous, "dummy-id");
    await expect(promise).rejects.toThrowError("操作権限がありません");
    expect(MOCK_REPO.remove).not.toBeCalled();
  });
});

describe("エラー優先度テスト", () => {
  beforeEach(() => {
    MOCK_REPO.findById.mockResolvedValue(undefined);
  });
  describe("対象カテゴリがundefined", () => {
    test("管理者", async () => {
      const promise = service.execute(Role.Administrator, "dummy-id");
      await expect(promise).rejects.toThrowError("削除対象が見つかりません");
      expect(MOCK_REPO.findById).toBeCalled();
      expect(MOCK_REPO.remove).not.toBeCalled();
    });
    test("司書", async () => {
      const promise = service.execute(Role.Librarian, "dummy-id");
      await expect(promise).rejects.toThrowError("削除対象が見つかりません");
      expect(MOCK_REPO.findById).toBeCalled();
      expect(MOCK_REPO.remove).not.toBeCalled();
    });
    test("会員", async () => {
      const promise = service.execute(Role.Member, "dummy-id");
      await expect(promise).rejects.toThrowError("操作権限がありません");
      expect(MOCK_REPO.findById).not.toBeCalled();
      expect(MOCK_REPO.remove).not.toBeCalled();
    });
    test("未ログイン", async () => {
      const promise = service.execute(Role.Anonymous, "dummy-id");
      await expect(promise).rejects.toThrowError("操作権限がありません");
      expect(MOCK_REPO.findById).not.toBeCalled();
      expect(MOCK_REPO.remove).not.toBeCalled();
    });
  });
});
