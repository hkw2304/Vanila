const API = "240648863f71ffa263e57a10a95cd33a";
const weather = document.querySelector("#weather span:first-child");
const city = document.querySelector("#weather span:last-child");
function GeoOn(position) {
  const lat = position.coords.latitude;
  const long = position.coords.longitude;
  console.dir(position);
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      weather.innerHTML = `${data.weather[0].main}-${data.main.temp}`;
      city.innerHTML = data.name;
    });
}

function GeoFalse() {
  alert("Error!!!!!");
}

navigator.geolocation.getCurrentPosition(GeoOn, GeoFalse);
