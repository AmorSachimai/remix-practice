import type { CSSProperties, FunctionComponent } from "react";

type ArrowStyle = "^" | "v" | "<" | ">";
export interface BookIconProps {
  arrowStyle?: ArrowStyle;
  color?: string;
}
export const ArrowIcon: FunctionComponent<BookIconProps> = ({
  arrowStyle = ">",
  color = "rgb(223, 220, 216)",
}) => {
  const styles: CSSProperties = {
    width: "12px",
    height: "12px",
    opacity: 1,
  };
  const colorStyle: CSSProperties = {
    fill: color,
  };

  switch (arrowStyle) {
    case "^":
      styles.transform = "rotate(-90deg)";
      break;
    case "<":
      styles.transform = "rotate(180deg)";
      break;
    case "v":
      styles.transform = "rotate(90deg)";
      break;
    default:
      styles.transform = "rotate(0deg)";
      break;
  }
  return (
    <svg
      version="1.1"
      id="_x32_"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 512 512"
      style={styles}
      xmlSpace="preserve"
    >
      <title>arrow</title>
      <g>
        <polygon
          points="163.916,0 92.084,71.822 276.258,255.996 92.084,440.178 163.916,512 419.916,255.996"
          style={colorStyle}
        ></polygon>
      </g>
    </svg>
  );
};
