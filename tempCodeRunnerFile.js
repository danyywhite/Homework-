let name = "Alex";
let age = 20;
let hasAccount = true;

console.log(`Привет, ${name}!`);
if ( age >= 18 && hasAccount === true) {
    console.log("Доступ разрешен");
} else {
    console.log("Доступ запрещен");
}
let fruty = ["apple","mango","lime" ];
fruty.push("limon");
console.log(fruty);

for (let i = 0; i < fruty.length; i++){
    console.log(fruty[i]);
}