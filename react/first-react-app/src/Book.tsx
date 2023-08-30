import Title from "./Title";
import BookType from "./types/Book";

type BookProps = {
    book: BookType
}


export default function Book(props: BookProps){
  return (
    <div>
        <Title text={props.book.title}/>
        <img src = {props.book.imgSrc} alt = "book"
        />
        <p>{props.book.description}</p>
    </div>
  )
}