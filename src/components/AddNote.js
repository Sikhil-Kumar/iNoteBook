
import NoteContext from '../context/notes/noteContext';
import React, { useContext, useState } from 'react'; // Importing useContext from react

const AddNote = () => {
    const context = useContext(NoteContext);

    const { addNote, getNotes } = context;
    const [note, setnote] = useState({ title: " ", description: "", tag: "default" });

    const handleclick = async (e) => {
        e.preventDefault();
     await  addNote(note.title, note.description, note.tag);
     setnote({ title: " ", description: " ", tag: " " })
getNotes()
    }


    const onChange = (e) => {
        setnote({ ...note, [e.target.name]: e.target.value })
    }



    return (
        <div>
            <div className='container my-3'>
                <h1>Add a note to your notes</h1>
                <form className='container my-3'>


                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">Title</label>
                        <input type="text" className="form-control" name="title" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={onChange} value={note.title} minLength={5} required/>
                    </div>


                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">Description</label>
                        <input type="text" className="form-control" id="description" name="description" onChange={onChange}  value={note.description} minLength={5} required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="tag" className="form-label">TAG</label>
                        <input type="text" className="form-control" id="tag" name="description" onChange={onChange} value={note.tag} minLength={5} required />
                    </div>

                    <button  disabled={note.title.length<5|| note.description.length<5}   type="submit"  className="btn btn-primary" onClick={handleclick}>Add Notes</button>
                </form>
            </div>
        </div>
    )
}

export default AddNote
