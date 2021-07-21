import React from "react";
import Hour from "../hour/Hour";
import moment from "moment";
import "./day.scss";
import { days } from "../../utils/dateUtils";

const Day = ({ dataDay, dayEvents, deleteEvent, weekDates }) => {
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
            weekDates={weekDates}
            hours={hours}
            // currentDay={today}
          />
        );
      })}
    </div>
  );
};

export default Day;
