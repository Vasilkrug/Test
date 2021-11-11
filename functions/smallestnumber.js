export function smallestnumber(...arr){
    arr.sort((a, b) => a - b)
    return arr[0]
}