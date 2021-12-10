export const combinTwoArrows = (arr1, arr2) => {
    const firstArr = arr1.filter(item => (item === Number(item)))
    const secondArr = arr2.filter(item => (item === Number(item)))

    return [...firstArr, ...secondArr]
}
