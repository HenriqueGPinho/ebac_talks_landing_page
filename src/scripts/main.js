const eventDate = new Date("Sep 10, 2024 19:00:00");
const eventTimeStamp = eventDate.getTime();

const daysInMilliseconds = 1000 * 60 * 60 * 24;
const hoursInMilliseconds = 1000 * 60 * 60;
const minutesInMilliseconds = 1000 * 60;
const secondsInMilliseconds = 1000; 

function countTime() {
  const now = new Date();
  const currentTimeStamp = now.getTime();

  const timeToEvent = eventTimeStamp - currentTimeStamp;

  const daysToEvent = Math.floor(timeToEvent / daysInMilliseconds); //milliseconds to days
  const hoursToEvent = Math.floor((timeToEvent % daysInMilliseconds) / hoursInMilliseconds);
  const minutesToEvent = Math.floor((timeToEvent % hoursInMilliseconds) / minutesInMilliseconds);
  const secondsToEvent = Math.floor((timeToEvent % minutesInMilliseconds) / secondsInMilliseconds);

  document.getElementById('counter').innerHTML = `${daysToEvent}d ${hoursToEvent}h ${minutesToEvent}min ${secondsToEvent}s`

  if (timeToEvent < 0) {
    document.getElementById('presentation').innerHTML = `Evento expirado!<span id="counter"></span>`;

    return;
  }

  setTimeout(countTime, 1000);
}

countTime();
AOS.init();