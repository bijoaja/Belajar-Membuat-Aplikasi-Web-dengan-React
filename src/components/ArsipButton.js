import React from 'react';
 
function ArsipButton({ id, onArsip, arsip}) {
  return <button className='note-item__archive-button' id={id} onClick={(e) => onArsip(e)}>{arsip?"Pindahkan":"Arsipkan"}</button>
}
 
export default ArsipButton;