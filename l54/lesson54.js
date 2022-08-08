// (*)Map - карты по типу данных это объект, но довольно спецефичный сщ своими методами

const shops = [
    {rise:500},
    {oil:200},
    {bread: 50}
]   

// //#1
// const map = new Map();

// map.set(shops[0], 5000);// сюда нужно передать ва аргумента  КЛЮЧ и ЗНАЧЕНИЕ
// // console.log(map); // вывдоит объект, у которого ключ это объект (с обычными объектами так нельзя)
// map.set(shops[1], 15000);
// map.set(shops[2], 25000);

// // map.set(shops[0], 5000)
// //     .set(shops[1], 15000)
// //     .set(shops[2], 25000);//можно еще так
// console.log(map);


//#2
const budget = [5000, 15000, 25000];
const map = new Map();
shops.forEach((shop, i) => {
    map.set(shop, budget[i]);
})
console.log(map);