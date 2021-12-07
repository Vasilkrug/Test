export const largOddNumber = (...args) => {
    const largestOdd = args.reduce((result, number) => {
        if (number % 2 !== 0 && number > result) {
            return  number
        } else {
            return result
        }
    }, 0)
    return largestOdd
}