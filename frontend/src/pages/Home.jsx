import React, { useEffect, useState } from "react";
import AddNote from "../components/AddNote";
import NoteCard from "../components/NoteCard";
import axios from "axios";

export default function Home() {
  const msgStyle = {
    justifyContent: "center",
    display: "flex",
    alignItems: "center",
    height: "50vh",
    color: "#aaa",
    letterSpacing: "1px",
    fontSize: "1.3em",
  };

  const [notes, setNotes] = useState([]);
  const [searchQuery, setSearchQuery] = useState(""); // Search state
  const [darkMode, setDarkMode] = useState(false); // Dark mode state

  // Fetch notes from backend
  useEffect(() => {
    const fetchNotes = () => {
      axios
        .get("https://mern-notes-backend-5z2j.onrender.com/allNotes")
        .then((res) => {
          if (res.data.content) {
            setNotes(res.data.content);
          } else {
            setNotes([]);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchNotes();
  }, []);

  // Filter notes based on search query
  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className={darkMode ? "dark-mode" : "light-mode"} style={{ minHeight: "100vh", padding: "20px" }}>
      {/* App Title */}
      <h1 className="headline">
        Daily <span>Journal App</span>
      </h1>

      {/* Dark Mode Toggle */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        style={{ marginBottom: "10px", padding: "8px 12px", cursor: "pointer" }}
      >
        {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
      </button>

      {/* Search Bar */}
      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Search notes..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{ padding: "8px", width: "100%" }}
        />
      </div>

      {/* Notes */}
      <div className="cards">
        {filteredNotes && filteredNotes.length > 0 ? (
              filteredNotes.map((note) => (
              <NoteCard key={note._id} note={note} darkMode={darkMode} />
            ))
) : (
  <p style={msgStyle}>No Notes To Show</p>
)}

      </div>

      {/* Add Note Component */}
      <AddNote darkMode={darkMode} />
    </div>
  );
}
