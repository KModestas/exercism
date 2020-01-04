import { colorCode } from "../resistor-color/resistor-color.js";

export const decodedValue = colors => {
  const newColors = [];

  for (let i = 0; i < 2; i++) {
    newColors.push(colorCode(colors[i]));
  }

  return Number(newColors.join(""));
};

// es6 version
// Number(
//   colors
//     .map(color => colorCode(color))
//     .slice(0, 2)
//     .join("")
// );
