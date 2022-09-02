import React from 'react';
 
function NoteItemBody({ title, date, text}) {
 return (
    <div className="note-item__content">
        <h3 className="note-item__title">{title}</h3>
        <p className="note-item__date">{date}</p>
        <p className="note-item__body">{text}</p>
    </div>
 );
}
 
export default NoteItemBody;