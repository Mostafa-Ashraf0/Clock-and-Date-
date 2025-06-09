//start clock section
const setDegreeSec = (degree, id) => {
  document.querySelector(id).style.setProperty("--rotation", `${degree}deg`);
};
const setDegreeHours = (degree, id) => {
  document.querySelector(id).style.setProperty("--rotationH", `${degree}deg`);
};
const setDegreeMinutes = (degree, id) => {
  document.querySelector(id).style.setProperty("--rotationM", `${degree}deg`);
};

//secounds rendering
setInterval(() => {
  let now = new Date();
  let secounds = now.getSeconds();
  let degree = secounds * 6;
  setDegreeSec(degree, "#point");
}, 0);

//hours rendering
setInterval(() => {
  let now = new Date();
  let hours = now.getHours();
  let degree = hours * 30;
  setDegreeHours(degree, "#point");
}, 0);

//minutes rendering
setInterval(() => {
  let now = new Date();
  let min = now.getMinutes();
  let degree = min * 6;
  setDegreeMinutes(degree, "#minute-hand");
}, 0);
//end clock section

//start date section

//day rendering
const setDay = (day, id) => {
  document.querySelector(id).innerHTML = day;
};

setInterval(() => {
  let now = new Date();
  let day = now.getDate();
  setDay(day, ".day");
}, 1);

//month rendering
const setMonth = (month, id) => {
  document.querySelector(id).innerHTML = month;
};

setInterval(() => {
  let now = new Date();
  let month = now.getMonth() + 1;
  setMonth(month, ".month");
}, 1);

//years rendering
const setYear = (year, id) => {
  document.querySelector(id).innerHTML = year;
};

setInterval(() => {
  let now = new Date();
  let year = now.getFullYear();
  setYear(year, ".year");
}, 1);

//end date section
