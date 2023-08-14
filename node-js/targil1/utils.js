function countVowels(s) {
    //regex to get vowels
    var c = s.match(/[aeiou]/gi);
    return c === null ? 0 : c.length;
  }

function countArrVowels(arr){
    return arr.reduce((acc, item)=>{
        const numOfVowels = countVowels(item);
        return [...acc, { word: item, vowelCount: numOfVowels}];
    }, []);
}

export {countArrVowels}