import { colorSchema } from "@sample/style-schema";
import { style } from "@vanilla-extract/css";

export const layout = {
  contents: style({
    display: "flex",
    flexDirection: "row",
  }),
  navigator: style({
    display: "flex",
    flexDirection: "column",
    gap: 8,
    width: "240px",
    height: "100vh",
    backgroundColor: colorSchema.secondary,
  }),
  listBox: style({
    display: "flex",
    flexDirection: "column",
    gap: 8,
  }),
  item: style({
    marginInline: "10px",
  }),
};

export const styles = {
  item: style({
    marginInline: "10px",
  }),
  link: style({
    borderRadius: "6px",
    ":hover": {
      opacity: 0.8,
      backgroundColor: colorSchema.primary,
    },
  }),
  highlight: style({
    pointerEvents: "none",
    backgroundColor: colorSchema.primary,
  }),
  label: style({
    display: "flex",
    gap: 12,
    alignItems: "center",
    padding: "20px 10px",
    textAlign: "left",
    lineHeight: 1.5,
  }),
};
