import { globalStyle } from "@vanilla-extract/css";
import { colorSchema } from "./index.css";

globalStyle(":root", {
  backgroundColor: colorSchema.primary,
  color: colorSchema.brand,
});

globalStyle("a, button", {
  width: "auto",
  height: "auto",
  backgroundColor: "transparent",
  borderStyle: "none",
  color: colorSchema.brand,
  textDecoration: "none",
});
globalStyle("button", {
  width: "100%",
});
globalStyle("a:hover, button:hover", {
  opacity: 0.8,
  cursor: "pointer",
});
