export const smallestNumber = (arr) =>{
    arr.sort((a, b) => a - b)
    return arr[0]
}