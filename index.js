// Write a message to the console.
console.log("lolz");
const lolz = ``;
const kick = [`aall`, `faf`, 44, 33, `ddas,`, true];
kick.forEach((user) => {
	console.log(user);
});
/* На основе массива [1,2,3,5,8,9,10] сформировать новый массив,
каждый элемент которого будет хранить информацию о числе и его четности:
[{digit: 1, odd: true}, {digit: 2, odd: false}, {digit: 3, odd: true}...] */
const lolita = [1, 2, 3, 5, 8, 9, 10];
// lolita.forEach((item) => {
// 	if (item % 2 === 0) {
// 		console.log(`digit: ${item}, odd: ${false}`);
// 	} else {
// 		console.log(`digit: ${item}, odd: ${true}`);
// 	}
// }, {});
// console.log(jopa);
const jost = lolita.map((item) => ({
	digits: item,
	odd: Boolean(item % 2),
}));
console.log(jost);

const initialValue1 = [1, 2, 3, 5, 8, 9, 10];
const convertedArray = initialValue1.map((num) => ({
	value: num,
	odd: Boolean(num % 2),
}));
console.log(convertedArray);
//!----------------------------------------------
/* 2 Проверить, содержит ли массив 
[12, 4, 50, 1, 0, 18, 40] элементы, 
равные нулю. Если да - вернуть true.
*/
const nullOfMassive = [12, 4, 50, 1, 0, 18, 40];
const truesSome = nullOfMassive.some((item) => item === 0);
console.log(truesSome);
//!----------------------------------------------

/* 3 Проверить, все элементы массива имеют длину 
более 3х символов ['yes', 'hello', 'no', 'easycode', 'what']. 
Если да - вернуть true */

const long = ["yes", "hello", "no", "easycode", "what"];
const longMassive = long.every((item) => item.length > 3);
console.log(longMassive);
//!---------------------------------------------

/* 4 Дан массив объектов, где каждый объект содержит информацию
 о букве и месте её положения в строке 
 {буква: “a”, позиция_в_предложении: 1}:

[{char:"a",index:12}, {char:"w",index:8}, {char:"Y",index:10}, {char:"p",index:3}, {char:"p",index:2},
{char:"N",index:6}, {char:" ",index:5}, {char:"y",index:4}, {char:"r",index:13}, {char:"H",index:0},
{char:"e",index:11}, {char:"a",index:1}, {char:" ",index:9}, {char:"!",index:14}, {char:"e",index:7}]

Напишите функцию, которая из элементов массива соберет и вернёт
строку, основываясь на index каждой буквы. Например:
[{char:"H",index:0}, {char:"i",index: 1}, {char:"!",index:2}] → “Hi!” */

const initialValue = [
	{ char: "a", index: 12 },
	{ char: "w", index: 8 },
	{ char: "Y", index: 10 },
	{ char: "p", index: 3 },
	{ char: "p", index: 2 },
	{ char: "N", index: 6 },
	{ char: " ", index: 5 },
	{ char: "y", index: 4 },
	{ char: "r", index: 13 },
	{ char: "H", index: 0 },
	{ char: "e", index: 11 },
	{ char: "a", index: 1 },
	{ char: " ", index: 9 },
	{ char: "!", index: 14 },
	{ char: "e", index: 7 },
];

function getStr(arr) {
	const cloned = arr.slice();

	return cloned.sort((prev, next) => prev.index - next.index).reduce((acc, { char }) => acc + char, "");
}

console.log(str(initialValue));

//!----------------------------------------------------------
/* 5 Отсортируйте массив массивов так, 
чтобы вначале располагались наименьшие массивы 
(размер массива определяется его длиной):
 [  [14, 45],  [1],  ['a', 'c', 'd']  ] → 
 [ [1], [14, 45], ['a', 'c', 'd'] ] */

const massMass = [[55, 14, 16], [14, 45], [1], ["a", "c", "d"]];
const resSort = massMass.sort((prev, next) => prev.length - next.length);
console.log(resSort);
//! ---------------------------------------------------------

/* 6 Есть массив объектов:
[
    {cpu: 'intel', info: {cores:2, сache: 3}},
    {cpu: 'intel', info: {cores:4, сache: 4}},
    {cpu: 'amd', info: {cores:1, сache: 1}},
    {cpu: 'intel', info: {cores:3, сache: 2}},
    {cpu: 'amd', info: {cores:4, сache: 2}}
]

Отсортировать их по возрастающему количеству ядер (cores).
 */

const massToObj = [
	{ cpu: "intel", info: { cores: 2, сache: 3 } },
	{ cpu: "intel", info: { cores: 4, сache: 4 } },
	{ cpu: "amd", info: { cores: 1, сache: 1 } },
	{ cpu: "intel", info: { cores: 3, сache: 2 } },
	{ cpu: "amd", info: { cores: 4, сache: 2 } },
];
const cores = massToObj.sort((item, next) => next.info.cores - item.info.cores);
console.log(cores);

/* 7 . Создать функцию, которая будет принимать массив 
продуктов и две цены. 
Функция должна вернуть все продукты, 
цена которых находится в указанном диапазоне, 
и сортировать от дешевых к дорогим:

let products = [
    {title: 'prod1', price: 5.2}, {title: 'prod2', price: 0.18},
    {title: 'prod3', price: 15}, {title: 'prod4', price: 25},
    {title: 'prod5', price: 18.9}, {title: 'prod6', price: 8},
    {title: 'prod7', price: 19}, {title: 'prod8', price: 63}
];

filterCollection(products, 15, 30)
 → [{...price: 15}, {...price: 18.9}, {...price: 19}, {...price: 25}]

*/
let products = [
	{ title: "prod1", price: 5.2 },
	{ title: "prod2", price: 0.18 },
	{ title: "prod3", price: 15 },
	{ title: "prod4", price: 25 },
	{ title: "prod5", price: 18.9 },
	{ title: "prod6", price: 8 },
	{ title: "prod7", price: 19 },
	{ title: "prod8", price: 63 },
];

function filterCollection(prod, priceMin, priceMax) {
	const filt = prod.filter((item) => item.price >= priceMin && item.price <= priceMax);
	const minMax = filt.sort((item, next) => item.price - next.price);
	return minMax;
}
const mass = filterCollection(products, 15, 30);
console.log(mass);

let корзина = ["Kit-Kat", "Skittles"];
корзина.push("Snickers");
const newPush = ["Nuts", "Bounty"];
const jopa = корзина.concat(newPush);
console.log(jopa);

//!--------------------------------------
const lol1 = [
	[1, 2, 3, 4, 5],
	[5, 6, 7, 8, 9],
	[20, 21, 34, 56, 100],
];
let massiv;
let minNumb;
let minNumbPush = 0;

for (let i = 0; i < lol1.length; i++) {
	massiv = lol1[i];
	minNumb = Math.min(...massiv);
	minNumbPush = minNumbPush + minNumb;
}
console.log(minNumbPush);

var arr = ["Есть", "жизнь", "на", "Марсе"];

var arrLength = arr.map((item) => item.length);
console.log(arrLength);

const nums = [3, 4, 1, 2, 7];
const numsItog = nums.sort((item, next) => item - next);
console.log(numsItog);

//!-------------------------------------------------

const newMass = { name: "Jeremy", age: 24, role: "Software Engineer" };
const keys = Object.entries(newMass);

const sortNewMass = keys.sort();
console.log(sortNewMass);
//!-----------------------------------------
const coverage = `covfefe`;
const strings1 = `coverage coverage`;
const strings2 = `coverage`;

const convert = strings1.split(` `);

const convers = convert.map((iter) => {
	if (iter === strings2) {
		return `covfefe`;
	} else if (iter !== strings2 && convert.length <= 1) {
		return `${iter}  covfefe`;
	} else if (iter === ``) {
		return ` covfefe`;
	} else if (iter !== strings2 && convert.length >= 1) {
		return iter;
	}
});
if (convers[convers.length - 1] !== `coverage`) {
	convers.push(strings2);
}
console.log(convers);

const converToString = convers.join(` `);

console.log(converToString);
console.log(convers);
//!------------------------------------------
const massiveTrue = ["Nuts", "Hershey's", "Kit-Kat", "Milky Way", "M&M's", "Snickers", "Starburst", "Bounty"];
let letter = "s";

for (let i = 0; i < massiveTrue.length; i++) {
	let slovo = massiveTrue[i];
	if (letter === slovo[slovo.length - 1]) {
		console.log(`nelzya havat ${massiveTrue[i]}`);
	} else {
		console.log(`можно хавать ${massiveTrue[i]}`);
	}
}
//!-------------------------------------------
//https://www.codewars.com/kata/57a77726bb9944d000000b06/train/javascript
function mango(quantity, price) {
	if (price === 3) {
		const chislo = Math.floor(quantity / 3);
		const itogo = quantity - chislo;
		return itogo * price;
	} else {
		const chislo = Math.floor(quantity / 3);
		const itogo = quantity - chislo;
		return itogo * price;
	}
}

//!-------------------------------------------

//https://www.codewars.com/kata/5625618b1fe21ab49f00001f/solutions/javascript
function sayHello(name) {
	return "Hello, " + name;
}
//!--------------------------------------------
const lolz1 = `jopa`;
let massives = lolz1.split(``);
const removed = massives.splice(0, 1);
const removedLast = removed.pop();
console.log(removedLast);

//www.codewars.com/kata/5a3fe3dde1ce0e8ed6000097/train/javascript
function century(year) {
	if (year / 100 === Math.floor(year / 100)) {
		return year / 100;
	} else {
		return Math.floor(year / 100) + 1;
	}
}
//!---------------------------------
https://www.codewars.com/kata/559d2284b5bb6799e9000047/solutions/javascript
const lolh = `lohi lolz`;
const massivs = lolh.split(` `);
const massivNew = [];

for (let i = 0; i < massivs.length; i++) {
	massivNew[i] = massivs[i] + ` ` + massivs[i].length;
}
console.log(massivNew);

const massa = massivs.map((item) => item + ` ` + item.length);
console.log(massa);


