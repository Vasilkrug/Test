export const sumMinMax = (arr) => {
    const max = arr.reduce((result, number) => (result > number) ? result : number, 0)
    const min = arr.reduce((result, number) => (result < number) ? result :number)
    return +min + +max
}



