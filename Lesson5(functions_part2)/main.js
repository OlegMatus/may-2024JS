// // -----------1---------
let rectangleS = (a, b) => a * b;

    console.log(rectangleS(6,12));
// // --------2---
const circleS = (r) => {
    return Math.PI * r ** 2;
}

console.log(circleS(23));
// // ----------3--------
const cylinderS = (h,r) => (2*Math.PI*r*(h+r));

console.log(cylinderS(30, 15));
// // --------4---------
const showElement = (numbs) => {
    if (Array.isArray(numbs)){
        for (const numb of numbs) {
            console.log(numb)
        }
    }
}

let numbs = [23,44,76,88,100];
showElement(numbs);
// // -----------------5--------
const createParagraph = () => document.write('<p>Lorem ipsum dolor sit amet</p>');

createParagraph();
// let text = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus animi distinctio dolor ducimus et excepturi iure laudantium maxime natus nihil nobis non pariatur quibusdam reiciendis reprehenderit saepe sint tempora, ullam.'
// createParagraph(text);
// // ------------6---------
const createUl = (text)=> {
    document.write(`<ul>`)
    for (let i = 0; i < 3; i++) {
    document.write(`<li>${text}</></li>`)
    }
    document.write(`</ul>`)
}

let textLi = 'Change your life now!';
createUl(textLi);
// // ------------7------------
const createUl2 = (text,countLi) => {
document.write(`<ol>`)
    for (let i = 0; i < countLi; i++) {
        document.write(`<li>${text}</></li>`)
    }
document.write(`</ol>`)
}

let textLi2 = 'Who but you?';
createUl2(textLi2,3);
// // ---------8----------
const createList = (arr) => {
    if (Array.isArray(arr)){
        for (const item of arr) {
            document.write(`<ul><li>${item}</li></ul>`)
        }
    }
}

let arr = [123,'str',true,321,'Slava Ukraine'];
createList(arr);
// // --------9------------
const showObject = (users,tag) => {
    if (Array.isArray(users)){
    for (const item of users) {
        document.write(`<div>`)
        document.write(`<hr>`)
    document.write(`<${tag}>ID:${item.id}</${tag}>`)
    document.write(`<${tag}>Name:${item.name}</${tag}>`)
    document.write(`<${tag}>Age:${item.age}</${tag}>`)
        document.write(`</div>`)
    }
    }
}
let users = [
    {id: 1, name: 'Alex', age: 20},
    {id: 13, name: 'Maks', age: 22},
    {id: 18, name: 'Olya', age: 19},
    {id: 11, name: 'Shine', age: 23},
    {id: 31, name: 'Markus', age: 41}
]
showObject(users,'div',);
// // ------------10---------
const getMinNumber = (numbers) => {
    if (Array.isArray(numbers)){
        return Math.min(...numbers);
    }
}
let numbers = [5,12,36,99,300,1999];
console.log(getMinNumber(numbers));
// // ---------11----------
const sum = (arr) => {
    if (Array.isArray(numbers2)){
        let total = 0;
        for (let i = 0; i < arr.length; i++) {
            const arrElement = arr[i];
            total += arrElement;
        }
    return total;
    }
}

let numbers2 = [5,12,36,99,300,1999];
console.log(sum(numbers2));
// // ----------12------
const swap = (arr,index1,index2,index3,index4) => {
    let one = arr[index1];
    let two = arr[index2]
arr[index1] = arr[index4];
arr[index2] = arr[index3];
arr[index4] = one;
arr[index3] = two
return arr;
}

let arr2 = [11,22,33,44];
console.log(swap(arr2, 0, 1,2,3 ));
// // ------------13-------------
const exchange = (sumUAH,currencyValues,exchangeCurrency) => {
    if (Array.isArray(currencyValues)){
        for (const item of currencyValues) {
            if (item.currency === exchangeCurrency) {
                const valueExchange = item.value;
                return sumUAH / valueExchange;
            }
        }
    }
    return null;
}

console.log(exchange(10000, [{currency: 'USD', value: 40}, {currency: 'EUR', value: 42}], 'USD'));