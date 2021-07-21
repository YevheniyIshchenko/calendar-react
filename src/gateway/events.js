import moment from "moment";

import { getDateTime } from "../utils/dateUtils";

const baseUrl = "https://60c9e9df772a760017204c05.mockapi.io/api/v1/events";

// export const getEvents = () => {
//   return fetch(baseUrl)
//     .then((res) => {
//       if (res.ok) {
//         return res.json();
//       }
//       throw new Error("Internal Server Error. Can't display events");
//     })
//     .then((event) =>
//       event.map(({ id, startTime, endTime, ...rest }) => ({
//         id: id,
//         dateFrom: moment(new Date(startTime)).format(),
//         dateTo: moment(new Date(endTime)).format(),
//         ...rest,
//       }))
//     );
// };
const mapTasks = (tasks) =>
  tasks.map(({date, dateFrom, dateTo, ...rest }) => ({
    dateFrom: getDateTime(date, dateFrom),
    dateTo: getDateTime(date, dateTo),
    ...rest,
  }));

// export const mapTasks = (tasks) =>
//   tasks.map(({ ...rest }) => ({
//     ...rest,
//   }));

export const getEvents = () => {
  return fetch(baseUrl)
    .then((response) => response.json())
    .then((tasks) => mapTasks(tasks))
    .catch(() => {
      console.log("error");
    });
};

export const addEvent = (events) =>
  fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(events),
  });

export const deleteEvents = (id) => {
  return fetch(`${baseUrl}/${id}`, {
    method: "DELETE",
  }).catch(() => console.log("Failed to delete event"));
};

//  const events = getEvents();

// const events = [
//   {
//     id: 1,
//     title: "Go to the gym",
//     description: "some text here",
//     dateFrom: new Date(2021, 6, 15, 10, 15),
//     dateTo: new Date(2021, 6, 15, 15, 0),
//   },
//   {
//     id: 2,
//     title: "Go to the school",
//     description: "hello, 2 am",
//     dateFrom: new Date(2021, 6, 16, 10, 15),
//     dateTo: new Date(2021, 6, 16, 11, 0),
//   },
//   {
//     id: 3,
//     title: "Lunch",
//     description: "",
//     dateFrom: new Date(2021, 6, 17, 10, 30),
//     dateTo: new Date(2021, 6, 17, 11, 30),
//   },
//   {
//     id: 4,
//     title: "Meet friend",
//     description: "at the cafe",
//     dateFrom: new Date(2021, 6, 25, 10, 30),
//     dateTo: new Date(2021, 6, 25, 11, 0),
//   },
// ];

// export default events;
