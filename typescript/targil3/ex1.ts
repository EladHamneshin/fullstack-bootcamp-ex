// Step 1: נתון לכם אינאם - אתם רשאים להפוך אותו למשהו אחר
export enum ItemType {
  Book = 'book',
  DVD = 'dvd',
}

// Step 2:  ספר צריך להכיל שדות
interface Book {
  type: ItemType.Book,
  title: string,
  author: string
}

interface DVD {
  type: ItemType.DVD,
  title: string,
  duration: number
}


function isBook(item: Book | DVD): item is Book {
  return item.type === ItemType.Book;
}

// Step 3: פונקציה מקבלת מערך של פריטים, ופונקצית פילטור. ומחזירה מערך מפולטר של פריטים
function filterItems<T extends Book | DVD>(items: T[], filterFn: (item: T) => boolean): T[] {
  return items.filter(filterFn);
}

// Step 4: הפונקציה מקבלת מערך של פריטים ומדפיסה את כל המידע הרלוונטי לגבי כל פריט

function printItemsData<T extends Book | DVD>(items: T[]): void {
  items.forEach(item => {
    if (isBook(item)) {
      console.log(`Book: ${item.title} by ${item.author}`);
    } else {
      console.log(`DVD: ${item.title} - ${item.duration}min`);
    }
  });
}

// Test data
const libraryItems: (Book | DVD)[] = [
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