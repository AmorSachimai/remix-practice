import type { Role } from "./constant";

/**
 * ### パーミッション
 * 各Entityのベースとなるパーミッション型
 * @example
 * const BookPermission: Permission = {
 *   create: new Set([Role.Administrator, Role.Librarian]),
 *   find: new Set([Role.Administrator, Role.Librarian, Role.Member]),
 * };
 */
export type Permission = Record<string, ReadonlySet<Role>>;
