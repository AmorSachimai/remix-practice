// import { colorSchema } from "@my-packages/style-schema";
import { style } from "@vanilla-extract/css";

export const layouts = {
  container: style({
    maxWidth: 170,
    display: "flex",
    flexDirection: "column",
    gap: 12,
  }),
};

export const styles = {
  image: style({
    maxWidth: 170,
    maxHeight: 240,
  }),
  title: style({
    fontSize: 14,
    fontWeight: "bold",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  }),
  author: style({
    fontSize: 12,
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  }),
  description: style({
    fontSize: 12,
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  }),
};
