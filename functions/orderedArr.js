export const orderedArr = (sort, arr) => {
    if (sort === 'increasing') {
        arr = arr.sort((a, b) => a - b)
        return arr
    } else if (sort === 'decreasing') {
         arr.sort((a, b) => b - a)
        return arr
    }
}





