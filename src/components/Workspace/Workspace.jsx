import React, { useEffect } from "react";
import { connect } from "react-redux";

import { getNotes } from "../../store/notes";
import TextNote from "../TextNote/TextNote";
import "./workspace.scss";

export const Workspace = ({ notes = [], getNotes }) => {
  useEffect(() => {
    getNotes();
  }, []); // eslint-disable-line

  return (
    <div className="workspace">
      {notes.map((note, i) => (
        <TextNote key={i} {...note} />
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
})(Workspace);
