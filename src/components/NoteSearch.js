import React from "react";

function NoteSearch({searchNote}){
    return(
        <form id="searchBook" className="note-search">
            <label htmlFor="searchBookTitle"></label>
                <input id="searchBookTitle" type="text" placeholder="Cari catatan ..." onChange={searchNote}/>
        </form>
    )
}

export default NoteSearch;