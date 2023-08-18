import bcrypt from "bcrypt";
import PasswordValidator from "password-validator";
import emailValidator from "email-validator";
import { v4 as uuidv4 } from "uuid";
import * as usersDL from "../DL/usersDL.js";

const passwordValidator = new PasswordValidator();
passwordValidator.is().min(8).has().uppercase().has().lowercase();


export function getUsers(req, res) {
    res.send(usersDL.getUsers());
}


export function getUserById(req, res) {
    try {
        const user = usersDL.getUserById(req.params.id);
        res.send(user);
    } catch (error) {
        res.send(error.message);
    }
}

export function getUserByEmail(req, res) {
    const { email, password } = req.body;
    const users = usersDL.getUsersByEmail(email);

    if (users.length === 0) {
        res.send(" wrong credentials");
        return;
    }
    for (const user of users) {
        bcrypt.compare(password, user.password, (err, result) => {
            if (err) {
                res.send(err.message);
                return;
            }

            if (result) {
                res.send("User is connected");
                return;
            }

            res.send(" wrong credentials");
        });
    }
}

export function addUser(req, res) {
    const { email, password } = req.body;

    if (!emailValidator.validate(email)) {
        res.send("email is not valid");
        return;
    }

    if (!passwordValidator.validate(password)) {
        res.send("password is not valid");
        return;
    }

    bcrypt.hash(password, 10, (err, hash) => {
        if (err) {
            res.send(err.message);
            return;
        }
        const user = { id: uuidv4(), email, password: hash };
        usersDL.addUser(user);
        res.send(usersDL.getUsers());
    });
}

function deleteUser(req, res) {
    try {
        usersDL.deleteUser(req.params.id);
        res.send(usersDL.getUsers());
    } catch (error) {
        res.send(error.message);
    }
}

export function updateUser(req, res) {
    const { email, password } = req.body;
    let user;

    try {
        user = usersDL.getUserById(req.params.uid);
    } catch (error) {
        res.send(error.message);
    }

    bcrypt.hash(password, 10, (err, hash) => {
        user.password = hash;
        user.email = email;
        usersDL.updateUser(user);
        res.send(usersDL.getUsers());
    });
}
