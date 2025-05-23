import {
  type CSSProperties,
  createGlobalTheme,
  globalStyle,
  style,
} from "@vanilla-extract/css";

export type MediaQuery =
  | "small"
  | "medium"
  | "large"
  | "xLarge"
  | "dark"
  | "light";

export const mediaQuery =
  (query: MediaQuery) =>
  (styles: CSSProperties): string | undefined => {
    switch (query) {
      case "small":
        return style({
          "@media": {
            "screen and (max-width: 767px)": {
              ...styles,
            },
          },
        });
      case "medium":
        return style({
          "@media": {
            "screen and (max-width: 768px)": {
              ...styles,
            },
          },
        });
      case "large":
        return style({
          "@media": {
            "screen and (max-width: 1024px)": {
              ...styles,
            },
          },
        });
      case "xLarge":
        return style({
          "@media": {
            "screen and (min-width: 1280px)": {
              ...styles,
            },
          },
        });
      case "dark":
        return style({
          "@media": {
            "(prefers-color-scheme: dark)": {
              ...styles,
            },
          },
        });
      case "light":
        return style({
          "@media": {
            "(prefers-color-scheme: light)": {
              ...styles,
            },
          },
        });
      default:
        return undefined;
    }
  };

export const colorSchema = createGlobalTheme(":root", {
  brand: "#dfdcd8",
  primary: "#3f3f3f",
  secondary: "#202020",
});

globalStyle(":root", {
  backgroundColor: colorSchema.primary,
  color: colorSchema.brand,
});
