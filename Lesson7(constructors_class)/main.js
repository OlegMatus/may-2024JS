// -----1----
function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

new User();
let users = [];
let user1 = new User(1, 'Alex', 'Baldwin', 'alex@gmail.com', '380993455234');
let user2 = new User(2, 'Jason', 'Derulo', 'alex@gmail.com', '380955455234');
let user3 = new User(3, 'Justin', 'Timberlake', 'jt_2024@gmail.com', '380663465235');
let user4 = new User(4, 'Chris', 'Brown', 'cb_67@gmail.com', '380676432778');
let user5 = new User(5, 'Denzel', 'Washington', 'denzel00@gmail.com', '380996599032');
let user6 = new User(6, 'Dima', 'Monatik', 'dimon4_ello@gmail.com', '380996867862');
let user7 = new User(7, 'Artem', 'Pivovarov', 'artemy4@gmail.com', '380509943111');
let user8 = new User(8, 'Scarlett', 'Johansson', 'scarlett@gmail.com', '380465469032');
let user9 = new User(9, 'Ana', 'Armas', 'anna_de@gmail.com', '3802367990');
let user10 = new User(10, 'Travis', 'Scott', 'trevo_s@gmail.com', '380505413782');
users.push(user1, user2, user3, user4, user5, user6, user7, user8, user9, user10);
console.log(users);

// ---2---
console.log(users.filter((user) => user.id % 2 === 0
));
// ----3----
console.log(users.sort((a, b) => a.id - b.id));

// ---------
function User2(id, name, age) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.greeting = function (msg) {
        console.log(msg + this.name)
    }
}

const newUser = new User2(3, 'Kokos', 32);
User2.prototype.email = 'ko_ko@gmail.com '
newUser.greeting('hey!')
console.log(newUser);
// ----------------------
// -----------4------------
class Client extends User {
    constructor(id, name, surname, email, phone, order) {
        super(id, name, surname, email, phone)
        this.order = order;
    }
}

new Client();
let clients = [
    new Client(1, 'Alex', 'Baldwin', 'alex@gmail.com', '380993455234', ['milk', 'sugar', 'apple', 'coconut']),
    new Client(2, 'Jason', 'Derulo', 'alex@gmail.com', '380955455234', ['cheese', 'coffee', 'apple', 'coconut', 'whiskey']),
    new Client(3, 'Justin', 'Timberlake', 'jt_2024@gmail.com', '380663465235', ['milk', 'sugar', 'apple', 'sausage']),
    new Client(4, 'Chris', 'Brown', 'cb_67@gmail.com', '380676432778', ['milk', 'sugar', 'apple', 'coconut', 'cucumber', 'strawberry']),
    new Client(5, 'Denzel', 'Washington', 'denzel00@gmail.com', '380996599032', ['milk', 'sugar', 'apple', 'coconut']),
    new Client(6, 'Dima', 'Monatik', 'dimon4_ello@gmail.com', '380996867862', ['milk', 'cheese', 'sausage', 'coconut']),
    new Client(7, 'Artem', 'Pivovarov', 'artemy4@gmail.com', '380509943111', ['milk', 'sugar', 'apple', 'juice']),
    new Client(8, 'Scarlett', 'Johansson', 'scarlett@gmail.com', '380465469032', ['milk', 'sugar', 'apple', 'coconut']),
    new Client(9, 'Ana', 'Armas', 'anna_de@gmail.com', '3802367990', ['milk', 'sugar', 'apple', 'coconut', 'kefir']),
    new Client(10, 'Travis', 'Scott', 'trevo_s@gmail.com', '380505413782', ['milk', 'sugar', 'apple', 'bananas', 'cheese']),
]
console.log(clients);
// -----5---
const clients1 = clients.sort((client1, client2) => client1.order.length - client2.order.length);
console.log(clients1);

// -----6---
function CreateCar(model, producer, year, maxSpeed, volume) {
    this.model = model;
    this.producer = producer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.volume = volume;
    this.drive = function () {
        console.log(`we are driving at ${this.maxSpeed} per hour`)
    }
    this.info = function () {
        for (const key in this) {
            console.log(this[key]);
        }
        // console.log('------------INFO----------')
        // console.log(`model: ${this.model}`);
        // console.log(`producer:${this.producer}`);
        // console.log(`year: ${this.year}`);
        // console.log(`maxSpeed: ${this.maxSpeed}`);
        // console.log(`volume: ${this.volume}`);
    }
    this.increaseMaxSpeed = function (newSpeed) {
        if (newSpeed > 0) this.maxSpeed = this.maxSpeed + newSpeed;
    }
    this.changeYear = function (newValue) {
        if (newValue > 1989) this.year = newValue;
    }
    this.addDriver = function (driver) {
        if (typeof driver === "object") this.driver = driver;
    }
}

const newCar = new CreateCar('M5', 'BMW', 2021, 260, 2.0);
newCar.drive()
newCar.info()
newCar.increaseMaxSpeed(120)
newCar.changeYear(2019)
newCar.addDriver({name: 'Tolik', age: 43})

console.log(newCar);

// -------7------
class CreateCar2 {
    constructor(model, producer, year, maxSpeed, volume) {
        this.model = model;
        this.producer = producer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.volume = volume;
    }

    drive() {
        console.log(`we are driving at ${this.maxSpeed} per hour`)
    }

    info() {
        for (const key in this) {
            const element = this[key];
            console.log(element)
        }
    }

    increaseMaxSpeed(newSpeed) {
        if (newSpeed > 0) this.maxSpeed = this.maxSpeed + newSpeed;
    }

    changeYear(newValue) {
        if (newValue > 1989) this.year = newValue;
    }

    addDriver(driver) {
        if (typeof driver === "object") this.driver = driver;

    }
}

const car2 = new CreateCar2('Corvet', 'Chevrolet', 2022, 320, 3.5);
car2.drive()
car2.increaseMaxSpeed(80)
car2.changeYear(2015)
car2.addDriver({name: 'John', age: 39})
car2.info()
console.log(car2)

// -----8-----
class Cinderella {

    constructor(name, age, footSize) {
        // let cinderellas = [];
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}

const cinderella = new Cinderella();
let cinderellas = [
    new Cinderella('Zoya', 22, 29),
    new Cinderella('Mia', 25, 35),
    new Cinderella('Angelika', 19, 26),
    new Cinderella('Zu', 22, 30),
    new Cinderella('Katy', 18, 26),
    new Cinderella('Lulu', 27, 36),
    new Cinderella('Katya', 30, 37),
    new Cinderella('Masha', 29, 35),
    new Cinderella('Summer', 33, 39),
    new Cinderella('Olya', 25, 25),
]

// ------9-----

class Prince {
    constructor(name, age, sandal) {
        this.name = name;
        this.age = age;
        this.sandal = sandal;
    }

    findCinderella() {
        for (const cinderella of cinderellas) {
            if (cinderella.footSize === this.sandal) {
                console.log(cinderella);
            }
        }
    }
}

const prince = new Prince('Ralf', 35, 30);
prince.findCinderella()
const cinderellaFounded = cinderellas.find((cinderella) => cinderella.footSize === prince.sandal);
prince.wife = cinderellaFounded
console.log(prince);
// console.log(prince);
// ----10----
// Array.prototype.myForEach = function (array) {
//     for (let i = 0; i < this.length; i++) {
//         const item = array[i];
//         console.log(item);
//     }
// }
// cinderellas.myForEach(cinderellas)
Array.prototype.myForEach = function (callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this [i]);
    }
}
cinderellas.myForEach((cinderella) => console.log(cinderella))
// -------------11--------

Array.prototype.myFilter = function (callback) {
    let array = [];
    for (let i = 0; i < this.length; i++) {
        const arrayElement = this[i];
        if (callback(arrayElement)) {
            array.push(arrayElement)
        }
    }
    return array;
}
const myFilter = cinderellas.myFilter((cinderella) => cinderella.footSize === 25);
// console.log(myFilter);
// ------------my-----------

Array.prototype.myFind = function (callback) {
    let array = [];
    for (let i = 0; i < this.length; i++) {
        const item = this[i];
        if (callback(item)) {
            return item;
        }
    }
    return undefined;
}

const myFind = cinderellas.myFind((cinderella) => cinderella.age === 22);
console.log(myFind);