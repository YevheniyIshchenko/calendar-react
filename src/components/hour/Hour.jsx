import React, { useState, useEffect } from "react";
import moment from "moment";
import "./hour.scss";
import PropTypes from "prop-types";

import Event from "../event/Event";
import { formatMins } from "../../../src/utils/dateUtils.js";
import Line from "./Line";

const Hour = ({ dataHour, hourEvents, deleteEvent, dataDay }) => {
  const currentData = new Date();
  const [redLine, setRedLine] = useState(moment(currentData).get("minute"));
  useEffect(() => {
    const time = setInterval(() => setRedLine(redLine + 1), 60000);
    return () => clearTimeout(time);
  });
  const isLineData = dataDay === moment(currentData).get("date");
  const isLineHour = dataHour === moment(currentData).get("hour");

  return (
    <div className='calendar__time-slot' data-time={dataHour + 1}>
      {isLineData && isLineHour && <Line marginTop={redLine} />}
      {/* if no events in the current hour nothing will render here */}
      {hourEvents.map(({ id, dateFrom, dateTo, title }) => {
        const eventStart = `${dateFrom.getHours()}:${formatMins(
          dateFrom.getMinutes()
        )}`;
        const eventEnd = `${dateTo.getHours()}:${formatMins(
          dateTo.getMinutes()
        )}`;

        return (
          <Event
            key={id}
            //calculating event height = duration of event in minutes
            height={(dateTo.getTime() - dateFrom.getTime()) / (1000 * 60)}
            marginTop={dateFrom.getMinutes()}
            time={`${eventStart} - ${eventEnd}`}
            title={title}
            id={id}
            deleteEvent={deleteEvent}
          />
        );
      })}
    </div>
  );
};

Hour.propTypes = {
  dataHour: PropTypes.number.isRequired,
  hourEvents: PropTypes.array.isRequired,
  deleteEvent: PropTypes.func.isRequired,
  dataDay: PropTypes.number.isRequired,
};

export default Hour;
