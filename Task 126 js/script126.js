// Задание 1
let day = 13;
if (day > 1 && day < 11) {
console.log('Переменная в первой декаде');
} else if (day > 11 && day < 21) {
    console.log('Переменная во второй декаде');
} else if (day > 21 && day < 31) {
    console.log("Переменная в третьей декаде");
}
// Задание 2
let da = 45;
if (da > 1 && da < 11) {
console.log('Переменная в первой декаде');
} else if (da > 11 && da < 21) {
    console.log('Переменная во второй декаде');
} else if (da > 21 && da < 31) {
    console.log("Переменная в третьей декаде");
} else if (da < 1 || da > 31) {
    console.log('Переменная ваще не в месяце');
}
