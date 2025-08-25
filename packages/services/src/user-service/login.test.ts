import type { UserRepository } from "@sample/entities";
import {
  TEST_ADMINISTRATOR,
  TEST_ADMINISTRATOR_PROPS,
} from "@sample/entities/test-data";
import { afterEach, describe, expect, test, vi } from "vitest";
import { LoginService } from "./login";

const MOCK_REPO = {
  add: vi.fn<UserRepository["add"]>(),
  findById: vi.fn<UserRepository["findById"]>(),
  update: vi.fn<UserRepository["update"]>(),
  remove: vi.fn<UserRepository["remove"]>(),
  findAll: vi.fn<UserRepository["findAll"]>(),
  findByEmail: vi.fn<UserRepository["findByEmail"]>(),
  findByName: vi.fn<UserRepository["findByName"]>(),
} satisfies UserRepository;

const service = new LoginService(MOCK_REPO);

afterEach(() => {
  vi.resetAllMocks();
});
describe("正常系", () => {
  test("email, password両方が合っている時", async () => {
    MOCK_REPO.findByEmail.mockResolvedValue(TEST_ADMINISTRATOR);
    const promise = service.execute({
      email: TEST_ADMINISTRATOR_PROPS.email,
      password: "samplePassword",
    });
    await expect(promise).resolves.toBeDefined();
  });
});

describe("異常系", () => {
  test("emailでfindした結果がundefined", async () => {
    MOCK_REPO.findByEmail.mockResolvedValue(undefined);
    const promise = service.execute({
      email: TEST_ADMINISTRATOR_PROPS.email,
      password: "samplePassword",
    });
    await expect(promise).rejects.toThrowError("ユーザーがありません");
  });
  test("passwordが異なるとき", async () => {
    MOCK_REPO.findByEmail.mockResolvedValue(TEST_ADMINISTRATOR);
    const promise = service.execute({
      email: TEST_ADMINISTRATOR_PROPS.email,
      password: "s@mpleP@ssw0rd",
    });
    await expect(promise).rejects.toThrowError("パスワードが異なります");
  });
});
