import React from "react";

const Book = (props) => {
  return (
    <div className="book">
        <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: props.cover }}></div>
            <div className="book-shelf-changer">
                <select>
                <option value="move" disabled={props.shelf === 'move'}>Move to...</option>
                <option value="currentlyReading" disabled={props.shelf === 'currentlyReading'}>Currently Reading</option>
                <option value="wantToRead" disabled={props.shelf === 'wantToRead'}>Want to Read</option>
                <option value="read" disabled={props.shelf === 'read'}>Read</option>
                <option value="none" disabled={props.shelf === 'none'}>None</option>
                </select>
            </div>
            </div>
            <div className="book-title">{props.title}</div>
            <div className="book-authors">{props.authors}</div>
        </div>
  );
};

export default Book;