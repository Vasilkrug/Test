export const  changingElByType = (arr, coefficient, boolean) => {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === Number(arr[i]) && boolean === false) {
            newArr.push(arr[i] * coefficient)
        } else if (arr[i] === Number(arr[i]) && boolean === true) {
            newArr.push(arr[i] / coefficient)
        }
    }
    return newArr
}
