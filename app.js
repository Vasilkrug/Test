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
let myArray = [10, '2', 1, 9, 23, 99]
/** пример вызова функции суммы */
make('Суммирование значений', sum(1,5,6,8))
make('Массив чисел по заданным параметрам', arrayOfNums(12,22))
make('Поиск наибольшего числа из массива', largestNumber(23,55,8,171))
make('Наименьшее число из массива', smallestNumber(myArray))
make ('Упорядоченный массив', orderedArr( 'decreasing',1,4,9,22))
make('Массив случайных чисел', randomNumbers(5))
make('Большее четное число', largestEvenNumber(24,60,81,121,4))
make('Большее нечетное число', largOddNumber(13,45,8,12,41))
make('Сумма четных чисел', sumEvenNumbers(2,45,2,2,41))
make('Сумма нечетных чисел', sumOddNumbers(11,2,4,1,5))


