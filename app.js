import {sum} from "./functions/sum";
import { arrayOfNums } from "./functions/arrayOfNums";
import { largestNumber } from "./functions/largestNumber";
import { smallestNumber } from "./functions/smallestNumber";
import { orderedArr } from "./functions/orderedArr";
import {randomNumbers} from "./functions/randomNumbers";
import {largestEvenNumber} from './functions/largEvenNumber';
import {largOddNumber} from "./functions/largOddNumber";
import {sumEvenNumbers} from "./functions/sumEvenNumbers";
import {sumOddNumbers} from "./functions/sumOddNumbers";
import {sumMinMax} from "./functions/sumMinMax"
import {oddNumberLength} from "./functions/oddNumbersLength";
import {combinTwoArrows} from "./functions/combinTwoArrows";
import {sumTwoArrows} from "./functions/sumTwoArrows";
import {quantityElementsArrs} from "./functions/quantityElementsArrs";
import {evenNumbersInTwoArrs} from "./functions/evenNumbersInTwoArrs";

/** вот тут я буду вызывать твои функции, также тут ты сможешь тестировать */
/**
 *
 * @param name | название функции - обязательно передавать его
 * @param customFunction | функция для выполнения
 */
const make = (name = '', customFunction) => {
    if (!name) {
        return console.error('No function name provided')
    }
    try {
        console.log(`Result of function ${name} = `, customFunction)
    } catch (e) {
        console.log(`Error function ${name}, error: `, e)
    }
}

let myArray = ['99', '2', 1, '9', 23, '99']

let myArray2 = [10, '299', 1, 9, '23', '99']
let myArray3 = [2, '4', 'э', 9, '23', '99']

/** пример вызова функции суммы */
make('Суммирование значений', sum(myArray))
// first 5
make('Массив чисел по заданным параметрам', arrayOfNums(12,22))
make('Поиск наибольшего числа из массива', largestNumber(myArray))
make('Наименьшее число из массива', smallestNumber(myArray))
make('Упорядоченный массив', orderedArr( 'increasing',myArray))
make('Массив случайных чисел', randomNumbers(5))
// second 5
make('Большее четное число', largestEvenNumber(myArray))
make('Большее нечетное число', largOddNumber(myArray))
make('Сумма четных чисел', sumEvenNumbers(myArray))
make('Сумма нечетных чисел', sumOddNumbers(myArray))
make('Сумма минимума и максимума', sumMinMax(myArray))

// third 5
make('Количество нечетных чисел в массиве', oddNumberLength(myArray3))
make('Объединение двух массивов', combinTwoArrows(myArray,myArray2))
make('Сумма двух массивов', sumTwoArrows(myArray,myArray2))
make('количество элементов трех массивов', quantityElementsArrs(myArray,myArray2,myArray3))
make('поиск четных элементов двух массивов', evenNumbersInTwoArrs(myArray2,myArray3))

// fourth 5
// just for test
