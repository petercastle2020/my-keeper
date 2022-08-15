import { useEffect, useState } from "react";

// components
import NotesDetails from "../components/NotesDetails";

const Home = () => {
  const [notes, setNotes] = useState(null);

  useEffect(() => {
    const fetchNotes = async () => {
      const response = await fetch("/api/notes");

      const json = await response.json();
      console.log(json);

      if (response.ok) {
        setNotes(json);
      }
    };

    fetchNotes();
  }, []);

  return (
    <div className="home">
      <div className="notes">
        {notes &&
          notes.map((note) => <NotesDetails key={note._id} note={note} />)}
      </div>
    </div>
  );
};

export default Home;
