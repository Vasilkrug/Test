export const orderedArr = (sort, ...arr) => {
    if (sort === 'increasing') {
        let newArr = arr.sort((a, b) => a - b)
        return newArr
    } else if (sort === 'decreasing') {
        let newArr = arr.sort((a, b) => b - a)
        return newArr
    }

} 




