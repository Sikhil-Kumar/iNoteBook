
// import React, { useContext } from 'react';
// import NoteContext from '../context/notes/noteContext';
// const Notes = () => {
//     const { notes } = useContext(NoteContext);
    
//   return (
    
//        <div className='container my-3'>
//         <h1>Your Notes</h1>
//         {notes.map(note => (
//           <div key={note.id}>{note.title}</div>
//         ))}
//       </div>
    
//   )
// }

// export default Notes


// import React, { useContext } from 'react';
// import NoteContext from '../context/notes/noteContext';
// import Noteitem from './Noteitem';

// const Notes = () => {
//   const { notes } = useContext(NoteContext);
  
//   return (
//     <div className='container my-3'>
//       <h1>Your Notes</h1>
//       {notes.map((note)=> {

      
       
//         return <Noteitem note={note}/>;
//       })}
//     </div>
//   );
// }

// export default Notes;


// import React, { useContext } from 'react';
// import NoteContext from '../context/notes/noteContext';
// import Noteitem from './Noteitem';

// const Notes = () => {
//     const context = useContext{NoteContext}
//   const { notes , addNote} = context;
  
//   return (
//     <div className='row my-3'>
//       <h1>Your Notes</h1>
//       {notes.map((note, index) => (
//         <Noteitem key={note._id} note={note} />
//       ))}
//     </div>
//   );
// }

// export default Notes;

// import React, { useContext, useEffect } from 'react';
// import NoteContext from '../context/notes/noteContext';
// import Noteitem from './Noteitem';

// import AddNote from './AddNote';
// const Notes = () => {
//   const context = useContext(NoteContext); // Corrected syntax
  
//   const { notes,getNotes } = context;
  
// useEffect(() => {
//   getNotes()
// })


//   return (
//     <>
//  <AddNote/>
//     <div className='row my-3'>
//       <h1>Your Notes</h1>
//       {notes.map((note) => (
//         <Noteitem key={note._id} note={note} />
//       ))}
//     </div>
//     </>
   
//   );
// }

// export default Notes;


// import React, { useContext, useEffect } from 'react';
// import NoteContext from '../context/notes/noteContext';
// import Noteitem from './Noteitem';

// const Notes = () => {
//   const context = useContext(NoteContext);
//   const { notes, getNotes } = context;

//   useEffect(() => {
//     getNotes();
//   }, []);

//   return (
//     <>
//       <div className='row my-3'>
//         <h1>Your Notes</h1>
//         {notes.length > 0 ? (
//           notes.map((note) => (
//             <Noteitem key={note._id} note={note} />
//           ))
//         ) : (
//           <p>Loading...</p>
//         )}
//       </div>
//     </>
//   );
// }

// export default Notes;



import React, { useContext, useEffect , useRef, useState} from 'react';
import NoteContext from '../context/notes/noteContext';
import Noteitem from './Noteitem';
import AddNote from './AddNote';

const Notes = () => {
  
  const { notes, getNotes , editNote} = useContext(NoteContext);
  const [note, setnote] = useState({id:" ", etitle: " ", edescription: "", etag: "default" });


  useEffect(() => {
    getNotes();
    // eslint-disable-next-line
  }, []);


  const updateNote = (currentNote) => {
    ref.current.click();
    setnote({ id: currentNote._id ,etitle: currentNote.title, edescription : currentNote.description , etag:currentNote.tag})

  }
  
  
  const ref =  useRef(null)
  const refClose =  useRef(null)
  

  
   

  const handleclick = (e) => {
    console.log("updating the note.." , note)
    // e.preventDefault();
    editNote(note.id , note.etitle , note.edescription , note.etag)
    refClose.current.click();
   
}


const onChange = (e) => {
    setnote({ ...note, [e.target.name]: e.target.value })
}






  return (
    <>
<div>
  <AddNote/>
  
<button  ref = {ref}  type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
  EDIT NOTES
</button>


<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">UPDATE NOTE</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <form className='container my-3'>


<div className="mb-3">
    <label htmlFor="etitle" className="form-label">Title</label>
    <input type="text" className="form-control" name="etitle" value={note.etitle} id="etitle" aria-describedby="emailHelp" onChange={onChange} />
</div>


<div className="mb-3">
    <label htmlFor="edescription" className="form-label">Description</label>
    <input type="text" className="form-control" id="edescription" value={note.edescription} name="edescription" onChange={onChange}  minLength={5} required />
</div>
<div className="mb-3">
    <label htmlFor="etag" className="form-label">TAG</label>
    <input type="text" className="form-control" id="etag" value={note.etag} name="etag" onChange={onChange} minLength={5} required/>
</div>

<button type="submit" className="btn btn-primary" onClick={handleclick}>Add Notes</button>
</form>
      </div>
      <div className="modal-footer">
        <button ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button disabled={note.etitle.length<5|| note.edescription.length<5} type="button" onClick={handleclick} className="btn btn-primary">UPDATE NOTE</button>
      </div>
    </div>
  </div>
</div>
</div>
   
    <div>
      <h1>Your Notes</h1>
      <div className= 'container'>
      {notes.length===0 &&'No Notes To Display'}
      </div>
     
      {notes.map((note) => (
        <Noteitem key={note._id} note={note}  updateNote={updateNote}/>
      ))}
    </div>
    </>
  );
}

export default Notes;




