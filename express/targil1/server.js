import express from "express";
import { v4 as uuidv4 } from "uuid";
import bcrypt from "bcrypt";
import PasswordValidator from "password-validator";
import emailValidator from "email-validator";

const passwordValidator = new PasswordValidator();
passwordValidator.is().min(8).has().uppercase().has().lowercase();

function router(app, data) {
    app.get("/users", (req, res) => {
        res.send(data);
    });

    app.get("/users/:uid", (req, res) => {
        const uid = req.params.uid;
        let user;
        try {
            user = getUserById(uid);
        } catch (error) {
            res.send(error.message);
        }
        res.send(user);
    });

    app.post("/users/exist", (req, res) => {
        const { email, password } = req.body;
        const users = data.filter((user) => user.email === email);
        users.forEach((user) => {
            bcrypt.compare(password, user.password, (err, result) => {
                if (user) res.send("User is connected");
                else res.send(" wrong credentials");
            });
        });
    });

    app.post("/users", (req, res) => {
        const { email, password } = req.body;
        if (!emailValidator.validate(email)) res.send("email is not valid");
        if (!passwordValidator.validate(password))
            res.send("password is not valid");
        bcrypt.hash(password, 10, (err, hash) => {
            if (err) res.send(err.message);
            else {
                const user = { id: uuidv4(), email, password: hash };
                data.push(user);
                res.send(data);
            }
        });
    });

    app.delete("/users/:uid", (req, res) => {
        const uid = req.params.uid;
        try {
            deleteUserById(uid);
        } catch (error) {
            res.send(error.message);
        }
        res.send(data);
    });

    app.put("/users/:uid", (req, res) => {
        const uid = req.params.uid;
        let user;
        try {
            user = getUserById(uid);
        } catch (error) {
            res.send(error.message);
        }

        const { email, password } = req.body;
        user.email = email;
        user.password = password;
        res.send(data);
    });
}

function getUserById(uid) {
    const user = data.find((user) => user.id === uid);
    if (!user) throw new Error("id not found");
    return user;
}

function deleteUserById(uid) {
    const userIndex = data.indexOf(getUserById(uid));
    data.splice(userIndex, 1);
}

export function initServer(app, port, data) {
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    router(app, data);

    app.listen(port, () => {
        console.log(`Server is up and running on port:${port}`);
    });
}
