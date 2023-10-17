let arr = [1, 2, 3]; //Создаем и выводим массив чисел и буков
alert(arr);
console.log(arr);
let arr2 = ['a' , 'b' , 'c'];
alert(arr2);
console.log(arr2);
let arr3 = [1, 2, 3]; // выводим то, что просят
alert(arr3[0]);
alert(arr3[1]);
alert(arr3[2]);
alert(arr3[0] + arr3[1] + arr3[2]);
let arr4 = ['a', 'b', 'c', 'd'];
alert(arr4[0] + arr4[1] + arr4[2] + arr4[3]);
let arr5 = ['a', 'b', 'c', 'd', 'e']; // длина массива и последний элемент
alert(arr5.length);
alert(arr5[arr5.length - 1]);
let arr6 = ['a', 'b', 'c']; // Меняем содержание массива
arr6[0] = 1;
arr6[1] = 2;
arr6[2] = 3;
alert (arr6);
let arr7 = [1, 2, 3, 4, 5]; // Складываем всё с 3
arr7[0] += 3;
arr7[1] += 3;
arr7[2] += 3;
arr7[3] += 3;
arr7[4] += 3;
alert(arr7);
let arr8 = [1, 2, 3]; // Инкремент
arr8[0]++;
arr8[1]++;
arr8[2]++;
alert(arr8);
let arr9 = []; // Приколько заполняем
arr9[0] = 1;
arr9[1] = 2;
arr9[2] = 3;
alert(arr9);
let arr10 = [1, 2, 3];
arr10[3] = 4;
arr10[4]= 5;
alert(arr10);
let arr11 = []; // Заполняем через push
arr11.push(1);
arr11.push(2);
arr11.push(3);
alert(arr11);
let arr12 = [1, 2, 3];
arr12.push(4);
arr12.push(5);
alert(arr12);
let arr13 = ['a', 'b', 'c']; // key
let key = 2;
alert(arr13[key]);
let arr14 = [1, 2, 3, 4, 5];
let key1 = 1;
let key2 = 2;
alert(arr14[key1]+ arr14[key2]);
let arr15 = ['a', 'b', 'c', 'd', 'e'];
delete arr15[2];
delete arr15[3];
alert(arr15.length); 
