
export const evenNumbersInTwoArrays = (arr1, arr2) => {
    const firstEvenArr = arr1.filter(item => (item % 2 === 0 && item === Number(item)))
    const secondEvenArr = arr2.filter(item => (item % 2 === 0 && item === Number(item)))
    return [...firstEvenArr, ...secondEvenArr]
}
