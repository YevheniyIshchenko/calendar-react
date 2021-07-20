import React from "react";
import Hour from "../hour/Hour";
import "./day.scss";

const Day = ({ dataDay, dayEvents }) => {
  // const [redLine, setRedLine] = useState(new Date().getMinutes());
  const hours = Array(24)
    .fill()
    .map((val, index) => index);

  // useEffect(() => {
  //   const id = setInterval(() => setRedLine(redLine + 1), 1000 * 60);
  //   return () => clearTimeout(id);
  // });

  return (
    <div className='calendar__day' data-day={dataDay}>
      {hours.map((hour) => {
        //getting all events from the day we will render
        const hourEvents = dayEvents.filter(
          (event) => event.dateFrom.getHours() === hour
        );

        return (
          <Hour key={dataDay + hour} dataHour={hour} hourEvents={hourEvents} />
        );
      })}
    </div>
  );
};

export default Day;
