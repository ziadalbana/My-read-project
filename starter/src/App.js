import "./App.css";
import React from "react";
import Bookshelf from "./components/BookShelf";
import Title from "./components/title";
import * as api from "./BooksAPI.js"
import SearchPage from "./components/SearchPage";
import OpenSearch from "./components/OpenSearch";
import { Route, Routes } from "react-router-dom";


 function App()  {
  let [AllBooks,setAllBooks]=React.useState([]);
  let[shelfs,setShelfs]=React.useState([]);

  const handleAllBooksChange=(bookId,bookItem,newState)=>{
    let index=0;
    let found=false;
    bookItem.shelf=newState;
    for(var i = 0; i < AllBooks.length; i++) {
      if (AllBooks[i].id===bookId) {
          index=i;
          found=true;
          break;
      }
    }
      if(found){
        AllBooks[index]=bookItem;
      }else{
        bookItem.shelf=newState;
        AllBooks.push(bookItem)
      }
      api.update(bookItem,newState).then(result=>setShelfs(result));
  }

  React.useEffect(()=>{
    api.getAll()
    .then(result=>{
      setAllBooks(result);
    })
  },[]
  );
  React.useEffect(()=>{
  },[shelfs]
  );
  return (
    <div className="app">
       <Routes>
       <Route exact path='/'
               element={
               <div className="list-books">
                 <Title/>
                   <div className="list-books-content">
                     <div>
                      <Bookshelf shelfName={"Currently Reading"} condition={'currentlyReading'} arr={AllBooks} optionChangerHandler={handleAllBooksChange}/>
                      <Bookshelf shelfName={"Want to Read"}  condition={'wantToRead'} arr={AllBooks} optionChangerHandler={handleAllBooksChange}/>
                      <Bookshelf shelfName={"Read"}  condition={'read'} arr={AllBooks} optionChangerHandler={handleAllBooksChange}/>
                     </div>
                   </div>
                 <OpenSearch/>
               </div>
              }
        />
        <Route exact path='/search'
               element={<SearchPage optionChangerHandler={handleAllBooksChange} AllBooks={AllBooks} />}
        />
       </Routes>
      
    </div>
  );
}

export default App;
