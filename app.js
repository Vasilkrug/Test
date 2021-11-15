import {sum} from "./functions/sum";
import { arrayOfNums } from "./functions/arrayOfNums";
import { largestNumber } from "./functions/largestNumber";
import { smallestNumber } from "./functions/smallestNumber";
import { orderedArr } from "./functions/orderedArr";
import {randomNumbers} from "./functions/randomNumbers";

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

/** пример вызова функции суммы */
make('Суммирование значений', sum(1,3,5,7))
make('Массив чисел по заданным параметрам', arrayOfNums(12,22))
make('Поиск наибольшего числа из массива', largestNumber(23,55,8,171))
make('Наименьшее число из массива', smallestNumber(12,22,-67,777,))
make ('Упорядоченный массив', orderedArr(1,33,2,5,77))
make('Массив случайных чисел', randomNumbers(5))


