export const randomNumbers = (num) => {
  return  Array.from({length: num}, () => Math.floor(Math.random()  *  1000))

}
