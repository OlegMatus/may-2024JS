// ---------1--------
const a = 'hello'
const b = 'owu'
const c = 'com'
const d = 'ua'
const e = '1'
const f = '10'
const g = '-999'
const h = '123'
const i = '3.14'
const j = '2.7'
const k = '16'
const l = 'true'
const m = 'false'
// -------------2---------------
console.log(a)
console.log(b)
console.log(c)
console.log(d)
console.log(e)
console.log(f)
console.log(g)
console.log(h)
console.log(i)
console.log(j)
console.log(k)
console.log(l)
console.log(m)
// ------------------3------------------
const firstName = 'Matus';
const middleName = 'Oleg';
const lastName = 'Vasyliovych';

const fullName = `${firstName} ${middleName} ${lastName}`;
console.log(fullName)
const space = ' ';
console.log(firstName + space + middleName + space + lastName);
// ---------------------4--------------------
let numb = 100;
let str = '100';
let bool = true;
console.log(typeof +numb);
console.log(typeof str);
console.log(typeof bool);
// -----------------prompt---------------
const myName = prompt('name');
const myLastName = prompt('lastName');
const myAge = prompt('age');
console.log((''+ myName));
console.log(myLastName.toString());
console.log(myAge.toString());