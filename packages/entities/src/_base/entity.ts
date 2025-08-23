export type AggregateID = string;

type Open<T> = { [P in keyof T]: T[P] };
type BaseObject<T> = {
  id: AggregateID;
  createdAt: Date;
  updatedAt: Date;
} & T;
export type EntityObject<T> = Open<Readonly<BaseObject<T>>>;

type EntityProps<T> = {
  id: AggregateID;
  props: T;
  createdAt?: Date;
  updatedAt?: Date;
};

export abstract class Entity<T extends Record<string, unknown> | unknown> {
  private readonly _id: AggregateID;
  private readonly _createdAt: Date;
  private _props: T;
  private _updatedAt: Date;

  constructor({ id, props, createdAt, updatedAt }: EntityProps<T>) {
    const now = new Date();
    this._id = id;
    this._createdAt = createdAt ?? now;
    this._updatedAt = updatedAt ?? now;
    this._props = props;
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

  /**
   * ### propsを返します
   * ※Entity外からは読み取れないようにしている。
   */
  protected get props(): Readonly<T> {
    return Object.freeze(this._props);
  }

  /**
   * ### propsの更新を行います
   * ※バリデーションやプロパティの検証は更新前に実施
   */
  protected set updateProps(props: T) {
    this._props = props;
    this._updatedAt = new Date();
  }

  /**
   * ### プロパティをすべて返す(読み込み専用)
   */
  public freeze(): EntityObject<T> {
    const propsCopy = {
      id: this._id,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
      ...this.props,
    };
    return Object.freeze(propsCopy);
  }
}
