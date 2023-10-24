const cars = [
    {
        make: 'Honda',
        model: 'CR-V',
        type: 'suv',
        amount: 14,
        price: 24045,
        onSale: true,
    },
    {
        make: 'Honda',
        model: 'Accord',
        type: 'sedan',
        amount: 2,
        price: 22455,
        onSale: true,
    },
    {
        make: 'Mazda',
        model: 'Mazda 6',
        type: 'sedan',
        amount: 8,
        price: 24195,
        onSale: false,
    },
    {
        make: 'Mazda',
        model: 'CX-9',
        type: 'suv',
        amount: 7,
        price: 31520,
        onSale: true,
    },
    {
        make: 'Toyota',
        model: '4Runner',
        type: 'suv',
        amount: 19,
        price: 34210,
        onSale: false,
    },
    {
        make: 'Toyota',
        model: 'Sequoia',
        type: 'suv',
        amount: 16,
        price: 45560,
        onSale: false,
    },
    {
        make: 'Toyota',
        model: 'Tacoma',
        type: 'truck',
        amount: 4,
        price: 24320,
        onSale: true,
    },
    {
        make: 'Ford',
        model: 'F-150',
        type: 'truck',
        amount: 11,
        price: 27110,
        onSale: true,
    },
    {
        make: 'Ford',
        model: 'Fusion',
        type: 'sedan',
        amount: 13,
        price: 22120,
        onSale: true,
    },
    {
        make: 'Ford',
        model: 'Explorer',
        type: 'suv',
        amount: 6,
        price: 31660,
        onSale: false,
    },
];

// Example 1 - Метод map
// Пусть функция getModels возвращает массив моделей(поле model) всех автомобилей.

// const getModels = cars => {
//     return cars.map(car => car.model)
// };

// console.table(getModels(cars));


// Example 2 - Метод map
// Пусть функция makeCarsWithDiscount возвращает новый массив объектов с изменным значением свойства price в зависимости от переданной скидки.


// const makeCarsWithDiscount = (cars, discount) => {
//     return cars.map(car => {
//         const discountedPrice = car.price - car.price * discount
//         return { ...car, price: discountedPrice }
//     })
// };

// console.table(cars);
// console.table(makeCarsWithDiscount(cars, 0.2));
// console.table(makeCarsWithDiscount(cars, 0.4));


// Example 3 - Метод filter
// Пусть функция filterByPrice возвращает массив автомобилей цена которых меньше чем значение параметра threshold.

// const filterByPrice = (cars, threshold) => {
//     return cars.filter(car => car.price < threshold);
// };

// console.table(filterByPrice(cars, 30000));
// console.table(filterByPrice(cars, 25000));


// Example 4 - Метод filter
// Пусть функция getCarsWithDiscount возвращает массив автомобилей свойство onSale которых true.

// const getCarsWithDiscount = cars => {
//     return cars.filter(car => car.onSale === true);
// };

// console.table(getCarsWithDiscount(cars));


// Example 5 - Метод filter
// Пусть функция getCarsWithType возвращает массив автомобилей тип которых совпадает со значением параметра type.

// const getCarsWithType = (cars, type) => {
//     return cars.filter(car => car.type === type)
// };

// console.table(getCarsWithType(cars, 'suv'));
// console.table(getCarsWithType(cars, 'sedan'));


// Example 6 - Метод find

// const getCarByModel = (cars, model) => {
//     return cars.find(car => car.model === model)
// };

// console.log(getCarByModel(cars, 'F-150'));
// console.log(getCarByModel(cars, 'CX-9'));
// console.log(getCarByModel(cars, 'X-9'));


// Example 7 - Метод sort ????????????????????????????????
// Пусть функция sortByAscendingAmount возвращает новый массив автомобилей отсортированный по возврастанию значения свойства amount.

// const sortByAscendingAmount = cars => {
//     return cars.sort((a, b) => a.amount - b.amount)
// };

// console.table(sortByAscendingAmount(cars));


// Example 8 - Метод sort ???????????????????????????????????
// Пусть функция sortByDescendingPrice возвращает новый массив автомобилей отсортированный по убыванию значения свойства price.

// const sortByDescendingPrice = cars => {
//     return cars.sort((a, b) => b.amount - a.amount)
// };

// console.table(sortByDescendingPrice(cars));


// Example 9 - Метод sort
// Пусть функция sortByModel возвращает новый массив автомобилей отсортированный по названию модели в алфавитном и обратном алфавитном порядке, в засисимости от значения параметра order.

// const sortByModel = (cars, order) => {
//     return cars.sort((a, b) => (order === 'asc') ? a.model.localeCompare(b.model) :
//         b.model.localeCompare(a.model)
//     )
// };

// console.table(sortByModel(cars, 'asc'));
// console.table(sortByModel(cars, 'desc'));


// Example 10 - Метод reduce
// Пусть функция getTotalAmount возвращает общее количество автомобилей(значение свойств amount).


// const getTotalAmount = cars => {
//     return cars
//         .reduce((total, car) => total + car.amount, 0)
// };

// console.log(getTotalAmount(cars));


// Example 11 - Цепочки методов
// Пусть функция getAvailableCarNames возвращает массив моделей автомобилей, но только тех, которые сейчас на распродаже.

// const getModelsOnSale = cars => {
//     return cars
//         .filter(car => car.onSale)
//         .map(car => car.model)
// };

// console.table(getModelsOnSale(cars));


// Example 12 - Цепочки методов
// Пусть функция getSortedCarsOnSale возвращает массив автомобилей на распродаже(свойство onSale), отсортированных по возрастанию цены.

// const getSortedCarsOnSale = cars => {
//     return cars
//         .filter(car => car.onSale)
//         .sort((a, b) => a.amount - b.amount)
// };

// console.table(getSortedCarsOnSale(cars));






/**
  |============================
  | Codewars
  |============================
*/

// Example №1
// Create a method that takes an array / list as an input, and outputs the index at which the sole odd number is located.
// This method should work with arrays with negative numbers.If there are no odd numbers in the array, then the method should output - 1.


// function oddOne(arr) {
//     return arr.findIndex(x => x % 2 != 0);
// }

// console.log(oddOne([2, 4, 6, 7, 10])) // => 3
// console.log(oddOne([2, 16, 98, 10, 13, 78]))// => 4
// console.log(oddOne([4, -8, 98, -12, -7, 90, 100]))// => 4
// console.log(oddOne([2, 4, 6, 8])) // => -1


// Example №2

// You want to create secret messages which can be deciphered by the Decipher this! kata.Here are the conditions:

// Your message is a string containing space separated words.
// You need to encrypt each word in the message using the following rules:
// The first letter must be converted to its ASCII code.
// The second letter must be switched with the last letter
// Keepin' it simple: There are no special characters in the input.

// function encryptThis(text) {
//     // Implement me! :)
//     const words = text.split(" ");
//     const encryption = words.map(word => {
//         const firstLetter = word.charCodeAt(0);
//         const secondLetter = word.length > 2 ? word[1] : "";
//         const otherLetters = word.slice(2, -1);
//         const lastLetter = word.length > 1 ? word[word.length - 1] : secondLetter;

//         return `${firstLetter}${lastLetter}${otherLetters}${secondLetter}`
//     })
//     return encryption.join(" ");

// }


// console.log(encryptThis("A wise old owl lived in an oak"))
// console.log(encryptThis("good"))
// console.log(encryptThis("hello world"))

// "65 119esi 111dl 111lw 108dvei 105n 97n 111ka"
// "65 119esi 111dl 111lw 108dvei 105nn 97nn 111ka"