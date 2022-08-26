import React from "react";
import { search } from "../BooksAPI";
import Book from "./Book.js";
import {Link} from 'react-router-dom' 
const SearchPage=({optionChangerHandler,AllBooks})=>{
  const[searchTerm,setSearchTerm]=React.useState('');
  const[booksList,setBooksList]=React.useState([]);
  const handleSearch = event => {
    setSearchTerm(event.target.value);
  };
  const handleShelfBooks=(AllBooks,searchResult)=>{
    for(let i=0;i<AllBooks.length;i++){
     let index=searchResult.findIndex(result=>(result.id===AllBooks[i].id));
     if(index!==-1) searchResult[index]=AllBooks[i];
    }
    return searchResult;
 }
  React.useEffect(()=>{
    if(searchTerm.length===0) setBooksList([]);
    else
    search(searchTerm)
    .then(result=> (Array.isArray(result))? 
        setBooksList(handleShelfBooks(AllBooks,result))
        : 
        setBooksList([])
        )
    
  },[searchTerm,AllBooks]);

    return (
    <div className="search-books">
          <div className="search-books-bar">
            <Link
              to="/"
              className="close-search"
            >
              Close
            </Link>
            <div className="search-books-input-wrapper">
              <input
                type="text"
                placeholder="Search by title, author, or ISBN"
                value={searchTerm}
                onChange={handleSearch}
              />
            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid">
            {booksList.map(item=><li key={item.id}><Book bookItem={item} optionChangerHandler={optionChangerHandler}/></li>)}
            </ol>
          </div>
        </div>
  );
}
export default SearchPage;