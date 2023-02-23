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
// https://www.codewars.com/kata/559d2284b5bb6799e9000047/solutions/javascript
// const lolh = `lohi lolz`;
// const massivs = lolh.split(` `);
// const massivNew = [];

// for (let i = 0; i < massivs.length; i++) {
// 	massivNew[i] = massivs[i] + ` ` + massivs[i].length;
// }
// console.log(massivNew);

// const massa = massivs.map((item) => item + ` ` + item.length);
// console.log(massa);

//https://www.codewars.com/kata/515e271a311df0350d00000f/solutions/javascript
const numbers = [];
if (numbers.length === 0) {
	return 0;
}
const jop = numbers.map((item) => item ** 2);
console.log(jop);
const plus = jop.reduce((item, next) => item + next);
console.log(plus);
//!--------------------------------
//https://www.codewars.com/kata/5545f109004975ea66000086/train/javascript
function isDivisible(n, x, y) {
	const numbr = n;
	const numbr2 = x;
	const numbr3 = y;
	if (Math.round(numbr / numbr2) === numbr / numbr2) {
		const jop = Math.round(numbr / numbr3) === numbr / numbr3;
		return jop;
	} else return false;
}

let start = 1;
const finish = 5;
let itog = 0;
// if (start + 1 <= finish) {
// 	itog++;
// 	if (start <= finish) {
// 		start = start + 3;
// 		itog++;
// 	}
// }

//https://www.codewars.com/kata/59a8570b570190d313000037/solutions/javascript
const nine = 2;
let itogovoe = 0;
for (let i = 1; i <= nine; i++) {
	itogovoe = itogovoe + i ** 3;
}
console.log(itogovoe);
//!------------------------------------------------------------------
const lox = `The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog`;
const converToMassiv = lox.split(``);
let filtMassiv = ``;

// for (let i = 0; i < converToMassiv.length; i++) {
// 	if (!isNaN(converToMassiv[i])) {
// 		filtMassiv = filtMassiv + converToMassiv[i];
// 	}
// }

// console.log(filtMassiv);
// const sorting = filtMassiv.split(``);
// console.log(sorting);

const filters = converToMassiv.filter((item) => !isNaN(item));
console.log(filters);

const joins = filters.reduce((acc, next) => Number(acc) + Number(next));
console.log(joins);

//!-----------------------------------------------
//www.codewars.com/kata/5a34af40e1ce0eb1f5000036
function toCsvText(array) {
	const lilPip = array;
	let massiveToString = ``;

	for (let i = 0; i < lilPip.length; i++) {
		if (lilPip[lilPip.length - 1] === lilPip[i]) {
			massiveToString += lilPip[i].toString();
		} else {
			massiveToString += lilPip[i].toString() + "\n";
		}
	}
	return massiveToString;
}
//!----------------------------------------------------------
//https://www.codewars.com/kata/57613fb1033d766171000d60/train/javascript
function uefaEuro2016(teams, scores) {
	if (scores[0] > scores[1]) {
		return `At match ${teams[0]} - ${teams[1]}, ${teams[0]} won!`;
	} else if (scores[0] < scores[1]) {
		return `At match ${teams[0]} - ${teams[1]}, ${teams[1]} won!`;
	} else {
		return `At match ${teams[0]} - ${teams[1]}, teams played draw.`;
	}
}

const chisl = 123;
const massives1 = chisl.split(``);

console.log(massives1);

//!----------------------------------------------------
// https://www.codewars.com/kata/563d59dd8e47a5ed220000ba/solutions/javascript
const lol = 0;
const lolToMassiv = lol.toString().split(``);
const convertSumm = lolToMassiv.reduce((item, next) => Number(item) + Number(next));
const converToNumber = parseInt(convertSumm);
console.log(typeof converToNumber);

//!-----------------------------------------------------

function multiplyAll(array) {
	const goTomassiv = array;
	return function (num) {
		const newMass = goTomassiv.map((item) => item * num);
		return newMass;
	};
}
const jostko = multiplyAll([1, 2, 4, 5]);
const newNumber = jostko(2);

console.log(newNumber);

const points = ["1:0", "2:0", "3:0", "4:0", "2:1", "3:1", "4:1", "3:2", "4:2", "4:3"];
const strings = points.join();
const convertToMass = strings.split(``);

const filters1 = convertToMass.filter((item) => !isNaN(item));
let itogRes = 0;
for (let i = 0; i < filters1.length; i += 2) {
	if (filters1[i] > filters1[i + 1]) {
		itogRes += 3;
	} else if (filters1[i] < filters1[i + 1]) {
		itogRes += 0;
	} else if (filters1[i] === filters1[i + 1]) {
		itogRes += 1;
	}
}

console.log(filters1, itogRes);

function twoSort(s) {
	const sortingItog = s.sort();
	const pedik = sortingItog[0].split(``).join(`***`);
	return pedik;
}

const digital = `45385593107843568`;
let strings10 = ``;
for (let i = 0; i < digital.length; i++) {
	switch (digital[i] >= 5) {
		case true:
			strings10 += 1;
			break;
		default:
			strings10 += 0;
	}
}
console.log(strings10);

const numbr = [1, 2];

console.log(numbr[numbr.length - 1]);

const lolitaOne = `1,3,4,5`;
let characters = lolitaOne.split(`,`);
characters.shift();
characters.pop();
console.log(characters.join(" "));

console.log(newMassSort);
newFiltMass.pop();
newFiltMass.shift();

// if (vars.length >= 0 && vars.length >= 1 && vars.length <= 2) {
// 	console.log(`null ${vars.length}`);
// } else if (vars.length === 0) {
// 	console.log(`null ${vars.length}`);
// }
// const pizdaRoga = vars.filter((item) => item !== `,`);
// console.log(pizdaRoga);

// const fixMass = pizdaRoga.join(` `);
// console.log(fixMass);

console.log(Math.pow(-2, 3));

console.log(`hello`.reverse());

console.log(Math.pow(0, 3) === 0);

const jop1 = `Mary Had A Little Lamb`;
let mujo = 0;
console.log(jop1[0].charCodeAt(0));
for (let i = 0; i < jop1.length; i++) {
	mujo += jop1[i].charCodeAt(0);
}
console.log(mujo);
//!---------------------------------------------------------
//https://www.codewars.com/kata/577a6e90d48e51c55e000217/solutions/javascript

let myaso = 23;

let src = 0;
for (let i = 0; ; i++) {
	if (myaso % 2 == 0) {
		myaso = myaso / 2;
		src++;
	} else {
		if (myaso === 1) {
			break;
		}
		myaso = myaso * 3 + 1;
		src++;
	}
}
console.log(src);

//!-----------------------------------------------
//https://www.codewars.com/kata/55a5bfaa756cfede78000026/solutions/javascript

function problem(x) {
	return typeof x == "number" ? x * 50 + 6 : "Error";
}

function shorter_reverse_longer(a, b) {
	const reverseB = [...b];
	const reverseA = [...a];
	const btu = reverseB.reverse().join(``);
	const atu = reverseA.reverse().join(``);
	console.log(btu);
	if (a.length > b.length) {
		return console.log(b + atu + b);
	} else if (a.length === b.length) {
		return console.log(b + atu + b);
	} else {
		console.log(a + btu + a);
	}
}

const strict = shorter_reverse_longer("first", "abcde");
//!------------------------------------
//https://www.codewars.com/kata/5410c0e6a0e736cf5b000e69

function hamming(a, b) {
	let count = 0;
	for (let i = 0; i < a.length; i++) {
		if (a[i] !== b[i]) {
			count++;
		}
	}
	return count;
}

const pass = "Give me liberty or give me death";

const passToArr = pass.split(` `);

let checkMass = pass[0];

for (let i = 0; i < pass.length; i++) {
	if (pass[i - 1] === ` `) {
		checkMass += pass[i];
	}
}
const fixItem = [...checkMass];
for (let i = 0; i < fixItem.length; i++) {
	if (fixItem[i] === `i` || fixItem[i] === `I`) {
		fixItem[i] = 1;
	} else if (fixItem[i] === `o` || fixItem[i] === `O`) {
		fixItem[i] = 0;
	} else if (fixItem[i] === `s` || fixItem[i] === `S`) {
		fixItem[i] = 5;
	}
}
console.log(fixItem.join(``));
//!--------------------------------------------------
//https://www.codewars.com/kata/517abf86da9663f1d2000003/train/javascript
let strConvert = `The-Stealth-Warrior`;

let final = "";
let sortString = "";
let newString = "";
let converter = strConvert.split("");
//удаляем символы
for (let i = 0; i < converter.length; i++) {
	if (converter[i] === "_" || converter[i] === "-") {
		newString += " ";
	} else {
		newString += converter[i];
	}
} //массив без символов
const splitNewString = newString.split(" ");
//----

const item = function (char) {
	if (char == 0) return "";
	let strings = "";
	const convertStr = char.split("");
	if (convertStr[0] === convertStr[0].toUpperCase()) {
		strings += convertStr[0];
	} else {
		strings += convertStr[0].toUpperCase();
	}
	for (let i = 1; i < char.length; i++) {
		strings += char[i];
	}
	return strings;
};
//-----
let letters = strConvert[0];
if (strConvert == 0) {
	console.log(`j`);
}

// console.log(strConvert[0].toUpperCase() !== letters);
if (strConvert[0].toUpperCase() !== letters) {
	final += splitNewString[0];
} else if (strConvert[0].toUpperCase() == letters) {
	final += splitNewString[0];
}
// передаем значение в функцию
for (let i = 1; i < splitNewString.length; i++) {
	final += item(splitNewString[i]);
}

console.log(final);
