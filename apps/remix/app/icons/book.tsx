import type { CSSProperties, FunctionComponent } from "react";

export interface BookIconProps {
  color?: string;
}
export const BookIcon: FunctionComponent<BookIconProps> = ({
  color = "rgb(223, 220, 216)",
}) => {
  const styles: CSSProperties = {
    width: "25px",
    height: "25px",
    opacity: 1,
  };
  const colorStyle: CSSProperties = {
    fill: color,
  };

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
      <title>book icon</title>
      <g>
        <path
          d="M412.875,59.063c-54.219,0-111.531,24.063-144.047,62.047v331.828c32.516-38,89.828-62.063,144.047-62.063
		c54.188,0,99.125,0,99.125,0V59.063C512,59.063,467.063,59.063,412.875,59.063z"
          style={colorStyle}
        />
        <path
          d="M99.125,59.063c-54.188,0-99.125,0-99.125,0v331.813c0,0,44.938,0,99.125,0
		c54.219,0,111.531,24.063,144.047,62.063V121.109C210.656,83.125,153.344,59.063,99.125,59.063z"
          style={colorStyle}
        />
      </g>
    </svg>
  );
};
