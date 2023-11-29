let test = 'abc';

if (test) {
	console.log('+++');
} else {
	console.log('---');
} // выведет +++

let test2 = 3;

if (test2) {
	console.log('+++');
} else {
	console.log('---');
} // выведет +++

let test3 = '';

if (test3) {
	console.log('+++');
} else {
	console.log('---');
} // выведет ---

let test4 = 3 * 'abc';

if (test4) {
	console.log('+++');
} else {
	console.log('---');
} // выведет ---

let test5 = null;

if (test5) {
	console.log('+++');
} else {
	console.log('---');
} // выведет ---

let test6 = false;

if (test6) {
	console.log('+++');
} else {
	console.log('---');
} // выведет ---

let test7;

if (test7) {
	console.log('+++');
} else {
	console.log('---');
} // выведет ---

let test8 = 0;

if (test8) {
	console.log('+++');
} else {
	console.log('---');
} // выведет ---

let test9 = '0';

if (test9) {
	console.log('+++');
} else {
	console.log('---');
} // выведет +++

let test10 = -1;

if (test10) {
	console.log('+++');
} else {
	console.log('---');
} // выведет +++
// Всё что число(не 0) и строка в кавычках будет правильно
