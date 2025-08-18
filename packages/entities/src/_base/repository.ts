export interface Repository<T> {
  add(entity: T): Promise<void>;
  update(entity: T): Promise<void>;
  remove(id: string): Promise<void>;
  findById(id: string): Promise<T | undefined>;
  findAll(volume: number, offset: number): Promise<T[]>;
}
