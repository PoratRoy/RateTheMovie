export const getRandomNumber = (min: number = 1, max: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const get5Indexs = (): number[] => {
  let numbers: number[] = [];

  while (numbers.length < 5) {
      let randomNumber = getRandomNumber(0, 19);

      if (!numbers.includes(randomNumber)) {
          numbers.push(randomNumber);
      }
  }
  return numbers;
}