// Create an array of n random numbers between 1 - 10
export const randNumbers = (n) => {
  let numbers = new Array(n);
  const shuffled = [];

  // fill one array with the numbers 1-10
  numbers = numbers.fill(1).map((_, i) => i + 1);

  // shuffle by taking a random element from one array
  // and pushing it to the other array
  while (numbers.length) {
    const idx = numbers.length * Math.random() | 0; // floor trick
    shuffled.push([numbers[idx], 0]);
    numbers.splice(idx, 1);
  }
  //get the first 6
  const arrayOfSix = shuffled.slice(0, 6);
  return arrayOfSix;
};
// generate rows / columns
export const randGrid = () => {
  const shuffled = randNumbers(6);
  const array = shuffled.map(a => {
        let r = new Array(6);
        r = [a, ...randNumbers(5)];
        return r;
    });
  return array;
};

export const fillGrid = (n) => {
  let shuffled = randNumbers(10);
  for (let i = 0; i < n; i++) {
    shuffled = [...shuffled, ...randNumbers(10)];
  }
  return shuffled;
};
//TODO at the moment, there are duplicates both horizontally and vertically.
