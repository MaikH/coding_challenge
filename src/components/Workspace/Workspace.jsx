import React, { useCallback, useEffect } from "react";
import { connect } from "react-redux";

import { getNotes, saveCreatedNote, updateNoteOrder } from "../../store/notes";
import TextNote from "../TextNote/TextNote";
import "./workspace.scss";

export const Workspace = ({ notes = [], getNotes, saveCreatedNote, updateNoteOrder }) => {
  useEffect(() => {
    getNotes();
  }, []); // eslint-disable-line

  const saveNote = useCallback((content) => {
    saveCreatedNote({ content });
  }, []); // eslint-disable-line

  const handleUpdateNoteOrder = useCallback((id) => {
    updateNoteOrder({id})
  }, []); // eslint-disable-line

  return (
    <div className="workspace">
      {notes.map((note, i) => (
        <TextNote key={i} {...note} saveNote={saveNote} updateNoteOrder={handleUpdateNoteOrder} />
      ))}
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    notes: state.notes.notes,
  };
};

export default connect(mapStateToProps, {
  getNotes,
  saveCreatedNote,
  updateNoteOrder
})(Workspace);
