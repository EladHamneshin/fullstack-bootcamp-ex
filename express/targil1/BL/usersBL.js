import bcrypt from "bcrypt";
import PasswordValidator from "password-validator";
import emailValidator from "email-validator";
import { v4 as uuidv4 } from "uuid";
import * as usersDL from "../DL/usersDL.js";


const passwordValidator = new PasswordValidator();
passwordValidator.is().min(8).has().uppercase().has().lowercase();


export function getUsers() {
    return usersDL.getUsers();
}

export function getUserById(id) {
    return usersDL.getUserById(id);
}

export async function isEmailPasswordExist(email, password) {
    const users = usersDL.getUsersByEmail(email);

    if (users.length === 0) 
        return false;

    for (const user of users) {
        const res = await bcrypt.compare(password, user.password);
        if (res) 
            return true;
    }

    return false;
}

export async function addUser(email, password) {
    if(!emailValidator.validate(email))
        throw new Error("email is not valid");

    if(!passwordValidator.validate(password))
        throw new Error("password is not valid");

    const hash = await bcrypt.hash(password, 10);
    const user = { id: uuidv4(), email, password: hash };
    usersDL.addUser(user);
    return user;
}

export function deleteUser(id) {
    usersDL.deleteUser(id);
}

export async function updateUser(id, email, password) {
    const user = usersDL.getUserById(id);
    user.email = email;
    user.password = await bcrypt.hash(password, 10);
    usersDL.updateUser(user);
}