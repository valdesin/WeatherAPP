var url = "http://api.openweathermap.org/data/2.5/weather?q=Madrid&APPID=c7c630c36bd6450f2c2ddecfc31075fa&units=metric";
var temp;
var icon;
var city;
var maxTemp, minTemp;
var night;
var iconWeather;


function connect() {
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

    weather.temp = parseInt(data.main.temp)+"\u2103";
    weather.imageURL = data.weather[0].icon;
    console.log(weather.imageURL[2]);
    weather.city = data.name;
    weather.maxTemp = data.main.temp_max;
    weather.minTemp = data.main.temp_min;

    update(weather)
  };
};

  function update(weather) {
    temp.innerHTML = weather.temp;
    //icon.setAttribute("src", weather.imageURL);
    city.innerHTML = weather.city;
    maxTemp.innerHTML = weather.maxTemp + "<sub>max</sub>";
    minTemp.innerHTML = weather.minTemp + "<sub>min</sub>";
    if (weather.imageURL[2] == "n") {
      night.style.background = "#006";
      iconWeather.setAttribute("src", "images/moon.svg");
    }
  };

  window.onload = function() {
    temp = document.getElementById("weather-temp");
    //icon = document.getElementById("weather-icon");
    city = document.getElementById("weather-city");
    maxTemp = document.getElementById("max-temp");
    minTemp = document.getElementById("min-temp");
    night = document.getElementById("fon-weather");
    iconWeather = document.getElementById("icon-weather");
  };

  connect();
  setTimeout( function run() {
    connect();
    setTimeout(run(), 1800000);
  }, 1800000);
