export  const sumOddNumbers = (...args) => args.reduce((result, number) =>
    (number % 2 !== 0) ? +result + +number : result, 0);



