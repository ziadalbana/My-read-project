import React from "react";
import { search } from "../BooksAPI";
import Book from "./Book.js";
import {Link} from 'react-router-dom' 
const SearchPage=({optionChangerHandler,AllBooks})=>{
  const[searchTerm,setSearchTerm]=React.useState('');
  const[booksList,setBooksList]=React.useState([]);
  const handleSearch = event => {
    setSearchTerm(event.target.value);
    console.log("handler "+searchTerm)
  };
  const handleShelfBooks=(AllBooks,searchResult)=>{
     for(let i=0;i<AllBooks.length;i++){
      let index=searchResult.findIndex(result=>(result.id===AllBooks[i].id));
      console.log(index);
      if(index!==-1) searchResult[index]=AllBooks[i];
     }
     return searchResult;
  }
  React.useEffect(()=>{
    search(searchTerm)
    .then(result=>{

        if(Array.isArray(result))
        {  
            setBooksList(handleShelfBooks(AllBooks,result));
        }else{
            setBooksList([]);
        }
    })
    
  },[searchTerm]);

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