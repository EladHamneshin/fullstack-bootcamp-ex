// כל אובייקט מחויב בממשק או טיפוס

//1.
// כתוב פונקציה שמקבלת מערך של מספרים ומחזירה את הסכום של כל המספרים הזוגיים במערך.
function sumEven(arr: number[]): number {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]%2 === 0) {
            sum += arr[i];
        }
    }
    return sum;
}


// 2.
// כתוב פונקציה שמקבלת אובייקט עם שני שדות: רוחב וגובה ומחזירה שטח של מלבן עם מידות אלו.
interface Rectangle {
    width: number,
    height: number
}

function calcArea(rect: Rectangle): number {
    return rect.width * rect.height;
}


// 3.
// כתוב פונקציה שמקבלת מחרוזת ומחזירה אמת אם המחרוזת היא פלינדרום ושקר אם לא.
// פלינדרום היא מחרוזת שאפשר לקרוא אותה אותו הדבר מהסוף להתחלה.
// דוגמאות: אבא, אמא, שמש, ילד כותב בתוך דלי,1235321

function isPalindrome(str: string): boolean {
    let isPalindrome = true;
    for (let i = 0; i < str.length/2; i++) {
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
function capitalize(arr: string[]): string[] {
    const newArr: string[] = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(arr[i][0].toUpperCase() + arr[i].slice(1).toLowerCase());
    }
    return newArr;
}


// 5.
// כתוב פונקציה שמקבלת מערך של מספרים ומחזירה מערך חדש עם המספרים הייחודיים בלבד (הסרת כפילויות).
function unique(arr: number[]): number[] {
    const newArr: number[] = [];
    for (let i = 0; i < arr.length; i++) {
        if (newArr.indexOf(arr[i]) === -1) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

// 6.
// כתוב פונקציה שמקבלת אובייקט עם שדות עבור שם פרטי ושם משפחה
// הפונקציה מחזירה אובייקט המכיל את שתי שדות המתארות את ראשי התיבות של האובייקט
// דוגמה
// Input: { firstName: "John", lastName: "Doe" }
// Output: { firstInitial: "J", lastInitial: "D" }
// השתמשו בממשקים מתאימים עבור הקלט והםלט של הפונקציה
interface Person {
    firstName: string,
    lastName: string
}

interface Initials {
    firstInitial: string,
    lastInitial: string
}

function getInitials(person: Person): Initials {
    return {
        firstInitial: person.firstName[0],
        lastInitial: person.lastName[0]
    }
}


// 7.
// כתוב פונקציה שמקבלת מערך של אובייקטים עם שדות שם וגיל, ומחזירה את הגיל הממוצע של כל האובייקטים במערך.

//  עבור המערך
// [
//     { name: "John", age: 25 },
//     { name: "Jane", age: 30 },
//     { name: "Bob", age: 40 },
// ]
// Output: 31.666666666666668
interface PersonAge {
    name: string,
    age: number
}

function getAverageAge(persons: PersonAge[]): number {
    let sum = 0;
    for (let i = 0; i < persons.length; i++) {
        sum += persons[i].age;
    }
    return sum / persons.length;
}


// 8.
// כתוב פונקציה שמקבלת מערך של מספרים ומחזירה את ערכי המקסימום והמינימום במערך כאובייקט בעל שדות מתאימים.
interface MinMax {
    min: number,
    max: number
}
function getMinMax(arr: number[]):MinMax{
    return {
        min: Math.min(...arr),
        max: Math.max(...arr)
    }
}


// 9.
// כתוב פונקציה שמקבלת מערך ומדפיסה אותו בסדר הפוך

function printReverse(arr: any[]): void {
    for (let i = arr.length - 1; i >= 0; i--) {
        console.log(arr[i]);
    }
}