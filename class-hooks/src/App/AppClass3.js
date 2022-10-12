import "../App.css";
import { Note } from "../components/Note";
import { useState } from "react";
function AppClass3(props) {
  const [notes, setNotes] = useState(props.notes);
  const [newNote, setNewNote] = useState("");
  const [showAll, setSholAll] = useState(true);
  if (!notes) {
    return "No tenemos notas que mostrar valor de undefined";
  }
  const handleChange = (event) => {
    setNewNote(event.target.value);
  };
  const handleAddNote = (event) => {
    event.preventDefault();
    const newAddNote = {
      id: notes.length + 1,
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() < 0.5,
    };

    setNotes([...notes, newAddNote]);
    setNewNote("");
  };

  const handleShowAll = () => {
    setSholAll(() => !showAll);
  };
  // setNotes(notes.concat())

  return (
    <div>
      <h1>Clase de Formularios</h1>
      <button onClick={handleShowAll}>
        {showAll ? "ShowAll Inmportant" : "Show All"}
      </button>
      <ol>
        {notes
          .filter((notes) => {
            if (showAll === true) return true;
            return notes.important === true;
          })
          .map((note) => (
            <Note key={note.id} {...note} />
          ))}
      </ol>
      <form onSubmit={handleAddNote}>
        <input type="text" onChange={handleChange} value={newNote} />
        <button>Crear nota</button>
      </form>
    </div>
  );
}

export default AppClass3;
