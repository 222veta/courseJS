//ClassList и делегирование событий

const btns = document.querySelectorAll('button'),
    wrapper = document.querySelector('.btn-block');

// console.log(btns[0].classList.length);//свойство позволяющее узнать сколько классов у элемента  (2)
// console.log(btns[0].classList.item(0)); //поолоучаем класс который идет под индексом 0, те самый перый класс blue
// console.log(btns[0].classList.add('red', 'vfwed'));//добавляем элементу класс red
// console.log(btns[0].classList.remove('blue'));// удаляем у этого элемента класс blue 
// console.log(btns[0].classList.toggle('blue'));//тоглить, те если данный класс есть на элементето он его удаляет, а если нет, то добавляет


// if (btns[1].classList.contains('red')) { //проверяем есть ли определенный класс на определенном элементе, если возвращается правда, то выполняется действие
// console.log('red');
// }

btns[0].addEventListener('click', () =>{
    // if(!btns[1].classList.contains('red')) {//если у второй кнопки нет класса red 
    //     btns[1].classList.add('red');
    // } else {
    //     btns[1].classList.remove('red');
    // }
    btns[1].classList.toggle('red'); // то же самое
});
//console.log(btns[0].className);// выводит в консоль все классы элемента. УСТАРЕЛО - неудобно пользоваться

//2часть ДЕЛЕГИРОВАНИЕ СОБЫТИЙ (берем элемент который является роителем для нужных элеметов)

wrapper.addEventListener('click', (event) =>{ //event - содержит всю информацию об элементе на котором происходит событие
    // console.dir(event.target);// как узнать что может even (с помощью dir мы увидим event.target в качестве объекта)
    if(event.target && event.target.tagName == 'BUTTON') {//BUTTON подсмотрели в консоли
    console.log('helo'); // сообщение выводится  олько тогнда когда мы кликаем на кнопку, хотя событие повесили на див(родителя)
    //  тк event.target есть только на кнопках и их tagName = button
    }
});


const btn = document.createElement('button');
btn.classList.add('red');//и эта кнопка пудет подчитяться addListener 
wrapper.append(btn);
// если то же самое проделать с методом forEach вместо делегировани, то обработчик событий не будет работать на новой кнопке//
