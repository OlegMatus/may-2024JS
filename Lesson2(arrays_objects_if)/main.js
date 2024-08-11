// const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
// ------1----
let names = ['Andriy',222,'Oleg','Nelly', {name:'Tom', age: 28},'Will',true,'Mia',[1,2,3],'John']
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
console.log(names[3]);
console.log(names[4]);
console.log(names[5]);
console.log(names[6]);
console.log(names[7]);
console.log(names[8]);
console.log(names[9]);
names.forEach((name) => console.log(name));
// ----------2-------------
let book1 = {
    title: 'Life story',
    pageCount: 358,
    genre: 'Biography'
}
let book2 = {
    title: 'People are like ships',
    pageCount: 411,
    genre: 'Classic'
}
let book3 = {
    title: 'Where did the elephant go',
    pageCount: 591,
    genre: 'Detective'
}
console.log('Book1:',book1);
console.log('Book2:',book2);
console.log('Book3:',book3);
// -----------3---------
let book4 = {
    title: 'Life story',
    pageCount: 358,
    genre: 'Biography',
    authors: [
        {
            name: 'Stephen King',
            age: 49
        },
        {
            name: 'Elif Shafak',
            age: 52
        }
    ]
}
let book5 = {
    title: 'People are like ships',
    pageCount: 411,
    genre: 'Classic',
    authors: [
        {
            name: 'Alice Walker',
            age: 39
        },
        {
            name: 'Brian Evenson',
            age: 40
        }
    ]
}
let book6 = {
    title: 'Where did the elephant go',
    pageCount: 591,
    genre: 'Detective',
    authors: [
        {
            name: 'Kazuo Ishiguro',
            age: 43
        },
        {
            name: 'J.K. Rowling',
            age: 45
        }
    ]
}
// -------------4----------------
let users = [
    { name: "John Doe", username: "johndoe", password: "password123" },
    { name: "Jane Smith", username: "janesmith", password: "qwerty456" },
    { name: "Bob Johnson", username: "bobjohnson", password: "letmein789" },
    { name: "Alice Brown", username: "alicebrown", password: "alicePass123" },
    { name: "Charlie Davis", username: "charliedavis", password: "charlie1234" },
    { name: "Diana Miller", username: "dianamiller", password: "password321" },
    { name: "Eve Wilson", username: "evewilson", password: "wilsonEve789" },
    { name: "Frank Wright", username: "frankwright", password: "wright9876" },
    { name: "Grace Hall", username: "gracehall", password: "hallgrace123" },
    { name: "Henry Adams", username: "henryadams", password: "adams5678" }
]
console.log(users[0].password)
users.forEach((user)=> console.log(user.password))
// -----------------5--------------
let temperatures = [
    {day:'Sunday', morning: 14, afternoon: 29, evening: 18},
    {day:'Monday', morning: 15, afternoon: 31, evening: 19},
    {day:'Tuesday', morning: 15, afternoon: 34, evening: 20},
    {day:'Wednesday', morning: 14, afternoon: 30, evening: 19},
    {day:'Thursday', morning: 13, afternoon: 27, evening: 17},
    {day:'Friday', morning: 12, afternoon: 25, evening: 18},
    {day:'Saturday', morning: 16, afternoon: 38, evening: 20},
]
let temperatures2 = [
    [14,29,18],
    [15,31,19],
    [15,34,20],
    [14,30,19],
    [13,27,17],
    [12,25,18],
    [16,38,20]
]
// ---------Логічні розгалуження:----------
// ----1---
let x = 25
if (x !== 0){
    console.log('Вірно')
}else {
    console.log('Невірно')
}
let a = 1;
console.log(a !== 0 ? 'Вірно' : 'Невірно')

let b = 0;
console.log(b !== 0 ? 'Вірно' : 'Невірно')

let c = -3;
console.log(c !== 0 ? 'Вірно' : 'Невірно')
// ---------2---------
let time = 33;
if(time <= 15){
    console.log('Part one');
}else if (time <= 30){
    console.log('Part two');
}else if (time <= 45) {
    console.log('Part three');
}else if(time <= 59) {
    console.log('Part four')
}
// ---------3--------
let day = 19;
if (day <= 10){
    console.log('The first part of Month');
}else if (day <= 20){
    console.log('The second part of Month');
}else if (day <= 31){
    console.log('The third part of Month');
}
// ----------------4-----------
// let days = prompt('Day of the week:');
// switch (days){
//     case ('1'):
//         console.log('Monday');
//         break;
//     case ('2'):
//         console.log('Tuesday');
//         break;
//     case ('3'):
//         console.log('Wednesday');
//         break;
//     case ('4'):
//         console.log('Thursday');
//         break;
//     case ('5'):
//         console.log('Friday');
//         break;
//     case ('6'):
//         console.log('Saturday');
//         break;
//     case ('7'):
//         console.log('Sunday');
//         break;
// }
// ----------------5-------------
let numb1 = 55;
let numb2 = 73;
if (numb1 > numb2){
    console.log(`Максимальне число ${numb1}`)
}else if (numb1 < numb2){
    console.log(`Максимальне число ${numb2}`)
}else {
    console.log(`Числа рівні`);
}
// ---------6-------------
let y = undefined;
if (!y) {
    y = 'default';
}
    console.log(y)
// --------------7-------------
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
if (coursesAndDurationArray[0].monthDuration > 5){
    console.log('Super')
}
if (coursesAndDurationArray[1].monthDuration > 5){
    console.log('Super')
}
coursesAndDurationArray.forEach((course) => {
    if (course.monthDuration > 5) {
        console.log(`${course.title}: Super`)
    }
})