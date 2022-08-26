import BookshelfChanger from "./BookShelfChanger";
const Book=({bookItem,optionChangerHandler})=>{
  let option=(bookItem.shelf!=null)? bookItem.shelf:"none";
    return(
        <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage:(bookItem.imageLinks!=null&&bookItem.imageLinks.thumbnail!=null) ? 
              `url(${bookItem.imageLinks.thumbnail})`:'url(./images/missed.jpg)'
            }}
          ></div>
        <BookshelfChanger optionsState={option} optionChangerHandler={optionChangerHandler} item={bookItem}/>
        </div>
        {/* <div className="book-title">To Kill a Mockingbird</div>
        <div className="book-authors">Harper Lee</div> */}
        <div className="book-title">{bookItem.title}</div>
        <div className="book-authors">{bookItem.authors}</div>
      </div>
    );
}
export default Book;