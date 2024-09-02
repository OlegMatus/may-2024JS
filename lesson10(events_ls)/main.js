// ---------1---------
// const div = document.createElement('div');
// const btn = document.createElement('button');
// btn.id = 'btn';
// btn.innerText = 'hide';
// div.classList.add('elements-block');
// div.id = 'myId';
//
// div.innerHTML = `Text`
//
// document.body.append(div,btn)
// const button = document.getElementById('btn');
// button.onclick = function () {
//     div.style.display = 'none';
// }
// -------2--------
// const input = document.createElement('input');
// const button = document.createElement('button');
//
// button.id = 'btn';
// button.innerText = 'send';
//
// input.id = 'input';
// input.type = 'number';
// input.placeholder = 'age';
//
// document.body.append(input, button);
//
// const inp = document.getElementById('input');
// const btn = document.getElementById('btn');
//
// btn.onclick = function () {
//     const age = inp.value;
//     if (age < 18) {
//         document.write('Age must be over 18')
//     } else {
//         document.write(`Age: ${age}`);
//     }
// }
// ----------3---------
// const form = document.createElement('form');
// const name = document.createElement('input');
// const surname = document.createElement('input');
// const age = document.createElement('input');
// const sendButton = document.createElement('button');
// const userBlock = document.createElement('div');
//
// name.placeholder = 'name';
// surname.placeholder = 'surname';
// age.placeholder = 'age';
//
// sendButton.innerText = 'save';
//
// form.append(name, surname, age);
// document.body.append(form, sendButton, userBlock);
//
// const btn = document.getElementsByTagName("button")[0];
// btn.onclick = function () {
//     const name = document.getElementsByTagName('input')[0].value;
//     const surname = document.getElementsByTagName('input')[1].value;
//     const age = document.getElementsByTagName('input')[2].value;
//     const userBlock = document.getElementsByTagName('div')[0];
//
//     userBlock.innerHTML = `${name} ${surname} ${age}`;
// }
// -------4--------
// const divElement = document.createElement('div');
//
// divElement.classList.add('elements-block');
//
// document.body.append(divElement);
//
// let currentNumber = localStorage.getItem('number' || 0);
// currentNumber = currentNumber ? parseInt(currentNumber) : 0;
// currentNumber += 1;
//
// localStorage.setItem('number', currentNumber);
// document.getElementsByClassName('elements-block')[0].innerText = currentNumber;
// // ----------5-------
// let currentTime = new Date().toISOString();
// let sessionList = JSON.parse(localStorage.getItem('sessionsList')) || [];
// sessionList.push(currentTime)
// localStorage.setItem('sessionsList', JSON.stringify(sessionList));
// --------6--------
createElement = function (tagName, attributes = {}) {
    const tag = document.createElement(tagName);

    Object.assign(tag, attributes);
    document.body.appendChild(tag);
    return tag;
}
getElementBy = function (tagName) {
    return document.getElementsByTagName(tagName);
}
//
// const div = createElement('div', {textContent: 'Converter'});
// const value = createElement('input', {name: 'value', placeholder: 'Input Value'});
// const measure = createElement('input', {name: 'measure', placeholder: 'Input Measure'});
//
// function convert() {
//     const parseValue = parseFloat(value.value);
//     const measuring = measure.value.toLocaleLowerCase();
//     let result;
//
//     switch (measuring) {
//         case 'kg':
//             result = parseValue * 2.20462;
//             break;
//
//         case 'pound':
//             result = parseValue / 2.20462;
//             break;
//
//         default:
//             result = 'Invalid measure';
//     }
//     div.textContent = `ConvertValue = ${result}`;
// }
//
// value.addEventListener('input', convert);
// measure.addEventListener('input', convert);

// ---------7------------
// function addToLocalStorage(arrayName, objToAdd) {
//     let lsArray = localStorage.getItem(arrayName);

//     if (!lsArray) {
//         throw new Error('No item to add to local storage');
//     }
//     const arr = JSON.parse(lsArray);
//
//     if (typeof objToAdd === 'object') {
//         arr.push(objToAdd);
//     }
//
//     localStorage.setItem(arrayName, JSON.stringify(arr));
// }
//
// addToLocalStorage('cars', {producer: 'ford', model: 'GT'});
// -----------8-----------
// const countRows = createElement('input');
// const countCells = createElement('input');
// const cellContents = createElement('input');
// const btn = createElement('button');
//
// btn.textContent = 'create table';
//
// btn.onclick = function createTable() {
//     const table = createElement('table');
//     table.style.borderCollapse = 'collapse';
//     for (let i = 0; i < countRows.value; i++) {
//         const row = createElement('tr');
//         for (let j = 0; j < countCells.value; j++) {
//             const cell = createElement('td');
//             cell.textContent = cellContents.value;
//
//             cell.style.border = '2px solid orange';
//             cell.style.padding = '8px';
//
//             row.appendChild(cell);
//         }
//         table.appendChild(row);
//         console.log(table);
//     }
// }
// ---------***9----------
// const block = createElement('div');
// block.textContent = `100grn`;
// let lsCash = localStorage.getItem('cash');
//
// if (!lsCash) {
//     lsCash = 100;
//     localStorage.setItem('cash', lsCash);
// } else {
//     lsCash = parseInt(lsCash);
// }
//
// let currentTime = new Date().toISOString();
// let sessionList = JSON.parse(localStorage.getItem('sessionsList')) || [];
// const lastUpdated = sessionList[sessionList.length - 1];
// const timeDifference = new Date(currentTime) - new Date(lastUpdated);
//
// if (timeDifference > 10000) {
//     lsCash = parseInt(lsCash) + 10;
//     localStorage.setItem('cash', lsCash);
// }
// sessionList.push(currentTime)
// localStorage.setItem('sessionsList', JSON.stringify(sessionList));
//
// block.textContent = `${lsCash}грн`
// -----------***10-----------
// const arrayOfObjects = Array.from({ length: 100 }, (_, index) => ({
//     id: index + 1,
//     name: `Item ${index + 1}`,
//     value: Math.random().toFixed(2) * 100
// }));
//
// console.log(arrayOfObjects);
const container = createElement('div');
container.classList.add('container');

const objectsArray = [];
for (let i = 0; i < 100; i++) {
    objectsArray.push({
        id: i + 1,
        name: `Object ${i + 1}`,
        value: `Count: ${Math.floor(Math.random() * 100) + 1}`,
    });
}

let limit = 10;
let currentPage = 1;
let totalPages = Math.ceil(objectsArray.length / limit);

function show(page) {
    const container = document.getElementsByClassName('container')[0];
    container.innerHTML = '';

    let startIndex = (page - 1) * limit;
    let endIndex = startIndex + limit;
    const sliceItems = objectsArray.slice(startIndex, endIndex);

    sliceItems.map(item => {
        const box = createElement('div');
        const p1 = createElement('p');
        const p2 = createElement('p');
        const p3 = createElement('p');

        box.classList.add('box-div');

        const {id, name, value} = item;
        p1.innerHTML = `<p><b>ID:</b> ${id}</p>`;
        p2.innerHTML = `<p><b>NAME:</b> ${name}</p>`;
        p3.innerHTML = `<p><b>VALUE:</b> ${value}</p>`;

        box.append(p1, p2, p3);
        container.append(box);
    })
}

const prev = createElement('button');
const next = createElement('button');

prev.classList.add('button-prev');
next.classList.add('button-next');

prev.innerText = 'prevPage';
next.innerText = 'nextPage';

function nextPage() {
    if (currentPage < totalPages) {
        currentPage++;
        show(currentPage)
    }
}

function prevPage() {
    if (currentPage > 1) {
        currentPage--;
        show(currentPage)
    }
}

prev.addEventListener('click', prevPage);
next.addEventListener('click', nextPage);
show(currentPage);