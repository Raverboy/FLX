//1
function findTypes() {
    let array = [];
    for (let i = 0; i < arguments.length; i++) {
        let x = typeof arguments[i];
        array.push(x)
    }
    return array;
}
//2
function executeforEach(array, func) {
    for (let i = 0; i < array.length; i++) {
        func(array[i]);
    }
}
//3
function mapArray(array, func) {
    let trasformed = [];
    executeforEach(array, function (el) {
        trasformed.push(func(el));
    });
    return trasformed;
}
//4
function filterArray(array, func) {
    let filtered = [];
    executeforEach(array, function (el) {
        if (func(el)) {
            filtered.push(el);
        }
    });
    return filtered;
}
//5
function getAmountOfAdultPeople(data) {
    let showAdult = filterArray(data, function (el) {
        return el.age > 18;
    });
    return showAdult;
}
//6
function getGreenAdultBananaLovers(data) {
    let showAdult = filterArray(data, function (el) {
        return el.age > 18 && el.favoriteFruit === 'banana' && el.eyeColor === 'green';
    });
    let nameAdult = mapArray(showAdult, function (el) {
        return el.name;
    });
    return nameAdult;
}
//7
function keys(obj) {
    let keys = [];
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            keys.push(key);
        }
    }
    return keys;
}
//8
function values(obj) {
    let values = [];
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            values.push(obj[key]);
        }
    }
    return values;
}
//9
function showFormattedDate(date) {
    return console.log(
        `Date: ${date.getDate()} of ${date.toLocaleString('en-US', {month: 'short'})}, ${date.getFullYear()}`
    );
}
//10
function isEvenYear(date) {
    date = new Date();
    let y = date.getFullYear();
    if (y % 2 === 0) {
        return true;
    } else {
        return false;
    }
}
//11
function isEvenMonth(date) {
    date = new Date();
    let m = date.getMonth() + 1;
    if (m % 2 === 0) {
        return true;
    } else {
        return false;
    }
}
let adults = [{
        "_id": "5b5e3168c6bf40f2c1235cd6",
        "index": 0,
        "age": 39,
        "eyeColor": "green",
        "name": "Stein",
        "favoriteFruit": "apple"
    },
    {
        "_id": "5b5e3168e328c0d72e4f27d8",
        "index": 1,
        "age": 38,
        "eyeColor": "blue",
        "name": "Cortez",
        "favoriteFruit": "strawberry"
    },
    {
        "_id": "5b5e3168cc79132b631c666a",
        "index": 2,
        "age": 2,
        "eyeColor": "blue",
        "name": "Suzette",
        "favoriteFruit": "apple"
    },
    {
        "_id": "5b5e31682093adcc6cd0dde5",
        "index": 3,
        "age": 19,
        "eyeColor": "green",
        "name": "George",
        "favoriteFruit": "banana"
    }
];
console.log(findTypes('koo', null, 5));
console.log(getAmountOfAdultPeople(adults));
console.log(getGreenAdultBananaLovers(adults));
console.log(keys({keyOne: 1, keyTwo: 2, keyThree: 3}));
console.log(values({keyOne: 1, keyTwo: 2, keyThree: 3}));
showFormattedDate(new Date('2019-01-27T01:10:00'));
console.log(isEvenYear(new Date()));
console.log(isEvenMonth(new Date()));