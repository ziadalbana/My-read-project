import Book from "./Book";
const Bookshelf=({shelfName,condition,arr,optionChangerHandler})=>{
    let filtered=arr.filter(item=>(item.shelf)===condition);
   return(
    <div className="bookshelf">
        <h2 className="bookshelf-title">{shelfName}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {filtered.map(item=><li key={item.id}><Book bookItem={item} optionChangerHandler={optionChangerHandler}/></li>)}
                </ol>
            </div>
     </div>
   ); 
}
export default Bookshelf;