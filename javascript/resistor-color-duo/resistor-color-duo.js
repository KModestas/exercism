import { colorCode } from "../resistor-color/resistor-color.js";

export const decodedValue = colors =>
  Number(
    colors
      .slice(0, 2)
      .map(colorCode)
      .join("")
  );
