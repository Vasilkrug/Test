export const SumMinMax = (...args) => {
    const max = args.reduce((result, number) => (result > number) ? result : number, 0)

    const min = args.reduce((result, number) => (result < number) ? result :number)

    return +min + +max

}


//  const sumEvenNumbers = (...args) => args.reduce((result, number) => (number % 2 === 0) ? number + result : result, 0)