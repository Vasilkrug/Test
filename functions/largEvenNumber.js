export const largestEvenNumber = (...args) => {
    const largestNum = args.reduce((result, number) => {
        if (number % 2 === 0 && number > result) {
            return  number
        } else {
            return result
        }
    }, 0)
return largestNum
}
