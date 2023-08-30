import Book from "./Book";
import BookType from "./types/Book";

type MainProps = {
    books: BookType[]
}

export default function Main(props: MainProps) {

    return (
        <div style={{display: 'flex', justifyContent: 'space-arond'}}>
            {props.books.map((book) => (
                <Book book={book}/>
            ))}
        </div>

    )
  }
  
