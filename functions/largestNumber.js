export const largestNumber = (...arr) =>{
    arr.sort((a, b) => b - a)
    return arr[0]
}
