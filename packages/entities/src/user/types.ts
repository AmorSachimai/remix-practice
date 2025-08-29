import type { EntityObject } from "../_base";
import type { Role } from "../constant";

export type UserRole = Exclude<Role, Role.Anonymous>;

export type User = {
  name: string;
  email: string;
  password: string;
  role: UserRole;
};

export type UserObject = EntityObject<User>;
