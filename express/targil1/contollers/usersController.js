import usersBL from "../BL/usersBL.js";

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

export async function isEmailPasswordExist(req, res) {
    const { email, password } = req.body;

    try{
        const res = await usersBL.isEmailPasswordExist(email, password);
    } catch(err){
        res.send(err.message);
    }

    res? res.send("user is connected") : res.send("wrong credentials");
}

export async function addUser(req, res) {
    const { email, password } = req.body;

    try {
        const user = await usersBL.addUser(email, password);
        res.send(usersBL.getUsers());
    } catch (error) {
        res.send(error.message);
    }
}

export function deleteUser(req, res) {
    try {
        usersBL.deleteUser(req.params.id);
        res.send(usersBL.getUsers());
    } catch (error) {
        res.send(error.message);
    }
}

export async function updateUser(req, res) {
    const { email, password } = req.body;
    
    try {
        await usersBL.updateUser(req.params.id, email, password);
        res.send(usersBL.getUsers());
    } catch (error) {
        res.send(error.message);
    }
}
