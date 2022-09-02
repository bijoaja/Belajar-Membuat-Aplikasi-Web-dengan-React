import React from 'react';
import NoteItemBody from './NoteItemBody';
import {showFormattedDate} from "../utils/index";
import DeleteButton from './DeleteButton';
import ArsipButton from './ArsipButton';
 
function NoteItem({ title, createdAt, body, id, onArsip,onDelete, arsip}) {
    return (
        <div className="note-item">
            <NoteItemBody title={title} date={showFormattedDate(createdAt)} text={body} />
            <div className='note-item__action'>
                <DeleteButton id={id} onDelete={onDelete} />
                <ArsipButton id={id} onArsip={onArsip} arsip={arsip}/>
            </div>
        </div>
 );
}
 
export default NoteItem;