import express from "express";
import {initDb} from "./dbManager.js";
import usersRouter from "./routes/users.js";

const app = express();
const port = 3000;

function initServer(app, port) {
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use("/users", usersRouter);

    app.listen(port, () => {
        console.log(`Server is up and running on port:${port}`);
    });
}

async function runApp() {
    await initDb();
    initServer(app, port);
}

runApp();
