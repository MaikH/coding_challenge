import React from 'react';
import {getDefaultTextNote} from '../../utils/note.util';
import TextNote from '../TextNote/TextNote';
import './workspace.scss';

export const Workspace = ({notes = [getDefaultTextNote()]}) => (
  <div className="workspace">
    {notes.map((note, i) => (
      <TextNote key={i} {...note} />
    ))}
  </div>
);
export default Workspace;
