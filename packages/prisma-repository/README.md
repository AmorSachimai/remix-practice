## DB について

prisma を用いた DB の設定・初期化を行う。

勉強用の為、SQLite で構成するが、後々変えても良い。

参考: https://www.prisma.io/docs/orm/overview/databases/sqlite

### メモ

DB のセッティングに役割を限定しているが、このパッケージを Repository 層と兼任してもよさそう。

既に prisma 側で DB → Typed Object に変換がされている(gateway を担っている)ので、Repository をこちらにおいても違和感は無い…かも。
