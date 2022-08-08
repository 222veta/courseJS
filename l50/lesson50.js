//живые коллекции и полезные методы

const boxesQuery = document.querySelectorAll('.box');   
const boxesGet = document.getElementsByClassName('box');
//2:
boxesQuery.forEach(box=> {
    if(box.matches('.this')) {console.log(box);}  // ищет внутри себя
})//в консоль мыполучили именно тот элемен у которого есть класс this



//1:
// boxesQuery[0].remove();// выадст весь псевдомассив без изменений(хотя элементы удалятся)(получаем три элемента), отопражает отпечаток прошлого- статичная коллекция(есть методы)
// boxesGet[0].remove();//выдаст в консоли псевдомассив с одним элементом, веь два предыущих уалили. выдает уже измененное(получаем один элементов), отображает текущее состояние - живая коллекция, но у таких псевдомассивов нет методов для работы с ними

// for(let i = 0; i < 5; i++){
//     const div = document.createElement('div');
//     div.classList.add('box');
//     document.body.append(div); 
// }
// console.log(boxesGet);
// console.log(boxesQuery);
// //console.log(document.body.children);// еще один метод как вывести в консоль псевдомассив с дивами

// //команда которая позволяет создать массив из массивоподобного объекта:
// console.log(Array.from(boxesGet));//образуется обычный массив из текущего состояния дом-дерева


//3:
//добавили родительский див wrapper
console.log(boxesQuery[0].closest('.wrapper'));//найди первый элемент с таким селектором, который будет у тебя родителем closest - ближайший, в скобочки помещаем селектор    ищет у своих родителей
 