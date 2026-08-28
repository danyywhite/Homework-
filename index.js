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
//         console.log(this.brand + this.model); // здесь твой кодconsole.log(`${this.brand} ${this.model}`); улучшить код
//     }
// };
// car.showCar();

let car = {
    brand: "BMW",
    model: "M5",

    changeModel: function() {
        this.model = "M3";  // твой код
    }
};

car.changeModel();

console.log(car.model);