export const quantityElementsArrs = (arr1, arr2, arr3) => {

    const firstArr = arr1.filter(item => (item === Number(item)))
    const secondArr = arr2.filter(item => (item === Number(item)))
    const thirdArray = arr3.filter(item => (item === Number(item)))

    return firstArr.length + secondArr.length + thirdArray.length
}
