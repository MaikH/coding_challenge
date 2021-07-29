import React, { useRef } from "react";
import Draggable from "react-draggable";

import { DEFAULT_COLOR } from "../../utils/note.util";
import "./textNote.scss";

const TextNote = ({
  backgroundColor,
  content,
  color,
  size,
  x,
  y,
  type,
  id,
  temp,
  saveNote,
  order,
  updateNoteOrder
}) => {
  const ref = useRef(null);
  return (
    <Draggable
      nodeRef={ref}
      axis="both"
      defaultClassName="note text-note"
      defaultPosition={{
        x,
        y,
      }}
      scale={1}
      onStop={() => updateNoteOrder(id)}
    >
      {type === "media" ? (
        <img
          alt={id}
          src={content}
          ref={ref}
          style={{ width: size, height: size, zIndex: order * 10 }}
          draggable={false}
        />
      ) : (
        <div
          ref={ref}
          style={{
            backgroundColor,
            color: color ?? DEFAULT_COLOR,
            width: size,
            height: size,
            zIndex: order * 10
          }}
        >
          <textarea
            defaultValue={content}
            onBlur={(e) => (temp ? saveNote(e.target.value) : null)}
          />
        </div>
      )}
    </Draggable>
  );
};

export default TextNote;
