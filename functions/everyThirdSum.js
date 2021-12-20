export const getEveryThirdSum = (arr) => {
    let sum = 0
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === Number(arr[i])) {
            newArr.push(arr[i])
        }
    }
    for (let j = 0; j < newArr.length; j++) {
        if ((j + 1) % 3 === 0) {
            sum += newArr[j]
        }
    }
    return sum
}
