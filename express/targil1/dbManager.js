import jsonFile from "jsonfile";

let data = [];

export async function initDb() {
    return jsonFile.readFile(file)
        .then(obj => data = obj.users)
        .catch(error => console.error(error));
}

export function getData() {
    return JSON.parse(JSON.stringify(data));
}

export function getUsersByEmail(email) {
    return getData().filter((user) => user.email === email);
}


export function getUserById(uid) {
    const user = getData().find((user) => user.id === uid);
    if (!user) throw new Error("id not found");
    return user;
}

export function deleteUser(uid) {
    const userIndex = data.indexOf(getUserById(uid));
    data.splice(userIndex, 1);
    updateData();
}

export function addUser(user) {
    data.push(user);
    updateData();
}

export function updateData() {
    jsonFile.writeFile("./data.json", { users: data }, (err) => {
        if (err) console.log(err.message);
    });
}