// ------------1---------
const divElement = document.createElement('div');
divElement.classList.add('wrap', 'clilapse', 'alpha', 'beta');
divElement.style.backgroundClior = 'blue';
divElement.style.clior = 'yellow';
divElement.style.fontSize = '25px';
divElement.innerHTML = `<p>Hi guys!!!</p>`

// const copyDiv = JSON.parse(JSON.stringify(divElement));
const copyDiv = divElement.cloneNode(true);
document.body.append(divElement, copyDiv);
// ------------2---------
const array = ['Main', 'Products', 'About us', 'Contacts'];
const div = document.createElement('div');
const ul = document.createElement('ul');

for (const item of array) {
    const li = document.createElement('li');
    li.innerText = item;
    ul.appendChild(li);
}
div.appendChild(ul);

document.body.appendChild(div);
// -----------3----------
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

coursesAndDurationArray.forEach((item, index) => {
    const div = document.createElement('div');
    div.classList.add('course');
    div.innerHTML = `<h4>Title: ${item.title}</h4> <i>MonthDuration: ${item.monthDuration}</i>`

    document.body.appendChild(div);
})
// -----------------4-------------
coursesAndDurationArray.map(item => {
    const div = document.createElement('div');
    const h1 = document.createElement('h1');
    const p = document.createElement('p');

    div.classList.add('item');
    h1.classList.add('heading');
    p.classList.add('description');

    h1.innerText = `${item.title} :`;
    p.innerHTML = `<h3>- ${item.monthDuration}</h3>`;

    div.append(h1, p);
    document.body.appendChild(div);
})
// -----------------5-------------
let simpsons = [
    {
        name: 'Bart',
        surname: 'Simpson',
        age: 10,
        info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Barthliomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
        photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
    },
    {
        name: 'Homer',
        surname: 'Simpson',
        age: 40,
        info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
        photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
    },
    {
        name: 'Marge',
        surname: 'Simpson',
        age: 38,
        info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
    },
    {
        name: 'Lisa',
        surname: 'Simpson',
        age: 9,
        info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
    },
    {
        name: 'Maggie',
        surname: 'Simpson',
        age: 1,
        info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
    },
];
simpsons.forEach((character) => {
    const div = document.createElement('div');
    const block = document.createElement('div');
    const image = document.createElement('img');

    div.classList.add('member');

    const {name, surname, age, info, photo} = character;
    div.innerHTML = `Name:<h3>${name}</h3> Surname:<h3>${surname}</h3>`;
    block.innerHTML = `<b>Age:</b> ${age} <p><b>Info:</b> ${info}</p><hr>`;
    image.src = `${photo}`

    div.append(image, block);

    document.body.appendChild(div);
})
// -----------additional------------
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
const mainBlock = document.createElement('div');
mainBlock.classList.add('main-block')

coursesArray.forEach((course) => {
    const elementBlock = document.createElement('div');
    const titleBlock = document.createElement('div');
    const monthDurationBlock = document.createElement('div');
    const hourDurationBlock = document.createElement('div');

    titleBlock.classList.add('elements-block');
    elementBlock.classList.add('elements-block');

    const {monthDuration, hourDuration, modules, title} = course;
    titleBlock.innerHTML = `${title}`
    monthDurationBlock.innerHTML = `month: ${monthDuration}`
    hourDurationBlock.innerHTML = `hour: ${hourDuration}`

    if (Array.isArray(course.modules)) {
        const modulesBlock = document.createElement('div');
        const ul = document.createElement('ol');

        modulesBlock.classList.add('modules-block');

        modules.map(module => {
            const li = document.createElement('li');
            li.innerText = module;
            ul.appendChild(li);
            modulesBlock.appendChild(ul);
        })
        elementBlock.append(monthDurationBlock, hourDurationBlock)
        mainBlock.append(titleBlock, elementBlock, modulesBlock)
    }
    document.body.appendChild(mainBlock);
})


