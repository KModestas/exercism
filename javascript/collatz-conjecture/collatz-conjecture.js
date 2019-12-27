//
// This is only a SKELETON file for the 'Collatz Conjecture' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const steps = n => {
  let steps = 0;

  const calc = n => {
    if (n === 1) return;
    if (n % 2 === 0) {
      n / 2;
      steps++;
    } else {
      n * 3 + 1;
      steps++;
    }
    return n;
  };

  calc(n);

  if (n !== 1) {
    calc(n);
  }

  console.log("n ", n);
  console.log("steps ", steps);

  return steps;
};
