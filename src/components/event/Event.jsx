import React, { useState } from "react";
import PropTypes from "prop-types";

import "./event.scss";

const Event = ({ height, marginTop, title, time, id, deleteEvent }) => {
  const [deleteBtn, setDeleteBtn] = useState(false);
  const eventStyle = {
    height,
    marginTop,
  };
  const style = {
    marginTop: marginTop + height,
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
        <button
          style={style}
          className='delete-event-btn'
          onClick={() => deleteEvent(id)}
        >
          <i className='fas fa-trash'></i>
          Delete
        </button>
      )}
    </>
  );
};

Event.propTypes = {
  deleteEvent: PropTypes.func.isRequired,
  height: PropTypes.number.isRequired,
  marginTop: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Event;
