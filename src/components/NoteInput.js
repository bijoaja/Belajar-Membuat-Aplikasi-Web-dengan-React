import React from 'react';
 
class NoteInput extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            title: '',
            body: '',
            karakter: 50
        }

        this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
        this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    }


    onTitleChangeEventHandler(event) {
      const newKarakter = 50 - event.target.value.length
      const inputTitle = document.getElementById("inputTitle")
      if(newKarakter >= 0){
        inputTitle.value = event.target.value
        this.setState(() => {
          return {
            title: event.target.value,
            karakter: newKarakter
          }
        });
      }
      }

    onBodyChangeEventHandler(event) {
        this.setState(() => {
          return {
            body: event.target.value,
          }
        });
      }
    onSubmitEventHandler(event) {
        event.preventDefault();
        this.props.addNote(this.state);
      }

      
 render() {
   return (
    <div className='note-input'>
      <h2>Buat Catatan</h2>
      <form onSubmit={this.onSubmitEventHandler}>
        <p className='note-input__title__char-limit'>sisa karakter: {this.state.karakter}</p>
        <input id="inputTitle" className='note-input__title' type="text" placeholder="Ini adalah judul ..." value={this.state.title} onChange={this.onTitleChangeEventHandler} />
        <textarea id="inputBody" className='note-input__body' type="text"  placeholder="Tuliskan catatanmu disini ..."  value={this.state.body} onChange={this.onBodyChangeEventHandler}/>
        <button type="submit">buat</button>
      </form>
    </div>
   )
 }
}
 
export default NoteInput;