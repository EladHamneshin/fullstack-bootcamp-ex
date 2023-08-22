function max(num1, num2) {
    return num1 > num2 ? num1 : num2;
}
function printMax(num1, num2) {
    console.log(max(num1, num2));
}
function isEven(num) {
    return num % 2 === 0 ? "even" : "odd";
}
function len(str) {
    return str.length;
}
function generateArray(n) {
    var arr = [];
    for (var i = 1; i <= n; i++) {
        arr.push(i);
    }
    return arr;
}
function maxArray(arr) {
    var max = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i];
        }
    }
    return max;
}
var person1 = {
    name: "Yossi",
    age: 30,
    isStudent: true
};
function printPerson(person) {
    console.log(person);
}
function isMinor(person) {
    return person.age < 18;
}
function getOlderReader(readers) {
    var olderReader = readers[0];
    for (var i = 1; i < readers.length; i++) {
        if (olderReader.person.age < readers[i].person.age) {
            olderReader = readers[i];
        }
    }
    return olderReader;
}
function getOlderBook(readers) {
    var olderBook = readers[0].favoriteBook;
    for (var i = 1; i < readers.length; i++) {
        if (olderBook.year < readers[i].favoriteBook.year) {
            olderBook = readers[i].favoriteBook;
        }
    }
    return olderBook;
}
