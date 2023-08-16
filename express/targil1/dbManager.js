import jsonFile from "jsonfile";

let data = [];

export function initDb() {
    return new Promise((resolve, reject) => {
        jsonFile.readFile("./data.json", (err, obj) => {
            if (err) reject(err);
            else {
                data = obj.users;
                resolve();
            }
        });
    })
}

export function getData() {
    return JSON.parse(JSON.stringify(data));
}

export function getUsersByEmail(email) {
    return getData().filter((user) => user.email === email);
}


export function getUserById(userId) {
    console.log(getData());
    const user = getData().find((user) => user.id === userId);
    if (!user) throw new Error("id not found");
    return user;
}

export function deleteUser(userId) {
    let userIndex = getUserIndex(userId);
    data.splice(userIndex, 1);
    updateData().catch((err) => console.log(err.message));
}

export function addUser(user) {
    data.push(user);
    updateData().catch((err) => console.log(err.message));
}

export function updateUser(userId, user) {
    let userIndex = getUserIndex(userId);
    data[userIndex] = {...user};
    updateData().catch((err) => console.log(err.message));
}

export function updateData() {
    return new Promise((resolve, reject) => {
        jsonFile.writeFile("./data.json", { users: data }, (err) => {
            if (err) reject(err.message);
            else resolve();
        });
    });
}

function getUserIndex(userId) {
    let userIndex = -1;
    data.forEach((user, index) => { if (user.id === userId) userIndex = index; });
    if (userIndex === -1) throw new Error("id not found");
    return userIndex;
}