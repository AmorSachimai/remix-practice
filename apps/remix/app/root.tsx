import type { LinksFunction } from "@remix-run/node";
import {
  isRouteErrorResponse,
  Links,
  Meta,
  NavLink,
  Outlet,
  Scripts,
  ScrollRestoration,
  useRouteError,
} from "@remix-run/react";
import { type FunctionComponent, useState } from "react";
import { ArrowIcon } from "./icons/arrow";
import { BookIcon } from "./icons/book";
import { layout, styles } from "./root.css";

// 共通スタイルの適用
import "@sample/style-schema/reset.css";
import "@sample/style-schema/global.css";

export const links: LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="ja">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <div className={layout.contents}>
          <SideNav />
          {children}
        </div>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
};

export function ErrorBoundary() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return (
      <div>
        <h1>
          {error.status} {error.statusText}
        </h1>
        <p>{error.data}</p>
      </div>
    );
  }
}

export default function App() {
  return <Outlet />;
}

const SideNav: FunctionComponent = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <nav className={layout.navigator}>
      <button type="button" onClick={() => setIsOpen(!isOpen)}>
        <div className={layout.item}>
          <span className={styles.label}>
            <BookIcon />
            {"ライブラリ"}
            <ArrowIcon arrowStyle={isOpen ? "v" : ">"} />
          </span>
        </div>
      </button>

      {isOpen && (
        <ul className={layout.listBox}>
          <li className={layout.item}>
            <LinkButton href="/" label="Home" />
          </li>
          <li className={layout.item}>
            <LinkButton href="/about" label="About" />
          </li>
          <li className={layout.item}>
            <LinkButton href="/contact" label="contact" />
          </li>
        </ul>
      )}

      <div className={layout.item}>
        <LinkButton href="/favorites" label="お気に入り" />
      </div>
    </nav>
  );
};

const LinkButton: FunctionComponent<{ href: string; label: string }> = ({
  href,
  label,
}) => (
  <NavLink
    to={href}
    className={({ isActive }) =>
      isActive ? `${styles.link} ${styles.highlight}` : styles.link
    }
  >
    <span className={styles.label}>{label}</span>
  </NavLink>
);
