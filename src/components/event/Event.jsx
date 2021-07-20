import React, { useState } from "react";
import { deleteEvent } from "../../gateway/events";

import "./event.scss";

const Event = ({ height, marginTop, title, time, id }) => {
  const [deleteBtn, setDeleteBtn] = useState(false);
  const eventStyle = {
    height,
    marginTop,
  };

  return (
    <>
      <div
        style={eventStyle}
        className='event'
        onClick={() => setDeleteBtn(!deleteBtn)}
      >
        <div className='event__title'>{title}</div>
        <div className='event__time'>{time}</div>
      </div>
      {deleteBtn && (
        <button className='delete-event-btn' onClick={() => deleteEvent(id)}>
          <i className='fas fa-trash'></i>
          Delete
        </button>
      )}
    </>
  );
};

export default Event;
