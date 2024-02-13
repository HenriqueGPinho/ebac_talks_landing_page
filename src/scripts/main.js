AOS.init();

const eventDate = new Date("Sep 10, 2024 19:00:00");
const eventTimeStamp = eventDate.getTime();

const daysInMilliseconds = 1000 * 60 * 60 * 24;
const hoursInMilliseconds = 1000 * 60 * 60;
const minutesInMilliseconds = 1000 * 60;
const secondsInMilliseconds = 1000; 

const timeCounter = setInterval(function () {
  const now = new Date();
  const currentTimeStamp = now.getTime();

  const timeToEvent = eventTimeStamp - currentTimeStamp;

  const daysToEvent = Math.floor(timeToEvent / daysInMilliseconds); //milliseconds to days
  const hoursToEvent = Math.floor((timeToEvent % daysInMilliseconds) / hoursInMilliseconds);
  const minutesToEvent = Math.floor((timeToEvent % hoursInMilliseconds) / minutesInMilliseconds);
  const secondsToEvent = Math.floor((timeToEvent % minutesInMilliseconds) / secondsInMilliseconds);

  document.getElementById('counter').innerHTML = `O maior evento de tecnologia do Brasil começa em ${daysToEvent}d ${hoursToEvent}h ${minutesToEvent}min ${secondsToEvent}s`

  if (timeToEvent < 0) {
    clearInterval(timeCounter);
    document.getElementById('counter').innerHTML = "Evento expirado!";
  }
}, 1000);