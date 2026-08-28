/*



"Ноль" — если равно 0

Проверь её минимум с 3 разными числами. */


// function checkNumber(number){
//     if(number > 0){
//         return "Положительное";
//     } else if(number === 0){
//         return "Ноль";
//     } else { 
//         return "Отрицательное";
//     } 
// }
//     let result = checkNumber(0);
//     console.log(result);


/*🟡 Задание 2 — информация о пользователе

Создай функцию:

checkUser(name, age, hasAccount)

Она должна:

Получить имя, возраст и наличие аккаунта.
Если возраст 18+ И аккаунт есть → вернуть:
"Alex, доступ разрешен"
Иначе → вернуть:
"Alex, доступ запрещен"

Используй &&. */

// function checkUser(userName, age, hasAccount) {
//     console.log("Как тебя зовут?" + userName, "Сколько тебе лет?" + age, "у тебя есть аккаунт?" + hasAccount);
//     if (age >= 18 && hasAccount === true){
//         return userName + ", доступ разрешен";
//     }else {
//         return userName + ", доступ запрещен";
//     }
// }
// let userName = "Danil";
// let age = 25;
// let hasAccount = true;
// let result = checkUser(userName, age, hasAccount);
// console.log(result);

// let fruits = ["apple", "banana", "orange"];

// function showFruits() {
//     for (let i = 0; i < fruits.length; i++) {
//         console.log(fruits[i]);
//     }
// }
// showFruits();
// fruits.push("kiwi");
// showFruits();

/*🔴 Бонус, если будет время

Создай функцию:

sum(a, b)

которая возвращает сумму.

А затем функцию:

multiply(a, b)

которая возвращает произведение.

После этого попробуй сделать:

результат суммы × результат умножения

Например, если sum(2, 3) и multiply(4, 5), ты должен получить результат уже самостоятельно, используя переменные. */

// function sum(a,b) {
//     return a + b;
// }
// function multiply(a,b) {
//     return a * b;
// }

// let result = sum(2,3) * multiply(4,5);
// console.log(result);

// let car = {
//     brand: "BMW",
//     model: "M5",
//     year: 2024
// };

// car.model = "M3";
// car.price = 50000;
// console.log(car);


/* Попробуй:

вывести имя;
изменить возраст на 26;
добавить новое свойство job со значением "developer". */

// let user = {
//     name: "Danil",
//     age: 25,
//     city: "Dallas"
// };

// console.log(user.name);
// user.age = 26;
// user.devVops = "developer";
// console.log(user);


// let users = [
//     { name: "Danil", age: 26 },
//     { name: "Alex", age: 30 },
//     { name: "Bob", age: 22 }
// ];
// console.log(users[0].name);

// let users = [
//     { name: "Danil", age: 26 },
//     { name: "Alex", age: 30 },
//     { name: "Bob", age: 22 }
// ];

// for (let i = 0; i < users.length; i++){
//     console.log(users[i].name);
// }


// let users = [
//     { name: "Danil", age: 26 },
//     { name: "Alex", age: 30 },
//     { name: "Bob", age: 22 }
// ];
// for (let i = 0; i < users.length; i++){
//     if(users[i].age>= 25) {
//         console.log(users[i].name);
//     }
// }


// let phone = {
//     brand: "Apple",
//     model: "iPhone 15",
//     price: 999
// };

// phone.model = "Iphone 16"
// phone.price = 1999
// console.log(phone.model,phone.price)

// let phone = {
//     brand: "Apple",
//     model: "iPhone 15",
//     price: 999
// };

// phone.color = "black";
// phone.storage = "256gb";
// console.log(phone);

// let user = {
//     name: "Danil",
//     age: 26,
//     city: "Tampa",
//     job: "developer"
// };

// delete user.city;
// console.log(user);

// let user = {
//     name: "Danil",
//     age: 26,
//     city: "Tampa"
// };

// let property = "age";

// console.log(user[property])

// let user = {
//     name: "Danil",
//     age: 26
// };
// function showUser(user) {
//     console.log(user.age)
//     console.log(user.name) 
// }
// showUser(user);

// let user = {
//     name: "Danil",
//     age: 26
// };

// function increaseAge(user) {
//     user.age++;
// }
// function addJob(user) {
//     user.job = "developer";
// }

// increaseAge(user);
// addJob(user);


// console.log(user);


// let user = {
//     name: "Danil",
//     age: 26,

//     sayHello: function() {
//         console.log("Привет!");
//     }
// };

// user.sayHello();

// let car = {
//     brand: "BMW",
//     model: "M5",

//     showCar: function() {
//         console.log(this.brand + this.model); // здесь твой код console.log(`${this.brand} ${this.model}`); улучшить код
//     }
// };
// car.showCar();

// let car = {
//     brand: "BMW",
//     model: "M5",

//     changeModel: function() {
//         this.model = "M3";  // твой код
//     }
// };

// car.changeModel();

// console.log(car.model);

// let user = {
//     name: "Danil",
//     age: 26,

//     birthday: function() {
//         this.age++;
//     }
// };
// user.birthday(user);
// console.log(user);

// let user = {
//     name: "Danil",
//     age: 26,

//     birthday: function() {
//         this.age++;
//     }
// };

// console.log(user)

// let phone = {
//     brand: "Apple",
//     model: "iPhone 16",
//     price: 1999,

//     showInfo: function() {
//         console.log(this.brand + " " + this.model + " - " + "$" + this.price);//   либо console.log(`${this.brand} ${this.model} - $${this.price}`);
//     }
// };
// phone.showInfo();

// let fruits = ["apple", "banana", "orange", "kiwi"];
//     fruits.forEach(function(fruit){
//         console.log(fruit);
//     })

// let users = [
//     { name: "Danil", age: 26 },
//     { name: "Alex", age: 30 },
//     { name: "Bob", age: 22 }
// ];
// users.forEach(function(user){
//     console.log(user.name)
// })

// let numbers = [1, 2, 3, 4, 5];

// let doubledNumbers = numbers.map(function(arrayNum){
//     return arrayNum * 2
// })  

// console.log(doubledNumbers);


// let users = [
//     { name: "Danil", age: 26 },
//     { name: "Alex", age: 30 },
//     { name: "Bob", age: 22 }
// ];

// let names = users.map(function(nameUs){
//     return nameUs.name;
// });

// console.log(names);


// let users = [
//     { name: "Danil", age: 26 },
//     { name: "Alex", age: 30 },
//     { name: "Bob", age: 22 }
// ];

// let  adults = users.filter(function(user){
//     return user.age >= 25;
// });

// console.log(adults);



// let users = [
//     { name: "Danil", age: 26, hasAccount: true },
//     { name: "Alex", age: 30, hasAccount: false },
//     { name: "Bob", age: 22, hasAccount: true },
//     { name: "Mike", age: 28, hasAccount: true }
// ];

// let allowedUsers = users.filter(function(user){
//     return user.age >= 25 && user.hasAccount === true;
// });

// console.log(allowedUsers);

// let users = [
//     { name: "Danil", age: 26, hasAccount: true, city: "Tampa" },
//     { name: "Alex", age: 30, hasAccount: false, city: "Miami" },
//     { name: "Bob", age: 22, hasAccount: true, city: "Tampa" },
//     { name: "Mike", age: 28, hasAccount: true, city: "Miami" },
//     { name: "John", age: 35, hasAccount: true, city: "Tampa" }
// ];

// let allowedUsers = users.filter(function(user){
//         return user.age >= 25 && user.hasAccount === true && user.city === "Tampa"
// });

// console.log (allowedUsers);




/*
получить: 
["Danil", "Mike"]

возраст >= 25
есть аккаунт
в результате нужны только имена*/

// let users = [
//     { name: "Danil", age: 26, hasAccount: true },
//     { name: "Alex", age: 30, hasAccount: false },
//     { name: "Bob", age: 22, hasAccount: true },
//     { name: "Mike", age: 28, hasAccount: true }
// ];

// let allowedUs = users.filter(function(user){
//         return user.age >= 25 && user.hasAccount === true 
            
// });

// let aboutPl = allowedUs.map(function(abo){
//     return abo.name
// })
// console.log(aboutPl);


// let users = [
//     { name: "Danil", age: 26, hasAccount: true },
//     { name: "Alex", age: 30, hasAccount: false },
//     { name: "Bob", age: 22, hasAccount: true },
//     { name: "Mike", age: 28, hasAccount: true }
// ];

// let names = users
//     .filter(function(user){
//         return user.age >= 25 && user.hasAccount === true;
//     })
//     .map(function(user) {
//         return user.name
//     });

//     console.log(names);


// let users = [
//     { name: "Danil", age: 26 },
//     { name: "Alex", age: 30 },
//     { name: "Bob", age: 22 },
//     { name: "Mike", age: 28 }
// ];

// let user = users.find(function(userm){
//     return userm.age === 28;
// });

// console.log(user)












/* 
🟢 Уже прошёл
1. Основы JavaScript
✅ let
✅ переменные
✅ строки
✅ числа
✅ boolean
✅ console.log()
✅ операторы ===, >, <, >=
✅ логический оператор &&
2. Условия
✅ if
✅ else if
✅ else
✅ несколько условий
✅ проверки true / false

Ты делал, например:

if (age >= 18 && hasAccount === true) {
    // ...
}
3. Массивы
✅ создание массива
✅ индексы
✅ почему отсчёт начинается с 0
✅ fruits[0]
✅ изменение элемента
✅ .length
✅ push()
✅ shift()
✅ перебор массива через for
4. Циклы
✅ for
✅ i
✅ i < array.length
✅ array[i]
✅ перебор массивов
✅ перебор массивов объектов
5. Функции
✅ создание функций
✅ параметры
✅ аргументы
✅ вызов функций
✅ return
✅ функции с несколькими параметрами
✅ функции, которые что-то возвращают
✅ функции, которые просто выполняют действие
✅ разница между return и console.log()

Например:

function sum(a, b) {
    return a + b;
}
🟢 Объекты — ты прошёл большой блок
6. Объекты
✅ создание объекта
✅ свойства
✅ получение свойства через .
✅ изменение свойства
✅ добавление свойства
✅ удаление через delete
✅ object[property]
✅ передача объекта в функцию

Ты уже делал:

user.age = 26;
user.job = "developer";
delete user.city;
7. Массивы объектов
✅ массив объектов
✅ перебор объектов
✅ users[i].name
✅ users[i].age
✅ фильтрация объектов по условиям

Например:

if (users[i].age >= 25) {
    console.log(users[i].name);
}
8. Методы объектов
✅ функция внутри объекта
✅ вызов метода
✅ this
✅ получение свойств через this
✅ изменение свойств через this

Ты уже делал:

let car = {
    brand: "BMW",
    model: "M5",

    changeModel: function() {
        this.model = "M3";
    }
};

Это уже хороший уровень для твоего текущего этапа.

🟢 Методы массивов — тоже начал очень хорошо
9. forEach()
✅ обычный массив
✅ массив объектов
✅ получение свойств объекта внутри forEach()
users.forEach(function(user) {
    console.log(user.name);
});
10. map()
✅ создание нового массива
✅ преобразование элементов
✅ map() с объектами
✅ получение свойства объекта через map()

Ты делал:

let names = users.map(function(user) {
    return user.name;
});
11. filter()
✅ фильтрация чисел
✅ фильтрация объектов
✅ условия внутри filter()
✅ несколько условий через &&
✅ filter() + map()
✅ цепочка методов

Например:

let names = users
    .filter(function(user) {
        return user.age >= 25 && user.hasAccount === true;
    })
    .map(function(user) {
        return user.name;
    });

🔥 Это уже очень полезный практический JavaScript.

12. find()
✅ поиск элемента
✅ поиск объекта по условию
✅ понимание разницы между find() и filter()

Ты только что правильно сделал:

let user = users.find(function(user) {
    return user.age === 28;
});
🟡 Что сейчас изучаем

Ты сейчас примерно здесь:

forEach() ✅
map()     ✅
filter()  ✅
find()    ✅
↓
some()    ← следующий
every()

*/


/*ЭКЗАМЕН*/



/* 🟢 Задание 1 — массив

Есть:

let fruits = ["apple", "banana", "orange", "kiwi"];

Напиши код, который:

добавит "mango"
удалит первый элемент
выведет итоговый массив

Ожидаемый результат:

["banana", "orange", "kiwi", "mango"] */

/* let fruits = ["apple", "banana", "orange", "kiwi"];
fruits.push("mango");
fruits.shift([0]);
console.log(fruits); */

/* 🟢 Задание 2 — функция

Создай функцию:

checkNumber(number)

Она должна возвращать:

"Положительное" если число больше 0
"Ноль" если число равно 0
"Отрицательное" если число меньше 0

Проверь её на трёх разных числах. */

// function checkNumber(number){
//     if(number > 0){
//         return "Положительное";
//     } else if(number === 0){
//         return "Ноль";
//     } else { 
//         return "Отрицательное";
//     } 
// }
//     let result = checkNumber(0);
//     let result2 = checkNumber(1);
//     let result3 = checkNumber(-1);
//     console.log(result);
//     console.log(result2);
//     console.log(result3);


// 🟢 Задание 3 — функция + условия

// Создай:

// checkUser(name, age, hasAccount)

// Доступ разрешён, если:

// age >= 18
// И
// hasAccount === true

// Функция должна вернуть:

// "Danil, доступ разрешен"

// или:

// "Danil, доступ запрещен"

// Проверь функцию минимум на 2 разных пользователях.

// function checkUser(name, age, hasAccount) {
//     if (age >=18 && hasAccount === true){
//         return name + " доступ разрешен";
//     } else {
//         return name + " доступ запрещен";
//     }
// };

// let name = "Dima";
// let age = 19;
// let hasAccount = true;
// checkUser(name, age, hasAccount);


// 🟡 Задание 4 — объект

// Создай объект:

// let phone = {
//     brand: "Apple",
//     model: "iPhone 16",
//     price: 1999
// };

// Затем:

// измени price на 1799
// добавь color: "black"
// добавь storage: "256GB"
// удали brand
// выведи объект

// let phone = {
//     brand: "Apple",
//     model: "iPhone 16",
//     price: 1999
// };

// phone.price = 1799;
// phone.color = "black";
// phone.storage = "256GB"
// delete phone.brand;
// console.log(phone);