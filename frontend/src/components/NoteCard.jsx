import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function NoteCard({ note, darkMode }) {
  return (
    <div
      className="noteCard"
      style={{
        backgroundColor: darkMode ? "#1e1e1e" : "#fff",
        color: darkMode ? "#fff" : "#000",
        border: darkMode ? "1px solid #333" : "none",
      }}
    >
      <h2 className="title" style={{ display: "flex", justifyContent: "space-between" }}>
        <Link
          to={`/details/${note._id}`}
          style={{ textDecoration: "none", color: "#f5400f" }}
        >
          {note.title}
        </Link>
        <Link
          to={`/details/${note._id}`}
          style={{ color: "#f5400f" }}
        >
          <i className="fa-solid fa-ellipsis-vertical"></i>
        </Link>
      </h2>
      <p className="details">{note.details}</p>
    </div>
  );
}

// PropTypes validation
NoteCard.propTypes = {
  note: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    details: PropTypes.string.isRequired,
  }).isRequired,
  darkMode: PropTypes.bool.isRequired,
};
