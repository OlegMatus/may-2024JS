// -----1----
//     let strArray = ['hello world', 'lorem ipsum', 'javascript is cool']
// const strLength2 = (strArray) => {
//     const joinEd = strArray.join('');
//     return joinEd.length;
// }
//
// console.log(strLength2(strArray));

let str1 = 'hello world';
console.log(str1.length);
let str2 = 'lorem ipsum';
console.log(str2.length);
let str3 = 'javascript is cool';
console.log(str3.length);
const strLength = (s1, s2, s3) => {
    const concatSTR = s1.concat(s2, s3);
    console.log(concatSTR.length);
};

strLength(str1, str2, str3);
// ---2---
const s1UpperCase = str1.toUpperCase();
console.log(s1UpperCase);
const s2UpperCase = str2.toUpperCase();
console.log(s2UpperCase);
const s3UpperCase = str3.toUpperCase();
console.log(s3UpperCase);
// ----3----
console.log(s1UpperCase.toLowerCase());
console.log(s2UpperCase.toLowerCase());
console.log(s3UpperCase.toLowerCase());
// -----4----
let str = '   dirty string   ';
console.log(str.trim());
// -----5---
let string = 'Ревуть воли як ясла повні';

function stringToArray(str) {
    if (str) {
        return str.split(' ');
    }
    return [''];
}

console.log(stringToArray(string));
// -----6---
let numbs = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
// const strings = numbs.map(num => num.toString());
const strings = numbs.map(num => num + '');
console.log(strings);

// -------7------
function sortNums(array, direction) {
    switch (direction) {
        case 'ascending':
            array.sort((a, b) => b - a);
            break
        case 'descending':
            array.sort((a, b) => a - b);
            break
        default:
            console.log('Invalid direction')
    }
    return array;
    // if (direction === 'ascending') {
    //     return array.sort((a, b) => b - a);
    // } else if (direction === 'descending') {
    //     return array.sort((a, b) => a - b)
    // }
}

let nums = [11, 21, 3];
console.log(sortNums(nums, 'ascending'));
console.log(sortNums(nums, 'descending'));
// -----8-----
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
const sort = coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration);
console.log(sort);
// ------9-----
const filteredObj = coursesAndDurationArray.filter((value) => value.monthDuration > 5);
console.log(filteredObj);
// ----10----
console.log(coursesAndDurationArray.map((course, index) => {
    return {
        id: index + 1,
        ...course,
    }
}));
// ------11-----
let cards = [
    {cardSuit: 'spade', value: '6', color: 'black'},
    {cardSuit: 'diamond', value: '6', color: 'red'},
    {cardSuit: 'club', value: '6', color: 'black'},
    {cardSuit: 'heart', value: '6', color: 'red'},
    {cardSuit: 'spade', value: '7', color: 'black'},
    {cardSuit: 'diamond', value: '7', color: 'red'},
    {cardSuit: 'club', value: '7', color: 'black'},
    {cardSuit: 'heart', value: '7', color: 'red'},
    {cardSuit: 'spade', value: '8', color: 'black'},
    {cardSuit: 'diamond', value: '8', color: 'red'},
    {cardSuit: 'club', value: '8', color: 'black'},
    {cardSuit: 'heart', value: '8', color: 'red'},
    {cardSuit: 'spade', value: '9', color: 'black'},
    {cardSuit: 'diamond', value: '9', color: 'red'},
    {cardSuit: 'club', value: '9', color: 'black'},
    {cardSuit: 'heart', value: '9', color: 'red'},
    {cardSuit: 'spade', value: '10', color: 'black'},
    {cardSuit: 'diamond', value: '10', color: 'red'},
    {cardSuit: 'club', value: '10', color: 'black'},
    {cardSuit: 'heart', value: '10', color: 'red'},
    {cardSuit: 'spade', value: 'jack', color: 'black'},
    {cardSuit: 'diamond', value: 'jack', color: 'red'},
    {cardSuit: 'club', value: 'jack', color: 'black'},
    {cardSuit: 'heart', value: 'jack', color: 'red'},
    {cardSuit: 'spade', value: 'queen', color: 'black'},
    {cardSuit: 'diamond', value: 'queen', color: 'red'},
    {cardSuit: 'club', value: 'queen', color: 'black'},
    {cardSuit: 'heart', value: 'queen', color: 'red'},
    {cardSuit: 'spade', value: 'king', color: 'black'},
    {cardSuit: 'diamond', value: 'king', color: 'red'},
    {cardSuit: 'club', value: 'king', color: 'black'},
    {cardSuit: 'heart', value: 'king', color: 'red'},
    {cardSuit: 'spade', value: 'ace', color: 'black'},
    {cardSuit: 'diamond', value: 'ace', color: 'red'},
    {cardSuit: 'club', value: 'ace', color: 'black'},
    {cardSuit: 'heart', value: 'ace', color: 'red'},
]
console.log(cards.find((card) => card.cardSuit === 'spade' && card.value === 'ace'));
console.log(cards.filter((card) => card.value === '6'));
console.log(cards.filter((card) => card.color === 'red'));
console.log(cards.filter((card) => card.cardSuit === 'diamond'));
console.log(cards.filter((card) => {
    const cardValues = ['9', '10', 'jack', 'queen', 'king', 'ace']
    return card.cardSuit === 'club' && cardValues.includes(card.value);
}));
// ------12-----
console.log(cards.reduce((acc, card) => {
    switch (card.cardSuit) {
        case 'spade':
            acc.spades.push(card);
            break
        case 'diamond':
            acc.diamonds.push(card);
            break
        case 'heart':
            acc.hearts.push(card);
            break
        case 'club':
            acc.clubs.push(card);
            break
    }
    return acc;
}, {
    spades: [],
    diamonds: [],
    hearts: [],
    clubs: []
}));
// --------13--------
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
console.log(coursesArray.filter((course) => course.modules.includes('sass')));
console.log(coursesArray.filter((course) => course.modules.includes('docker')));