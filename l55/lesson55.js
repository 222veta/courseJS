//(*)set - особый вид коллекции(по типу массива), где каждое значениеможет повторяться только один раз(те массив в котором все значения разные)

const arr = [1, 1, 2, 2, 4, 5, 6, 5, 4];

const set = new Set(arr);

console.log(set); // {1,2,4,5,6}

//Методы сэта:

set.add(9); // добавляет 9
console.log(set);

set.delete(6);//удаляем элемент 6
set.has(1);//проверяем существует ли еденица
//set.clear()//очистить
set.size;

console.log(set);

//перебрать:
//for(let value of set) console.log(value); //все элементы выводятся построчно в консоль

// перебрать способ 2
// set.forEach(value, valueAgaing, set) => {
//console.log(value,valueAgaing);
//}

console.log(set.values());//{ 1, 2, 4, 5, 9 }

console.log(set.keys()); //{ 1, 2, 4, 5, 9 }

console.log(set.entries());//{ [ 1, 1 ], [ 2, 2 ], [ 4, 4 ], [ 5, 5 ], [ 9, 9 ] }

//функция "помошник" быстрая фильтрация
function unique(arr){
    return Array.from(new Set(arr));//создаем массив из отсортированных  набора данных
}
