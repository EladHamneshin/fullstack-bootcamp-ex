function myReverse(arr) {
    return arr.reverse();
}

function myUniq(arr) {
    return arr.filter((value, index, self) => {
        return self.indexOf(value) === index;
    });
}