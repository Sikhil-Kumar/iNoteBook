import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import NoteState from './context/notes/NotesState';
import Alert from './components/Alert';
import Login from './components/Login';
import Signup from './components/Signup';
function App() {
  
  return (
    <>
    <NoteState>
      <Router>
        <Navbar />
        <Alert message='This is amazing iNoteBook '/>
        <div className='container'>
         <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
        </Routes>
        </div>
      </Router>
      </NoteState>
    </>
  );
}

export default App;
