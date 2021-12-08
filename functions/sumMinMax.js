export const SumMinMax = (...args) => {
    const max = args.reduce((result, number) => (result > number) ? result : number, 0)

    const min = args.reduce((result, number) => (result < number) ? result :number)

    return +min + +max

}


