import {
  Role,
  type User,
  UserEntity,
  type UserRepository,
  type UserRole,
} from "@sample/entities";
import { prisma, type User as UserModel } from "./client";

export class UserRepositoryImpl implements UserRepository {
  async findById(id: string): Promise<UserEntity | undefined> {
    const result = await prisma.user.findUnique({
      where: { id },
    });
    if (result === null) {
      return undefined;
    }
    return toEntity(result);
  }

  async findByName(name: string): Promise<UserEntity | undefined> {
    const result = await prisma.user.findFirst({
      where: { name },
    });
    if (result === null) {
      return undefined;
    }
    return toEntity(result);
  }

  async findByEmail(email: string): Promise<UserEntity | undefined> {
    const result = await prisma.user.findUnique({
      where: { email },
    });
    if (result === null) {
      return undefined;
    }
    return toEntity(result);
  }

  async findAll(volume: number, offset: number): Promise<UserEntity[]> {
    const result = await prisma.user.findMany({
      take: volume,
      skip: volume * offset,
    });

    return result.map(toEntity);
  }

  async add(entity: UserEntity): Promise<void> {
    await prisma.user.create({
      data: toModel(entity),
    });
  }

  async remove(id: string): Promise<void> {
    await prisma.user.delete({
      where: { id },
    });
  }

  async update(entity: UserEntity): Promise<void> {
    const model = toModel(entity);
    await prisma.user.update({
      where: { id: model.id },
      data: {
        id: model.id,
        name: model.name,
        email: model.email,
        password: model.password,
        role: model.role,
        updatedAt: model.updatedAt,
        // createAtは不要
      },
    });
  }
}

const toEntity = (model: UserModel): UserEntity => {
  const props = toUser(model);
  return new UserEntity({
    id: model.id,
    props,
    createdAt: model.createdAt,
    updatedAt: model.updatedAt,
  });
};

const toUser = (model: UserModel): User => ({
  name: model.name,
  email: model.email,
  password: model.password,
  role: isRole(model.role) ? model.role : Role.Member,
});

const isRole = (role: number): role is UserRole => {
  switch (role) {
    case Role.Administrator:
      return true;
    case Role.Librarian:
      return true;
    case Role.Member:
      return true;
    default:
      return false;
  }
};

const toModel = (user: UserEntity): UserModel => {
  const obj = user.freeze();
  return obj;
};
