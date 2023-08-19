import express from "express";
import {readDb} from "./DL/usersDL.js";
import {router} from "./routes/usersRouter.js";

const app = express();
const port = 3000;

function initServer(app, port) {
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use("/users", router);

    app.listen(port, () => {
        console.log(`Server is up and running on port:${port}`);
    });
}

async function runApp() {
    try{
        await readDb();
        initServer(app, port);
    }
    catch(err){
        console.log(err.message);
    }
}

runApp();
