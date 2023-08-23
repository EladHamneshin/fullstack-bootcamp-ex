"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemType = void 0;
// Step 1: נתון לכם אינאם - אתם רשאים להפוך אותו למשהו אחר
var ItemType;
(function (ItemType) {
    ItemType["Book"] = "book";
    ItemType["DVD"] = "dvd";
})(ItemType || (exports.ItemType = ItemType = {}));
function isBook(item) {
    return item.type === ItemType.Book;
}
// Step 3: פונקציה מקבלת מערך של פריטים, ופונקצית פילטור. ומחזירה מערך מפולטר של פריטים
function filterItems(items, filterFn) {
    return items.filter(filterFn);
}
// Step 4: הפונקציה מקבלת מערך של פריטים ומדפיסה את כל המידע הרלוונטי לגבי כל פריט
function printItemsData(items) {
    items.forEach(item => {
        if (isBook(item)) {
            console.log(`Book: ${item.title} by ${item.author}`);
        }
        else {
            console.log(`DVD: ${item.title} - ${item.duration}min`);
        }
    });
}
// Test data
const libraryItems = [
    { type: ItemType.Book, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
    { type: ItemType.DVD, title: 'Inception', duration: 148 },
    { type: ItemType.Book, title: 'To Kill a Mockingbird', author: 'Harper Lee' },
    { type: ItemType.DVD, title: 'Avatar', duration: 162 },
    { type: ItemType.Book, title: 'Go Set a Watchman', author: 'Harper Lee' },
];
// Step 5:  הדפיסו את כל המידע הנתון 
printItemsData(libraryItems);
// Step 6: ממשו את פונקצית הפילטור כך שתחזיר סרטים ארוכים משעתיים והדפיסו את המערך 
const longMovies = filterItems(libraryItems, item => !isBook(item) && item.duration > 120);
printItemsData(longMovies);
// Step 7:  Harper Lee ממשו את פונקצית הפילטור כך שתחזיר רק ספרים של  
const harperLeeBooks = filterItems(libraryItems, item => isBook(item) && item.author === 'Harper Lee');
printItemsData(harperLeeBooks);
