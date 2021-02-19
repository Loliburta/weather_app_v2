export const GetDay = (_dt) => {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const day = new Date(_dt * 1000).getDay();
  return days[day];
};

export const GetDate = (_dt) => {
  const timestamp = new Date(_dt * 1000);
  const year = timestamp.getFullYear();
  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ][timestamp.getMonth()];
  const date = timestamp.getDate();
  const day = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ][timestamp.getDay()];
  return `${day} ${date} ${month} ${year}`;
};