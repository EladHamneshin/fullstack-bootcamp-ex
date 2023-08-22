function max(num1: number, num2: number): number {
   return num1 > num2 ? num1 : num2;
}
function printMax(num1: number, num2: number): void {
   console.log(max(num1, num2));
}
function isEven(num: number): string {
   return num % 2 === 0? "even" : "odd";
}
function len(str: string): number {
   return str.length;
}
function generateArray(n : number){
    let arr = [];
    for(let i = 1; i <= n; i++){
        arr.push(i);
    }
    return arr;
}
function maxArray(arr: number[]): number {
    let max = arr[0];
    for(let i = 1; i < arr.length; i++){
        if(max < arr[i]){
            max = arr[i];
        }
    }
    return max;
}
type Person = {
    name: string,
    age: number,
    isStudent: boolean
}

const person1: Person = {
    name: "Yossi",
    age: 30,
    isStudent: true
}
function printPerson(person: Person): void {
    console.log(person);
}
function isMinor(person: Person): boolean {
    return person.age < 18;
}
interface Book{
    title: string,
    aouthor: string,
    year: number
}
type Reader = {
    person: Person,
    favoriteBook: Book
}
 function getOlderReader(readers: Reader[]): Reader {
    let olderReader = readers[0];
    for(let i = 1; i < readers.length; i++){
        if(olderReader.person.age < readers[i].person.age){
            olderReader = readers[i];
        }
    }
    return olderReader;
}
function getOlderBook(readers: Reader[]): Book {
    let olderBook = readers[0].favoriteBook;
    for(let i = 1; i < readers.length; i++){
        if(olderBook.year < readers[i].favoriteBook.year){
            olderBook = readers[i].favoriteBook;
        }
    }
    return olderBook;
}