import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function AddNote({ darkMode }) {
  return (
    <Link to={'/add'}>
      <button
        className='addNote'
        style={{
          background: darkMode ? '#333' : 'linear-gradient(#c53913, #f5400f)',
          color: darkMode ? '#fff' : '#f4f0e4',
          border: darkMode ? '1px solid #f5400f' : 'none',
        }}
      >
        Add Note
      </button>
    </Link>
  );
}

// PropTypes validation
AddNote.propTypes = {
  darkMode: PropTypes.bool.isRequired,
};
