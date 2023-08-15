const express = require('express');
const app = express();
const port = 3000;


const data = [
{id: '1', email: "1@gmail.com", password: "11111111" },
{id: '2', email: "2@gmail.com", password: "22222222" },
{id: '3', email: "3@gmail.com", password: "33333333" }
];

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/users', (req, res) => {
    res.send(data);
})

app.get('/users/:uid', (req, res) => {
    const uid = req.params.uid;
    let user;
    try{
        user = getUserById(uid);
    }
    catch(error){
        res.send(error.message);
    }
    res.send(user);
})

app.post('/users', (req, res) => {
    data.push(req.body);
    res.send(data);
})

app.delete('/users/:uid', (req, res) => {
    const uid = req.params.uid;
    try{
        deleteUserById(uid);
    }catch(error){
        res.send(error.message);
    }
    res.send(data);
})

app.put('/users/:uid', (req, res) => {
    const uid = req.params.uid;
    let user;
    try{
        user = getUserById(uid);
    } catch(error){
        res.send(error.message);
    }

    const {email, password} = req.body;
    user.email = email;
    user.password = password;
    res.send(data);
})

app.listen(port, () => {
console.log(`Server is up and running on port:${port}`);
})


function getUserById(uid){
    const user = data.find(user => user.id === uid);
    if(!user)
        throw new Error("id not found");
    return user;
}

function deleteUserById(uid){ 
    const userIndex = data.indexOf(getUserById(uid));
    data.splice(userIndex, 1);
}