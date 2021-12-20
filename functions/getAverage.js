export const getAverage = (arr) => {
    let sum = 0
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === Number(arr[i])) {
            newArr.push(arr[i])
            sum += arr[i]
        }
    }
    return sum / newArr.length;
};