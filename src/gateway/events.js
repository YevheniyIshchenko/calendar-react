import { getDateTime } from "../utils/dateUtils";

const baseUrl = "https://60c9e9df772a760017204c05.mockapi.io/api/v1/events";

const mapTasks = (tasks) =>
  tasks.map(({ date, dateFrom, dateTo, ...rest }) => ({
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
      alert(`Internal Server Error. Can't display events'`);
    });
};

export const addEvent = (events) =>
  fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(events),
  }).catch(() => alert("Internal Server Error. Failed to delete event"));

export const deleteEvents = (id) => {
  return fetch(`${baseUrl}/${id}`, {
    method: "DELETE",
  }).catch(() => alert("Internal Server Error. Failed to delete event"));
};
