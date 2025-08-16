export type AggregateID = string;

type Open<T> = { [P in keyof T]: T[P] };
type BaseModel<T> = {
  id: AggregateID;
  createdAt: Date;
  updatedAt: Date;
} & T;
export type Model<T> = Open<BaseModel<T>>;

export type BaseEntityProps<T> = {
  id: AggregateID;
  props: T;
  createdAt?: Date;
  updatedAt?: Date;
};

export abstract class Entity<T extends { [key: string]: unknown }> {
  protected readonly _id: AggregateID;
  protected readonly props: T;
  private readonly _createdAt: Date;
  private _updatedAt: Date;

  constructor({ id, props, createdAt, updatedAt }: BaseEntityProps<T>) {
    const now = new Date();
    this._id = id;
    this._createdAt = createdAt ?? now;
    this._updatedAt = updatedAt ?? now;
    this.props = props;
  }

  get id(): AggregateID {
    return this._id;
  }

  get createdAt(): Date {
    return this._createdAt;
  }

  get updatedAt(): Date {
    return this._updatedAt;
  }

  set updateAt(date: Date) {
    this._updatedAt = date;
  }

  /**
   * ### プロパティをすべて返す(読み込み専用)
   */
  public freeze(): Readonly<Model<T>> {
    const propsCopy = {
      id: this._id,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
      ...this.props,
    };
    return Object.freeze(propsCopy);
  }
}
