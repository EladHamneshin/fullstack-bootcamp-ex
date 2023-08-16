import express from "express";
import jsonFile from "jsonfile";
import { initServer } from "./server";

const app = express();
const port = 3000;
const data = [];

jsonFile.readFile("./data.json", (err, data) => {
    if (err) console.log(err.message);
    else console.log(data.users);
});
