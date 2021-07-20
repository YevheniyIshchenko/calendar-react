import React, { useState, useEffect } from "react";

import Navigation from "./../navigation/Navigation";
import Week from "../week/Week";
import Sidebar from "../sidebar/Sidebar";
import { getEvents } from "../../gateway/events";
import "./calendar.scss";

const Calendar = ({ weekDates }) => {
  const [event, setEvents] = useState([]);

  const getEvent = () => {
    getEvents().then((res) => setEvents(res));
  };
  useEffect(() => {
    getEvent();
  }, []);

  return (
    <section className='calendar'>
      <Navigation weekDates={weekDates} />
      <div className='calendar__body'>
        <div className='calendar__week-container'>
          <Sidebar />
          <Week weekDates={weekDates} events={event} />
        </div>
      </div>
    </section>
  );
};

export default Calendar;
