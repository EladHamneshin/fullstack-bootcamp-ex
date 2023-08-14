import {reverse, uniq} from "./lodashModule.js";
import {countArrVowels} from "./utils.js"
import fs from 'fs'

fs.readFile('./data/file.txt', 'utf-8', function (err, data) {
    if (err) throw err;

    // print file content
    console.log(data);

    // print file number of words
    console.log(data.split(" ").length);

    // print reverse
    console.log(reverse(data));

    // print uniq 
    console.log(uniq(data));

    // print uniq length
    console.log(uniq(data).length);


    let fileContent = "";
    // print uniq capital
    fileContent += uniq(data).toUpperCase() + "\n";

    // print uniq longer than 5 
    fileContent += uniq(data).split(" ").filter(x => x.length > 5).join(" ") + "\n";

    // print num of vowel
    fileContent +=  "Vowels Count: " + JSON. stringify(countArrVowels(uniq(data).split(" ")));



    fs.writeFile('message.txt', fileContent, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
    });
});

