export const insertElinArr = (arr,num,pos)=> {
    for (let i = arr.length; i >= pos ; i--) {
        arr[i] = arr[i - 1]
    }
    arr[pos - 1] = num
    return arr
}