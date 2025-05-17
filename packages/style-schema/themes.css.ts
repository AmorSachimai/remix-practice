import { createGlobalTheme } from "@vanilla-extract/css";

export const globalStyles = createGlobalTheme(":root", {
  color: {
    brand: "#3391ff",
    body: "#1e2021",
  },
});
