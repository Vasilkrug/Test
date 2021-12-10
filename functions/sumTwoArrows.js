export const sumTwoArrows = (arr1, arr2) => {
    const firstArr = arr1.filter(item => (item === Number(item)))
    const secondArr = arr2.filter(item => (item === Number(item)))

    const firstSum = firstArr.reduce((result, number) => result + number, 0)
    const secondSum = secondArr.reduce((result, number) => result + number, 0)

    return firstSum + secondSum
}