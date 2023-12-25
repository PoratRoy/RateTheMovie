export const getRandomNumber = (min: number = 1, max: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const get5RandomIndexs = (): number[] => {
    let numbers: number[] = [];

    while (numbers.length < 5) {
        let randomNumber = getRandomNumber(0, 19);

        if (!numbers.includes(randomNumber)) {
            numbers.push(randomNumber);
        }
    }
    return numbers;
};

export const generateRandomArray = (length: number = 20): number[] => {
    const array = Array.from({ length: length }, (_, index) => index);

    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }

    return array;
};
