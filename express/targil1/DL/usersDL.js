import jsonFile from "jsonfile";

let data = [];

//----------------------------- CRUD -----------------------------------

export function addUser(user) {
    data.push(user);
    updateDb().catch((err) => console.log(err.message));
}

export function getUsers() {
    return JSON.parse(JSON.stringify(data));
}

export function getUsersByEmail(email) {
    return getUsers().filter((user) => user.email === email);
}

export function getUserById(userId) {
    const user = getUsers().find((user) => user.id === userId);
    if (!user) throw new Error("id not found");
    return user;
}

export function deleteUser(userId) {
    let userIndex = getUserIndex(userId);
    data.splice(userIndex, 1);
    updateDb().catch((err) => console.log(err.message));
}

export function updateUser(user) {
    let userIndex = getUserIndex(user.id);
    data[userIndex] = {...user};
    updateDb().catch((err) => console.log(err.message));
}

//----------------------- DB operatins -----------------------------
export function readDb() {
    return new Promise((resolve, reject) => {
        jsonFile.readFile("DL/users.json", (err, obj) => {
            if (err) reject(err);
            else {
                data = obj.users;
                resolve();
            }
        });
    })
}

export function updateDb() {
    return new Promise((resolve, reject) => {
        jsonFile.writeFile("DL/users.json", { users: data }, (err) => {
            if (err) reject(err.message);
            else resolve();
        });
    });
}


//-------------------------------- utils ----------------------------------
function getUserIndex(userId) {
    let userIndex = -1;
    data.forEach((user, index) => { if (user.id === userId) userIndex = index; });
    if (userIndex === -1) throw new Error("id not found");
    return userIndex;
}