export const  oddNumberLength = (arr) => {
    const oddNumbers = arr.filter(item => (item % 2 !== 0 && item === Number(item)))
    return oddNumbers.length
}
