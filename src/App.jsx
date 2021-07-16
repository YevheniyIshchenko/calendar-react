import React, { Component, useState } from "react";
import Header from "./components/header/Header.jsx";
import Calendar from "./components/calendar/Calendar.jsx";
import moment from "moment";

import { getWeekStartDate, generateWeekRange } from "../src/utils/dateUtils.js";

import "./common.scss";

const App = () => {
  const [weekStartDate, setweekStartDate] = useState(new Date());

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
      />
      <Calendar weekDates={weekDates} />
    </>
  );
};

export default App;
