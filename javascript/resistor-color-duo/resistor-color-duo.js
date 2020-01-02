export const decodedValue = colors => {
  // get values of colors usings colors passed in
  const color1 = COLORS.find(e => e.color === colors[0]).value;
  const color2 = COLORS.find(e => e.color === colors[1]).value;

  // concat color values
  const value = "" + color1 + color2;

  // return value as a number
  return Number(value);
};

export const COLORS = [
  { color: "black", value: 0 },
  { color: "brown", value: 1 },
  { color: "red", value: 2 },
  { color: "orange", value: 3 },
  { color: "yellow", value: 4 },
  { color: "green", value: 5 },
  { color: "blue", value: 6 },
  { color: "violet", value: 7 },
  { color: "grey", value: 8 },
  { color: "white", value: 9 }
];
