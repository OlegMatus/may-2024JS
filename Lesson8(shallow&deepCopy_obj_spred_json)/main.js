// ---------------1---------
class User {
    constructor(id, name, surname, age) {
        this.name = name;
    }

    showName() {
        console.log(`Hello my name is ${this.name}`)
    }
}

const user = new User('2', 'Tom', 'Cruz', '48');
user.showName()

function deepClone(obj) {
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }
    if (typeof obj === 'function'){
        return obj.bind({});
    }
    const copy = Array.isArray(obj) ? [] : {};

    for (const key in obj) {
        // const keyElement = key[i];
        if (obj.hasOwnProperty(key)) {
            copy[key] = deepClone(obj[key])
        }
    }
    return copy;
}

const deepCopy = deepClone(user);
console.log(deepCopy);
console.log(user);
console.log(deepCopy === user);

// -------2--------------
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
coursesAndDurationArray.map((course, index) => console.log(({id: index + 1, ...course})))