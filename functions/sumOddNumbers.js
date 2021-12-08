export  const sumOddNumbers = (...args) => {
    const sum = args.reduce((result, number) => {
        if (number % 2 !== 0) {
            return +result + +number
        } else {
            return result
        }

    }, 0)
    return sum
}