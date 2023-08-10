function promiseAll(a, b, c){
    const promises = [
        new Promise((resolve, reject) => setTimeout(() => resolve(a*2), 1000)),
        new Promise((resolve, reject) => setTimeout(() => resolve(b*2), 1000)),
        new Promise((resolve, reject) => setTimeout(() => resolve(c*2), 1000))
    ]

    return Promise.all(promises);
}

promiseAll(1,2,3).then(
    (values)=>{console.log(values.reduce((a,b)=>a+b,0));});

function setteledPromiseAll(arr){
    const promises = [];
    for(let x of arr){
        promises.push(new Promise((resolve, reject) => {
            if(x<0) 
                reject("x is negative");
            resolve(x*2);
        }));
    }

    return Promise.allSettled(promises);
}

setteledPromiseAll([1,2,3,-4,5]).then((values)=>{
    // const resObj = values.reduce((acc, pStatuse)=>{
    //     if(pStatuse.status === "fulfilled")
    //         acc.resolved++
    //     else
    //         acc.rejected++;
    //     return acc;
    // }, {resolved:0, rejected:0});
    // console.log(resObj);
    console.log(values);
});