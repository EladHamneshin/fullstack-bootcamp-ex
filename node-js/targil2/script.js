import process from "process";
import fs from "fs";

const args = process.argv.slice(2);
const path = args[0];
const word = args[1];

fs.readFile('./' + path, 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    //check how many times the word appears in the text
    let count = 0;

});