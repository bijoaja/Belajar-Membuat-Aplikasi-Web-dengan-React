import React from "react";
import NoteList from "./NoteList";
import {getInitialData} from "../utils/index";
import NoteInput from "./NoteInput";
import NoteSearch from "./NoteSearch";


class NoteApp extends React.Component{
  constructor(props){
    super(props);
        this.state= {
            notes: getInitialData(),
            search: null
            // arsip: getInitialData().filter((item) => item.archived)
        }
        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
        this.noteSearchHandler = this.noteSearchHandler.bind(this);
        this.onArsipHandler = this.onArsipHandler.bind(this)
      }
  
      onDeleteHandler(id) {
        const notes = this.state.notes.filter(note => note.id !== id);
        this.setState({ notes });
      }

    onAddNoteHandler({ title, body}) {
        this.setState((prevState) => {
          return {
            notes: [
              ...prevState.notes,
              {
                id: +new Date(),
                title,
                body,
                createdAt: +new Date(),
                archived: false
              }
            ]
          }
        });
    }

    noteSearchHandler(event){
      const query = event.target.value.toLowerCase();
      this.setState(() => {
        return {
          search: query
        }
      })
    
    }
    onArsipHandler(event){
      const id = event.target.id
      this.setState((prevState) => {
        return {
          notes: prevState.notes.map((item) => item.id === parseInt(id) ? {...item, archived: !item.archived} : item)
        }
      })
    }

    logika(item){
      
        if(this.state.search === null || this.state.search === ""){
          return this.state.notes
        }else if(item.title.toLocaleLowerCase().includes(this.state.search)){
          return item
        }

        
      
    }

    render() {
        return (
          <div className="note-app">
            <div className="note-app__header">
              <h1>NOTES APP</h1>
              <NoteSearch searchNote={this.noteSearchHandler}/>
            </div>
            <div className="note-app__body">
              <NoteInput addNote={this.onAddNoteHandler} />
              <h2>CATATAN AKTIF</h2>
              
              <NoteList notes={this.state.notes.filter((item) => this.logika(item)).filter((item) => !item.archived)} onDelete={this.onDeleteHandler} onArsip={this.onArsipHandler}/>
              <h2>Arsip</h2>
          
              <NoteList notes={this.state.notes.filter((item) => this.logika(item)).filter((item) =>  item.archived)} onDelete={this.onDeleteHandler} onArsip={this.onArsipHandler} />
            </div>
          </div>
        );
      }
}

export default NoteApp;