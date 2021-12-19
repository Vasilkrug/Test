export const  createArrays = (quantity, elements)=> {
    let arr = [];
    for (let i = 0; i < quantity; i++) {
        arr[i] = []
        for (let j = 0; j < elements; j++) {
            arr[i].push(j + 1);
        }
    }
    return arr;
}

