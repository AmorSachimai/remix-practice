## ユースケース

このレイヤーのソフトウェアは、`アプリケーション固有のビジネスルール`を含む。
このレイヤーは、システムのユースケースすべてをカプセル化および実装する。
これらのユースケースは、エンティティからの、あるいはエンティティーへのデータの流れを組み立てる。
そして、エンティティ、プロジェクトレベルのビジネスルールを使って、ユースケースの目的を達成せよと指示する。

このレイヤーの変更は、エンティティーには影響を与えないことを期待する。
このレイヤーが、データベース、UI あるいは、共通のフレームワークの変更から影響を受けないことも期待する。
このレイヤーは、そういった関心からは隔離される。

しかしながら、アプリケーションの操作への変更は、ユースケースに、つまりは、このレイヤーのソフトウェアに影響することを期待する。
ユースケースの詳細が変われば、このレイヤーのコードは、確実に影響を受ける。

引用元: https://blog.tai2.net/the_clean_architecture.html#section-3

### example

```ts
class ExampleUseCase {
    private repository: Repository;
    constructor(repo: Repository) {
        this.repository = repo;
    }
    async findById(id: string): Promise<OutputData | undefined> {
        const data = this.repository.find(id);
        return data.freeze();
    }
    async findAll(): Promise<OutputData[] | undefined> {
        ...
    }
}
```

### repository について

- ここでの Repository は Entity オブジェクトの保存・取得を抽象化したクラスのことを指す。(詳細は別途 repositories パッケージを参照)
- UseCases は Repository の型にのみ依存し、実際に保存・取得するという具体的(詳細)な処理には関心を持たせない。
- UseCases のインスタンス化時に Repository を注入(DI)することで依存解決する。
