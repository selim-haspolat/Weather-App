const input = document.querySelector(".input");
const button = document.querySelector(".button");
const form = document.querySelector(".form");
const container = document.querySelector(".container");
const tempature = document.querySelector(".temp");
const nameP = document.querySelector(".name");
const descriptionP = document.querySelector(".description");
const humidityP = document.querySelector(".humidity");
const iconP = document.querySelector(".icon");
const windP = document.querySelector(".wind");
const result = document.querySelector(".result");

console.log(result);

const key = "&appid=f2c553b6bf124bbf510ca75f8f0cb730";

button.addEventListener("click", (e) => {
  e.preventDefault();
  target = input.value;
  const url = "https://api.openweathermap.org/data/2.5/weather?q=";
  newUrl = url + target + key;
  fetch(newUrl)
    .then((res) => res.json())
    .then((data) => weatherFunc(data));
  button.closest("form").reset();
});

container.addEventListener("click", (e) => {
  if (e.target.classList.contains("fa-magnifying-glass-location")) {
    form.style.width = "300px";
    input.style.width = "270px";
  } else if (!e.target.classList.contains("input")) {
    form.style.width = "30px";
    input.style.width = "0";
  }
});

const weatherFunc = (data) => {
    const { main, name, weather, wind } = data;
    const { temp, humidity } = main;
    const { description, icon, id } = weather[0];
    const { speed, deg, gust } = wind;
    iconLink = "https://openweathermap.org/img/wn/" + icon + ".png";
    descriptionP.innerText = description;
    tempature.innerText = Math.round(temp - 272.15) + "°C";
    tempature.style.borderBottom = "1px solid #000";
  nameP.innerText = name;
  humidityP.innerText = "Humidity:" + humidity;
  iconP.src = iconLink;
  windP.innerText = `Wind speed ${speed}km/h`;
  result.style.height = "250px";
};
