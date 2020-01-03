import { colorCode } from "../resistor-color/resistor-color.js";

// the map only returns an index for the first 2 colors (i < 2) and an "" for the rest,
// Number() will throw NaN
// parseInt works because it excludes anything other than number characters
export const decodedValue = colors =>
  parseInt(
    colors
      .map((color, i) => (i < 2 ? colorCode(color) : ""))
      .toString()
      .replace(",", "")
  );
