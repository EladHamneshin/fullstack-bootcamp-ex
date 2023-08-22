// כל אובייקט מחויב בממשק או טיפוס
//1.
// כתוב פונקציה שמקבלת מערך של מספרים ומחזירה את הסכום של כל המספרים הזוגיים במערך.
function sumEven(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            sum += arr[i];
        }
    }
    return sum;
}
function calcArea(rect) {
    return rect.width * rect.height;
}
// 3.
// כתוב פונקציה שמקבלת מחרוזת ומחזירה אמת אם המחרוזת היא פלינדרום ושקר אם לא.
// פלינדרום היא מחרוזת שאפשר לקרוא אותה אותו הדבר מהסוף להתחלה.
// דוגמאות: אבא, אמא, שמש, ילד כותב בתוך דלי,1235321
function isPalindrome(str) {
    var isPalindrome = true;
    for (var i = 0; i < str.length / 2; i++) {
        if (str[i] !== str[str.length - 1 - i]) {
            isPalindrome = false;
            break;
        }
    }
    return isPalindrome;
}
//4.
// כתוב פונקציה שמקבלת מערך של מחרוזות
// הפונקציה מחזירה מערך חדש של מחרוזות שבו האות הראשונה של כל מילה 'גדולה' ושאר האותיות 'קטנות' - לדוגמה
// uppEr -> Upper
function capitalize(arr) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        newArr.push(arr[i][0].toUpperCase() + arr[i].slice(1).toLowerCase());
    }
    return newArr;
}
// 5.
// כתוב פונקציה שמקבלת מערך של מספרים ומחזירה מערך חדש עם המספרים הייחודיים בלבד (הסרת כפילויות).
function unique(arr) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        if (newArr.indexOf(arr[i]) === -1) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
function getInitials(person) {
    return {
        firstInitial: person.firstName[0],
        lastInitial: person.lastName[0]
    };
}
function getAverageAge(persons) {
    var sum = 0;
    for (var i = 0; i < persons.length; i++) {
        sum += persons[i].age;
    }
    return sum / persons.length;
}
function getMinMax(arr) {
    return {
        min: Math.min.apply(Math, arr),
        max: Math.max.apply(Math, arr)
    };
}
// 9.
// כתוב פונקציה שמקבלת מערך ומדפיסה אותו בסדר הפוך
function printReverse(arr) {
    for (var i = arr.length - 1; i >= 0; i--) {
        console.log(arr[i]);
    }
}
