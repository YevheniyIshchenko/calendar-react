import React, { useState } from "react";
import moment from "moment";
import { months } from "../../utils/dateUtils.js";
import Modal from "../modal/Modal.jsx";
import PropTypes from "prop-types";

import "./header.scss";

const Header = ({
  onPreviousWeek,
  onNextWeek,
  onCurrentDate,
  weekDates,
  createEvent,
}) => {
  const startOfMonth = months[moment(weekDates[0]).month()];
  const endOfMonth = months[moment(weekDates[6]).month()];
  let monthTitle;
  if (startOfMonth === endOfMonth) {
    monthTitle = startOfMonth;
  } else {
    monthTitle = `${startOfMonth} - ${endOfMonth}`;
  }

  const [modalWindow, setModalWindow] = useState(false);
  const switchModalWindow = () => {
    setModalWindow(!modalWindow);
  };

  return (
    <>
      <header className='header'>
        <button className='button create-event-btn' onClick={switchModalWindow}>
          <i className='fas fa-plus create-event-btn__icon'></i>
          Create
        </button>
        <div className='navigation'>
          <button
            className='navigation__today-btn button'
            onClick={onCurrentDate}
          >
            Today
          </button>
          <button
            className='icon-button navigation__nav-icon'
            onClick={onPreviousWeek}
          >
            <i className='fas fa-chevron-left'></i>
          </button>
          <button
            className='icon-button navigation__nav-icon'
            onClick={onNextWeek}
          >
            <i className='fas fa-chevron-right'></i>
          </button>
          <span className='navigation__displayed-month'>{monthTitle}</span>
        </div>
      </header>
      {modalWindow && (
        <Modal closeWindow={switchModalWindow} createEvent={createEvent} />
      )}
    </>
  );
};

Event.propTypes = {
  onPreviousWeek: PropTypes.func.isRequired,
  onNextWeek: PropTypes.func.isRequired,
  onCurrentDate: PropTypes.func.isRequired,
  createEvent: PropTypes.func.isRequired,
  weekDates: PropTypes.array.isRequired,
};

export default Header;
