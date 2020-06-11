const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const days = ["SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY"];

const getPropertiesDateTime = (_date) => {
  const day = days[_date.getDay()];
  let hr = _date.getHours();
  let min = _date.getMinutes();
  if (min < 10) {
    min = "0" + min;
  }

  let ampm = "AM";
  if (hr > 12) {
    ampm = "PM";
    hr -= 12;
  };
  const date = _date.getDate();
  const month = months[_date.getMonth()];
  const year = _date.getFullYear();

  return {
    day,
    hour: hr,
    min,
    ampm,
    year,
    month,
    date,
  };
}

export default getPropertiesDateTime;
