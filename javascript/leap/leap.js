//
// This is only a SKELETON file for the 'Leap' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

// export const isLeap = year => {

export const isLeap = year => {
  // if year divisible by 4 its a leap year
  if (year % 4 === 0) {
    // if year is divisible by 100 return false unless it is also divisble by 400
    if (year % 100 === 0) {
      if (year % 400 === 0) return true;
      else return false;
    }
    // if year is not divisible by 4 - not a leap year
  } else return false;
};
