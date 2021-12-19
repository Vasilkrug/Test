
export const sumTwoArrays = (arr1, arr2) => {
    const firstSum = arr1.reduce((result, number) => (number === Number(number)) ? +result + +number : result, 0);
    const secondSum = arr2.reduce((result, number) => (number === Number(number)) ? +result + +number : result, 0);
    return firstSum + secondSum
}
