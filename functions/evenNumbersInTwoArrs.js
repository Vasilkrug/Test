// FIXME: а вот тут у тебя webStorm не ругается на названии функции?
export const evenNumbersInTwoArrs = (arr1, arr2) => {
    const firstEvenArr = arr1.filter(item => (item % 2 === 0 && item === Number(item)))
    const secondEvenArr = arr2.filter(item => (item % 2 === 0 && item === Number(item)))
    return [...firstEvenArr, ...secondEvenArr]
}