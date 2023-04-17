let lastModi = new Date(document.lastModified);
const day = lastModi.getDate();
const month = lastModi.getMonth();
const year = lastModi.getFullYear();
const hour = lastModi.getHours();
const min = lastModi.getMinutes();
const sec = lastModi.getSeconds();
const pickFooter = document.querySelector('#lastmodified').innerHTML += `Last Updated: ${month + 1}/${day}/${year} ${hour}:${min}:${sec}`;

document.querySelector("#copyright").innerHTML+=` ${year}`;
