export const largestEvenNumber = (arr) => arr.reduce((result, number) =>
    (number % 2 === 0 && number > result) ? number : result, 0);


