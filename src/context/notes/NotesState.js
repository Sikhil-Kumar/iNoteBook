// import { useState } from "react";
// import NoteContext from "./noteContext";

// const NoteState =(props)=>{
//    const host = "http://localhost:8000"
//    const notesInitial = 
//       [
//          {
//            "_id": "6608276254af282bdae73706",
//            "user": "6603c5895721b070fc3ef44c",
//            "title": "my title",
//            "description": "please wake up early this ",
//            "tag": "personal",
//            "date": "2024-03-30T14:53:22.681Z",
//            "__v": 0
//          },
//          {
//             "_id": "66038276254af282bdae73706",
//             "user": "6603c5895721b070fc3ef44c",
//             "title": "my title",
//             "description": "please wake up early this ",
//             "tag": "personal",
//             "date": "2024-03-30T14:53:22.681Z",
//             "__v": 0
//           },
//           {
//             "_id": "66508276254af282bdae73706",
//             "user": "6603c5895721b070fc3ef44c",
//             "title": "my title",
//             "description": "please wake up early this ",
//             "tag": "personal",
//             "date": "2024-03-30T14:53:22.681Z",
//             "__v": 0
//           }
//        ]
   
//     const [notes, setNotes] = useState(notesInitial)


// // Add a Note
// const addNote = async (title, description , tag) =>{
// // api call 
//    const response = await fetch(`${host}api/notes/addnote`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjYwM2M1ODk1NzIxYjA3MGZjM2VmNDRjIn0sImlhdCI6MTcxMTU1MjU1NX0.d7gsL-UQca_dNFX7XRr82Rk7PLEP6wDt7O0gUl_McZ0"
//       },
//       body: JSON.stringify({title , description , tag }),
//     });
  
//     const json =  response.json();
//   }

//   const note = {
//    "_id": "66508276254af282bdae73706",
//             "user": "6603c5895721b070fc3ef44c",
//             "title": title,
//             "description": description,
//             "tag": tag,
//             "date": "2024-03-30T14:53:22.681Z",
//             "__v": 0
//  };
//    setNotes(notes.concat(note))

// }


// // Delete  Note
// const deleteNote = (id) => {
//    console.log("deleting the nkde here "+ id );
//    const newNotes = notes.filter((note) => note._id !== id);
//    setNotes(newNotes);
//  }
 




// // Edit Note

// // const editNote = async(id, title, description , tag ) =>{
// // // api call 
// // const response = await fetch(`${host}api/notes/updatenote/6604fe29287048454a07340a`, {
// //    method: "POST", 
   
// //    headers: {
// //      "Content-Type": "application/json",
// //      "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjYwM2M1ODk1NzIxYjA3MGZjM2VmNDRjIn0sImlhdCI6MTcxMTU1MjU1NX0.d7gsL-UQca_dNFX7XRr82Rk7PLEP6wDt7O0gUl_McZ0"
// //    },
  
// //    body: JSON.stringify(data), 
// //  });
// //  return response.json(); 


// // // logic to edit in client 
// //    for (let index = 0; index < array.length; index++) {
// //       const element = notes[index];
// //       if (element._id === id ){
// //          element.title = title;
// //          element.description = description;
// //          element.tag = tag;
// //       }
      
// //    }

// // }



// // const editNote = async(id, title, description, tag) => {
// //    // Logic to edit in client
// //    for (let index = 0; index < notes.length; index++) {
// //      const element = notes[index];
// //      if (element._id === id) {
// //        element.title = title;
// //        element.description = description;
// //        element.tag = tag;
// //      }
// //    }
 
// //    // API call
// //    const response = await fetch(`${host}api/notes/updatenote/${id}`, {
// //      method: "POST",
// //      headers: {
// //        "Content-Type": "application/json",
// //        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjYwM2M1ODk1NzIxYjA3MGZjM2VmNDRjIn0sImlhdCI6MTcxMTU1MjU1NX0.d7gsL-UQca_dNFX7XRr82Rk7PLEP6wDt7O0gUl_McZ0"
// //      },
// //      body: JSON.stringify({title ,  description ,  tag }),
// //    });
 
// //    const json =  response.json();
// //  }
 
// const editNote = async(id, title, description, tag) => {
//    // Logic to edit in client
//    for (let index = 0; index < notes.length; index++) {
//      const element = notes[index];
//      if (element._id === id) {
//        element.title = title;
//        element.description = description;
//        element.tag = tag;
//      }
//    }
 
//    // API call
//    const response = await fetch(`${host}api/notes/updatenote/${id}`, {
//      method: "POST",
//      headers: {
//        "Content-Type": "application/json",
//        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjYwM2M1ODk1NzIxYjA3MGZjM2VmNDRjIn0sImlhdCI6MTcxMTU1MjU1NX0.d7gsL-UQca_dNFX7XRr82Rk7PLEP6wDt7O0gUl_McZ0"
//      },
//      body: JSON.stringify({title ,  description ,  tag }),
//    });
 
//    return response.json(); // Moved return statement inside the function body


// }

//    return(
//       <NoteContext.Provider value={{notes, addNote, deleteNote , editNote }}>
//          {props.children}
//       </NoteContext.Provider>
//    )



// export default NoteState;
import { useEffect, useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const host = "http://localhost:8000";
  
  const [notes, setNotes] = useState([]);


  useEffect(()=>{
    console.log(notes);
  },[notes])
  // get all notes
  const getNotes = async () => {
   // API call
   const response = await fetch(`${host}/api/notes/fetchallnotes`, {
     method: "GET",
     headers: {
       "Content-Type": "application/json",
       "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjYwM2M1ODk1NzIxYjA3MGZjM2VmNDRjIn0sImlhdCI6MTcxMTU1MjU1NX0.d7gsL-UQca_dNFX7XRr82Rk7PLEP6wDt7O0gUl_McZ0"
     },
    
   });

   const json = await response.json();
   console.log(json)
   setNotes(json)
 }



  // Add a Note
  const addNote = async (title, description, tag) => {
    // API call
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjYwM2M1ODk1NzIxYjA3MGZjM2VmNDRjIn0sImlhdCI6MTcxMTU1MjU1NX0.d7gsL-UQca_dNFX7XRr82Rk7PLEP6wDt7O0gUl_McZ0"
      },
      body: JSON.stringify({ title, description, tag }),
    });
 
    const json = await response.json();
    console.log(json);
  }

  // Delete Note
  const deleteNote =  async (id) => {

    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjYwM2M1ODk1NzIxYjA3MGZjM2VmNDRjIn0sImlhdCI6MTcxMTU1MjU1NX0.d7gsL-UQca_dNFX7XRr82Rk7PLEP6wDt7O0gUl_McZ0"
      }
     
    });

    const json = response.json();
   console.log(json);

    console.log("deleting the note here " + id);
    const newNotes = notes.filter((note) => note._id !== id);
    setNotes(newNotes);
  }

  // Edit Note
  const editNote = async (id, title, description, tag) => {
    // Logic to edit in client
    let newNotes=  JSON.parse (JSON.stringify(notes))
    for (let index = 0; index < newNotes.length; index++) {
      const element = newNotes[index];
      if (element._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag;
        break;  // exit the loop once the note is found and updated 
      }
    }
    setNotes(newNotes)

    // API call
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjYwM2M1ODk1NzIxYjA3MGZjM2VmNDRjIn0sImlhdCI6MTcxMTU1MjU1NX0.d7gsL-UQca_dNFX7XRr82Rk7PLEP6wDt7O0gUl_McZ0"
      },
      body: JSON.stringify({ title, description, tag }),
    });

    return response.json();
  }


  





  return (
    <NoteContext.Provider value={{ notes,setNotes, addNote, deleteNote, editNote , getNotes}}>
      {props.children}
    </NoteContext.Provider>
  );
}

export default NoteState;
