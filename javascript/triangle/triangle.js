//
// This is only a SKELETON file for the 'Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Triangle {
  constructor(side1, side2, side3) {
    this.side1 = side1;
    this.side2 = side2;
    this.side3 = side3;
    this.sidesArray = [side1, side2, side3];
  }

  // checks if there are items in array that exist and are of the same value but have a different index
  checkDuplicateSides() {
    return this.sidesArray.filter(
      (item, i, array) => array.indexOf(item) !== i
    );
  }

  kind() {
    // if all sides are the same, its an equilateral triangle
    if (this.side1 === this.side2 && this.side2 === this.side3)
      return "equilateral";

    // if atleast one other side is the same, its an isosceles triangle
    if (this.checkDuplicateSides().length) return "isosceles";
    // otherwise no sides are the same and its a scalene triangle
    else return "scalene";
  }
}
