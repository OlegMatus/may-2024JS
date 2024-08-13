// -----------1---------
function rectangleS (a, b) {
    return a * b;
}

    console.log(rectangleS(6,12));
// --------2---
function circleS(r) {
    return Math.PI * r ** 2;
}

console.log(circleS(23));
// ----------3--------
function cylinderS(h,r) {
    return (2*Math.PI*r*(h+r));
}

console.log(cylinderS(30, 15));
// --------4---------
function showElement(numbs) {
    if (Array.isArray(numbs)){
        for (const numb of numbs) {
            console.log(numb)
        }
    }
}

let numbs = [23,44,76,88,100];
showElement(numbs);
// -----------------5--------
function createParagraph(text) {
    document.write(`<p>${text}</p>`)
}

let text = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus animi distinctio dolor ducimus et excepturi iure laudantium maxime natus nihil nobis non pariatur quibusdam reiciendis reprehenderit saepe sint tempora, ullam.'
createParagraph(text);
// ------------6---------
function createUl(text) {
    document.write(`<ul>`)
    for (let i = 0; i < 3; i++) {
    document.write(`<li>${text}</></li>`)
    }
    document.write(`</ul>`)
}

let textLi = 'Change your life now!';
createUl(textLi);
// ------------7------------
function createUl2(text,countLi) {
document.write(`<ol>`)
    for (let i = 0; i < countLi; i++) {
        document.write(`<li>${text}</></li>`)
    }
document.write(`</ol>`)
}

let textLi2 = 'Who but you?';
createUl2(textLi2,3);
