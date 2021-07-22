import React, { useState, useEffect } from "react";
import Header from "./components/header/Header.jsx";
import Calendar from "./components/calendar/Calendar.jsx";
import moment from "moment";
import { getEvents, addEvent, deleteEvents } from "./gateway/events.js";

import { getWeekStartDate, generateWeekRange } from "../src/utils/dateUtils.js";

import "./common.scss";

const App = () => {
  const [weekStartDate, setweekStartDate] = useState(new Date());

  const [events, setEvents] = useState([]);

  const getEvent = () => {
    getEvents().then((res) => setEvents(res));
  };

  useEffect(() => {
    getEvent();
  }, []);

  const createEvent = (event) => {
    addEvent(event).then(() => getEvent());
  };
  const deleteEvent = (id) => {
    deleteEvents(id).then(() => getEvent());
  };
//  debugger;

  const weekDates = generateWeekRange(getWeekStartDate(weekStartDate));

  const onPreviousWeek = () =>
    setweekStartDate(new Date(moment(weekStartDate).day(-7)));

  const onNextWeek = () =>
    setweekStartDate(new Date(moment(weekStartDate).day(+7)));

  const onCurrentDate = () => setweekStartDate(new Date());

  return (
    <>
      <Header
        onPreviousWeek={onPreviousWeek}
        onNextWeek={onNextWeek}
        onCurrentDate={onCurrentDate}
        weekDates={weekDates}
        createEvent={createEvent}
      ></Header>
      <Calendar
        weekDates={weekDates}
        events={events}
        deleteEvent={deleteEvent}
      />
    </>
  );
};

export default App;
