//Create a Date object for the date: Feb 20, 2012, 3:12am
let d1 = new Date(2012, 1, 20, 3, 12);
alert(d1);

//weekday
function getWeekDay(date) {
  let days = ["SU", "MO", "TU", "WE", "TH", "FR", "SA"];

  return days[date.getDay()];
}

let date = new Date(2014, 0, 3); // 3 Jan 2014
alert(getWeekDay(date)); // FR

//last day of the month
function getLastDayOfMonth(year, month) {
  let date = new Date(year, month + 1, 0);
  return date.getDate();
}

alert(getLastDayOfMonth(2012, 0)); // 31
alert(getLastDayOfMonth(2012, 1)); // 29
alert(getLastDayOfMonth(2013, 1)); // 28

//now many seconds passed today
getSecondsToday() == 36000; // (3600 * 10)
function getSecondsToday() {
  let now = new Date();

  // create an object using the current day/month/year
  let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

  let diff = now - today; // ms difference
  return Math.round(diff / 1000); // make seconds
}

alert(getSecondsToday());

//now many seconds till tomorrow
getSecondsToTomorrow() == 3600;
function getSecondsToTomorrow() {
  let now = new Date();

  // tomorrow date
  let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);

  let diff = tomorrow - now; // difference in ms
  return Math.round(diff / 1000); // convert to seconds
}

//format the relative date
function formatDate(date) {
  let diff = new Date() - date; // the difference in milliseconds

  if (diff < 1000) {
    // less than 1 second
    return "right now";
  }

  let sec = Math.floor(diff / 1000); // convert diff to seconds

  if (sec < 60) {
    return sec + " sec. ago";
  }

  let min = Math.floor(diff / 60000); // convert diff to minutes
  if (min < 60) {
    return min + " min. ago";
  }

  // format the date
  // add leading zeroes to single-digit day/month/hours/minutes
  let d = date;
  d = [
    "0" + d.getDate(),
    "0" + (d.getMonth() + 1),
    "" + d.getFullYear(),
    "0" + d.getHours(),
    "0" + d.getMinutes(),
  ].map((component) => component.slice(-2)); // take last 2 digits of every component

  // join the components into date
  return d.slice(0, 3).join(".") + " " + d.slice(3).join(":");
}

alert(formatDate(new Date(new Date() - 1))); // "right now"

alert(formatDate(new Date(new Date() - 30 * 1000))); // "30 sec. ago"

alert(formatDate(new Date(new Date() - 5 * 60 * 1000))); // "5 min. ago"

// yesterday's date like 31.12.2016 20:00
alert(formatDate(new Date(new Date() - 86400 * 1000)));



