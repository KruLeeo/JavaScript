let arr = [
    [
        1, 2, 3
    ], 
    [
        4, 5
    ], 
    [
        6
    ]
];
let summ = 0;
for (let subArr of arr) {
	for (let elem of subArr) {
        summ += elem;
	}
}
console.log(summ);

let arr2 = [
    [
        [1, 2], [3, 4]
    ], 
    [
        [5, 6], [7, 8]
    ]
];
let summ2 = 0;
for (let subArr2 of arr2) {
	for (let x of subArr2) {
        for (let elem2 of x)
        summ2 += elem2;
	}
}
console.log(summ2);