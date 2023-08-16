import express from "express";
import bcrypt from "bcrypt";
import PasswordValidator from "password-validator";
import emailValidator from "email-validator";
import { v4 as uuidv4 } from "uuid";
import * as dbManager from "../dbManager.js";

export const router = express.Router();
const passwordValidator = new PasswordValidator();
passwordValidator.is().min(8).has().uppercase().has().lowercase();

router.get("/", (req, res) => {
    res.send(dbManager.getData());
});

router.get("/:uid", (req, res) => {
    const uid = req.params.uid;
    let user;
    try {
        user = dbManager.getUserById(uid);
    } catch (error) {
        res.send(error.message);
    }
    res.send(user);
});

router.post("/exist", (req, res) => {
    const { email, password } = req.body;
    const users = dbManager.getUsersByEmail(email);
    if (users.length === 0) res.send(" wrong credentials");
    else users.forEach((user) => {
        bcrypt.compare(password, user.password, (err, result) => {
            if (err) res.send(err.message);
            if (result) res.send("User is connected");
            else res.send(" wrong credentials");
        });
    });
});

router.post("/", (req, res) => {
    const { email, password } = req.body;
    if (!emailValidator.validate(email)) res.send("email is not valid");
    else if (!passwordValidator.validate(password))
        res.send("password is not valid");
    else {
        bcrypt.hash(password, 10, (err, hash) => {
            if (err) res.send(err.message);
            else {
                const user = { id: uuidv4(), email, password: hash };
                dbManager.addUser(user);
                res.send(dbManager.getData());
            }
        });
    }
});

router.delete("/:uid", (req, res) => {
    const uid = req.params.uid;
    try {
        dbManager.deleteUserById(uid);
    } catch (error) {
        res.send(error.message);
    }
    res.send(dbManager.getData());
});

router.put("/:uid", (req, res) => {
    const uid = req.params.uid;
    let user;
    try {
        user = dbManager.getUserById(uid);
    } catch (error) {
        res.send(error.message);
    }

    const { email, password } = req.body;
    user.email = email;

    bcrypt.hash(password, 10, (err, hash) => {
        user.password = hash;
        res.send(dbManager.getData());
    });
});

