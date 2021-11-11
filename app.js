import {sum} from "./functions/sum";
import { arrayofnums } from "./functions/arrayofnums";
import { largestnumber } from "./functions/largestnumber"; 
import { smallestnumber } from "./functions/smallestnumber";
import { orderedarr } from "./functions/orderedarr";

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
make('Суммирование значений', sum(0, 99, 20, 20, 21))
make('Массив чисел по заданным параметрам', arrayofnums(12,22))
make('Поиск наибольшего числа из массива', largestnumber(23,55,8,171))
make('Наименьшее число из массива', smallestnumber(12,22,-67,777,))
make ('Упорядоченный массив', orderedarr(12,44,777,34,7))
