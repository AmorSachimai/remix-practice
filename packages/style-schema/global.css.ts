import { globalStyle } from "@vanilla-extract/css";
import { colorSchema } from "./index.css";

globalStyle(":root", {
  backgroundColor: colorSchema.primary,
  color: colorSchema.brand,
});
