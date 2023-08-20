import * as usersBL from "../BL/usersBL.js";

export function getUsers(req, res) {
    res.send(usersBL.getUsers());
}

export function getUserById(req, res) {
    try {
        const user = usersBL.getUserById(req.params.id);
        res.send(user);
    } catch (error) {
        res.send(error.message);
    }
}

export function isEmailPasswordExist(req, res) {
    const { email, password } = req.body;

    usersBL.isEmailPasswordExist(email, password)
        .then((result) => result? res.send("user is connected") : res.send("wrong credentials"))
        .catch((err) => res.send(err.message));
}

export function addUser(req, res) {
    const { email, password } = req.body;

    usersBL.addUser(email, password)
        .then((user) => res.send(user))
        .catch((err) => res.send(err.message));
}

export function deleteUser(req, res) {
    try {
        usersBL.deleteUser(req.params.id);
        res.send(usersBL.getUsers());
    } catch (error) {
        res.send(error.message);
    }
}

export function updateUser(req, res) {
    const { email, password } = req.body;

    usersBL.updateUser(req.params.id, email, password)
        .then(() => res.send(usersBL.getUsers()))
        .catch((err) => res.send(err.message));
}
