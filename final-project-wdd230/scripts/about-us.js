const lastModifiedFresh = document.querySelector(".last-modi-fresh");

var lastModiFresh = new Date(document.lastModified);
const dayfresh2 = lastModiFresh.getDate();
const month2 = lastModiFresh.getMonth();
const year2 = lastModiFresh.getFullYear();
const hour2 = lastModiFresh.getHours();
const min2 = lastModiFresh.getMinutes();
const sec2 = lastModiFresh.getSeconds();

lastModifiedFresh.innerHTML += `${month2 + 1}/${dayfresh2}/${year2} ${hour2}:${min2}:${sec2}`;
