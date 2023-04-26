// type.ts
function printAge(age) {
    console.log(age);
}
printAge(31);
var user = {
    name: "Seok",
    age: 31
};
function introduce(user) {
    console.log("\uC548\uB155\uD558\uC138\uC694 ".concat(user.age, "\uC138 ").concat(user.name, "\uC785\uB2C8\uB2E4."));
}
introduce(user);
function getProductResponse(res) {
    return res.products;
}
function getOrderResponse(res) {
    return res.orders;
}
var player = {
    age: 10,
    name: "asd",
    weight: 60
};
console.log(player);
