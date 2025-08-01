import type { MetaFunction } from "@remix-run/node";
import { BookCard } from "@sample/react-ui";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div>
      <div>
        <header>
          <h1>
            Welcome to <span>Remix</span>
          </h1>
          <div>
            <img src="/logo-dark.png" alt="Remix" />
          </div>
        </header>
        <nav>
          <p>Navigation</p>
        </nav>
        <main>
          <BookCard
            title="転生して田舎でスローライフをおくりたい13"
            imageUrl="https://ndlsearch.ndl.go.jp/thumbnail/9784299065421.jpg"
            author="錬金王,阿倍野ちゃこ"
            description="待望の第13巻は、お米を求めて海向こうの国へと旅立つ、アルフリート一行のストーリー!"
          />
        </main>
      </div>
    </div>
  );
}
