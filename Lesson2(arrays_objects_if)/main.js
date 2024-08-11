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