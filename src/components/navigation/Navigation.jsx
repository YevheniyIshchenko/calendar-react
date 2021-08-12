import React from "react";
import PropTypes from "prop-types";
import { days } from "../../utils/dateUtils.js";

const Navigation = ({ weekDates }) => {
  const currentDay = new Date().getDate();
  return (
    <header className='calendar__header'>
      {weekDates.map((dayDate) => (
        <div key={Math.random()} className="calendar__day-label day-label">
          <span className='day-label__day-name'>{days[dayDate.getDay()]}</span>
          <span
            className={`day-label__day-number ${
              currentDay === dayDate.getDate() ? `calendar__currentDay` : ""
            }`}
          >
            {dayDate.getDate()}
          </span>
        </div>
      ))}
    </header>
  );
};

Navigation.propTypes = {
  weekDates: PropTypes.array.isRequired,
};

export default Navigation;
