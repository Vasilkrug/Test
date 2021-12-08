export const orderedArr = (sort, arr) => {
    if (sort === 'increasing') {
        let newArrInc = arr.sort((a, b) => a - b)
        return newArrInc
    } else if (sort === 'decreasing') {
        let newArrDesc = arr.sort((a, b) => b - a)
        return newArrDesc
    }

} 




