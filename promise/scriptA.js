//1
function successPromise() {
    return new Promise((resolve, reject) => {
        resolve('Success!');
    })
}

successPromise().then((data) => {
    console.log(data)
});

//2
function fullName(firstName, lastName){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`${firstName} ${lastName}`)},
        1000);});
}

fullName('John', 'Doe').then((data) => {
    console.log(data);
});

//3
function addFive(num){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(num + 5);
        }, 500);
    });
}

function multiplyTwo(num){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(num * 2);
        }, 500);
    });
}

function substractTen(num){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(num - 10);
        }, 500);
    });
}


addFive(10)
    .then(multiplyTwo)
    .then(substractTen)
    .then(console.log);

//4
function divide(dividend, divisor){
    return new Promise((resolve, reject) => {
        if(divisor === 0){
            reject('You cannot divide by 0!');
        }
        resolve(dividend / divisor);
    });
}

divide(10, 0).then((data) => {console.log(data);})
.catch((error) => {console.log(error);});

//5
async function printFullName(firstName, lastName){
    const fName = await fullName(firstName, lastName);
    console.log(fName);
}

printFullName('John', 'D');

async function mathEx(num){
    const add = await addFive(num);
    const multiply = await multiplyTwo(add);
    const substract = await substractTen(multiply);
    console.log(substract);
}

mathEx(8);


//6
async function asynDivision(dividend, divisor){
    try{
        const division = await divide(dividend, divisor);
        console.log(division);
    }catch(error){
        console.log(error);
    }
}

asynDivision(10, 2);