function checkPassword(password){
    if (password === "12345"){
        return "Заходи бро";
    } else {
        return "Развернись и зайди нормально";
    }
}
let result = checkPassword("234");
console.log(result);