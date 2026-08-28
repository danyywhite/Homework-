let phone = {
    brand: "Apple",
    model: "iPhone 16",
    price: 1999
};

phone.price = 1799;
phone.color = "black";
phone.storage = "256GB"
delete phone.brand;
console.log(phone);