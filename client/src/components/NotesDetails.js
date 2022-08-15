const NotesDetails = ({ note }) => {
  return (
    <div className="note-details">
      <h4> {note.title}</h4>
      <p>
        <strong>{note.content}</strong>
      </p>
      <p>{note.createdAt}</p>
    </div>
  );
};

export default NotesDetails;
