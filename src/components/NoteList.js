import React from "react";
import NoteItem from "./NoteItem";

function NoteList({notes, onDelete, onArsip}){
    return (
        notes.length === 0 ?
        (
            <p className="notes-list__empty-message">
                Tidak ada Catatan
            </p>
        )
        :
        <div className="notes-list">
            {
                notes.map((note) => (
                    <NoteItem key={note.id}
                    id={note.id}
                    onArsip={onArsip}
                    onDelete={onDelete}
                    arsip={note.archived}
                    {...note}/>
                ))
            }
        </div>
    )
}

export default NoteList