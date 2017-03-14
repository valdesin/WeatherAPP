var url = "http://api.openweathermap.org/data/2.5/weather?q=Madrid&APPID=c7c630c36bd6450f2c2ddecfc31075fa&units=metric";
var temp;
var icon;
var city;

var xhr = new XMLHttpRequest();

xhr.open("GET", url, true);

xhr.send();

xhr.onreadystatechange = function() {

  if(this.readyState != 4) return;

  if(this.status != 200) {
    alert("Error" + this.status ? statusText : "downloding error!");
  }

  var data = JSON.parse(this.responseText);
  var weather = {};

  weather.temp = data.main.temp;
  //weather.imageURL = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
  weather.city = data.name;

  update(weather)
};

function update(weather) {
  temp.innerHTML = weather.temp;
  //icon.setAttribute("src", weather.imageURL);
  city.innerHTML = weather.city;
  console.log(temp);
};

window.onload = function() {
  temp = document.getElementById("weather-temp");
  //icon = document.getElementById("weather-icon");
  city = document.getElementById("weather-city");
};