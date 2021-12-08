export  const sumOddNumbers = (arr) => arr.reduce((result, number) =>
    (number % 2 !== 0) ? +result + +number : result, 0);



