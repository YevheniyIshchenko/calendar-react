import React from "react";
import Hour from "../hour/Hour";
import PropTypes from "prop-types";

import "./day.scss";

const Day = ({ dataDay, dayEvents, deleteEvent }) => {
  const hours = Array(24)
    .fill()
    .map((val, index) => index);

  return (
    <div className='calendar__day' data-day={dataDay}>
      {hours.map((hour) => {
        //getting all events from the day we will render
        const hourEvents = dayEvents.filter(
          (event) => event.dateFrom.getHours() === hour
        );

        return (
          <Hour
            key={dataDay + hour}
            dataHour={hour}
            hourEvents={hourEvents}
            deleteEvent={deleteEvent}
            dataDay={dataDay}
            hours={hours}
          />
        );
      })}
    </div>
  );
};
Day.propTypes = {
  deleteEvent: PropTypes.func.isRequired,
  dataDay: PropTypes.number.isRequired,
  dayEvents: PropTypes.array.isRequired,
};
export default Day;
