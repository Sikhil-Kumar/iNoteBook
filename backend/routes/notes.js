const express = require("express");
const router = express.Router();
const fetchuser = require("../middleware/fetchuser");
const Note = require("../models/Note"); // Change this to Note
const { body, validationResult } = require('express-validator');

// route 1: get all the notes using: GET "/api/notes/fetchallnotes": login required
router.get('/fetchallnotes', fetchuser, async (req, res) => {
    try {
        const notes = await Note.find({ user: req.user.id }); // Change Notes to Note
        res.json(notes);
    } catch (error) {
        console.error(error); // Changed 'err' to 'error' to match catch parameter
        res.status(500).send('Internal Server Error');
    }
});

// route 2: add a note using: POST "/api/notes/addnote": login required
router.post('/addnote', fetchuser, [
    body('title', "Enter the valid name ").isLength({ min: 1 }),
    body('description', "Description must be at least five characters ").isLength({ min: 5 }), // Changed isEmail() to isLength({ min: 5 })
], async (req, res) => {
    try {
        const { title, description, tag } = req.body;
        // if there are errors, return bad request and the errors
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const note = new Note({
            title,
            description,
            tag,
            user: req.user.id
        });

        const saveNotes = await note.save();
        res.json(saveNotes);
    } catch (error) {
        console.error(error); // Changed 'err' to 'error' to match catch parameter
        res.status(500).send('Internal Server Error');
    }
});

// route 3: update an existing note : Put "/api/notes/addnote": login required


router.put('/updatenote/:id', fetchuser, async (req, res) => {
const{ title, description, tag }= req.body;
try {
    


const newNote = {};
if(title){newNote.title = title};
if(description){newNote.description = description};
if(tag){newNote.tag=tag}



// find the note to be updated and update it 
let note =  await Note.findById(req.params.id)
if(!note){res.status(404).send("Not Found")}

if(note.user.toString () !== req.user.id){
    return res.status(401).send("Not Allowed");
}

note = await Note.findByIdAndUpdate(req.params.id, {$set:newNote},{new:true})
res.json({note});

} catch (error) {
    console.error(error); // Changed 'err' to 'error' to match catch parameter
    res.status(500).send('Internal Server Error');
}
})

//route =  4 delete notes : delete"/"api/notes/delete note": login required

router.delete('/deletenote/:id', fetchuser, async (req, res) => {
   
   
 try {
    
 
    // find the note to be deleted  and delete it 
    let note =  await Note.findById(req.params.id)
    if(!note){res.status(404).send("Not Found")}
   
    // allow deletion if the user owns this notes

    if(note.user.toString () !== req.user.id){
        return res.status(401).send("Not Allowed");
    }
    
    note = await Note.findByIdAndDelete(req.params.id)
    res.json({"Sucesses" : "Note has been deleted ", note:note});
   
} catch (error) {
    console.error(error); // Changed 'err' to 'error' to match catch parameter
    res.status(500).send('Internal Server Error');
}
})






module.exports = router;
