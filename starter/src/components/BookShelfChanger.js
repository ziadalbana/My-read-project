import React from "react";
const BookshelfChanger=({optionsState,optionChangerHandler,item})=>{
  const[optionValue,setOptionValue]=React.useState(optionsState);
  const handleChange=(event)=>{
    setOptionValue(event.target.value);
    optionChangerHandler(item.id,item,event.target.value);
  }
    return(
        <div className="book-shelf-changer">
        <select value={optionValue}
        onChange={handleChange}
        >
          <option value="move" disabled>
            Move to...
          </option>
          <option value="currentlyReading">
            Currently Reading
          </option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    );
}
export default BookshelfChanger;