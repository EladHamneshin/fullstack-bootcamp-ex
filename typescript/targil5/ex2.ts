// 1.
// צור פונקציה גנרית ותנו לה שם מתאים שלוקחת שני ארגומנטים מסוגים שונים ומחזירה מערך המכיל את שני הארגומנטים.
// תפקיד הפונקציה, ליצור צמד 
// ['asd',3]
function createPair<T, K>(first: T, second: K): [T, K] {
    return [first, second];
}

// 2.
// צור פונקציה גנרית שמקבלת אובייקט מכל סוג ומפתח ומחזירה את ערך המפתח באובייקט
function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}

//מתקדם
//צור פונקציה גנרית שמקבלת מערך של אובייקטים ואובייקט כארגומנטים. הפונקציה תוסיף את האובייקט שהתקבל לכל איבר במערך 
// עליכם לקרוא על ולהשתמש ב: Record

function addObjToArray<T extends Record<string, any>>(arr: T[], obj: Record<string, any>): T[] {
    return arr.map(item => ({...item, ...obj}));
}

console.log(addObjToArray([{},{},{}], {a: "a"}));




// כתבו פונקציה שמקבלת אובייקט ושם שדה(מפתח).  הפונקציה תחזיר אובייקט חדש בלי המפתח
// קראו על Omit
function omit<T, K extends keyof T>(obj: T, key: K): Omit<T, K> {
    const {[key]: _, ...rest} = obj;
    return rest;
}


// כתוב פונקציה שמקבלת אובייקט,מפתח וערך. הפונקציה תחזיר אובייקט חדש עם המפתח והערך שהוזנו לה כשדה חדש באובייקט שהוזן לה
// השתמשו ב &
function addField<T , K extends string, V>(obj: T, key: K, value: V): Record<K,V>  {
    const rec = {[key]: value} as Record<K,V> ; 
    return {...obj, ...rec};
}

console.log(addField({a: "a"}, "b", 3));
