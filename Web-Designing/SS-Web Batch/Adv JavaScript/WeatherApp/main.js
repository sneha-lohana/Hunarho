const API_key = "c6e75906b4944fc88f0105912243011";

function formatTime(date){
    let hours = date.getHours();
    if (hours <10){
        hours = `0${hours}`;
    }
    let mins = date.getMinutes();
    if (mins <10){
        mins = `0${mins}`;
    }
    return `${hours}:${mins}`
}

document.querySelector("#cur-time").innerHTML = formatTime(new Date());

function setCurrentWeatherData(data){
    document.querySelector("#cur-temp").innerHTML = data.temp_c + "&deg;C";
    document.querySelector("#cur-feel-temp").innerHTML = data.feelslike_c + "&deg; C";
    document.querySelector("#cur-wtype").innerHTML = data.condition.text;
    document.querySelector("#cur-wt-icon").src = data.condition.icon;
    document.querySelector("#humidity").innerHTML = data.humidity + "%";
    document.querySelector("#wind").innerHTML = data.wind_kph + "Km/h";
    document.querySelector("#cur-time").innerHTML = formatTime(new Date());
}

function getWeatherData(city){
    let url;
    url = `https://api.weatherapi.com/v1/forecast.json?key=${API_key}&q=${city}&days=4&aqi=no&alerts=no`;
    fetch(url)
        .then(res => res.json())
        .then(data => {
            document.querySelector("#searched-city").innerHTML = data.location.name; 
            setCurrentWeatherData(data.current)   
        })
        .catch(err => console.log(err));
}

function handleSubmit(event){
    event.preventDefault();
    let city = document.querySelector("#search-input").value;
    getWeatherData(city);
}

const searchBar = document.querySelector("#search-form");
searchBar.addEventListener("submit", handleSubmit);