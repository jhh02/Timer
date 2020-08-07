const clockTitle = document.querySelector(".js-clockContainer");
const clock = document.querySelector(".js-clock");

function getDays(seconds) {
  return Math.floor(seconds / 86400);
}

function getHours(seconds) {
  return Math.floor(seconds / 3600) % 24;
}

function getMinutes(seconds) {
  return Math.floor(seconds / 60) % 60;
}

function getTime() {
  const fiveYrs = new Date("2025-01-01 00:00:00").getTime();
  const now = Date.now();
  let seconds = (fiveYrs - now) / 1000;
  const days = getDays(seconds);
  seconds -= days * 86400;
  const hours = getHours(seconds);
  seconds -= hours * 3600;
  const minutes = getMinutes(seconds);
  seconds -= minutes * 60;
  seconds = Math.floor(seconds);
  clock.innerText = clock.innerText = `${days < 10 ? `0${days}` : days}d ${
    hours < 10 ? `0${hours}` : hours
  }h ${minutes < 10 ? `0${minutes}` : minutes}m ${
    seconds < 10 ? `0${seconds}` : seconds
  }s`;
}

function init() {
  setInterval(getTime, 1000);
}

init();
