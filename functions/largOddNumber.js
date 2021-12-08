export const largOddNumber = (...args) => args.reduce((result, number) =>
    (number % 2 !== 0 && number > result)  ? number : result, 0);