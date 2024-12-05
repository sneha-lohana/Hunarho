const API_key = "c6e75906b4944fc88f0105912243011";

// Date formating
const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const dates = [0, "1st", "2nd", "3rd", "4th", "5th", "6th", "7th", "8th", "9th", "10th", "11th", "12th", "13th", "14th", "15th", "16th", "17th", "18th", "19th", "20th", "21st", "22nd", "23rd", "24th", "25th", "26th", "27th", "28th", "29th", "30th", "31st"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];


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

dt = new Date();
document.querySelector("#cur-time").innerHTML = formatTime(dt);
document.querySelector("#cur-day").innerHTML = dates[dt.getDate()] + " " + months[dt.getUTCMonth()] + ", " + days[dt.getDay()];

function setCurrentWeatherData(data){
    document.querySelector("#cur-temp").innerHTML = data.temp_c + "&deg;C";
    document.querySelector("#cur-feel-temp").innerHTML = data.feelslike_c + "&deg; C";
    document.querySelector("#cur-wtype").innerHTML = data.condition.text;
    document.querySelector("#cur-wt-icon").src = data.condition.icon;
    document.querySelector("#humidity").innerHTML = data.humidity + "%";
    document.querySelector("#wind").innerHTML = data.wind_kph + "Km/h";
    document.querySelector("#cur-time").innerHTML = formatTime(new Date());
}


function setForecastData(data){
    console.log(data);
    const dailyforecast = document.querySelector(".daily-forcast");
    console.log(dailyforecast);
    // dailyforecast.innerHTML = "";
    for (let i=1; i<data.forecastday.length; i++){
        console.log(i);
        
        const forcastcard = document.createElement('div');
        forcastcard.className = "col forecast-card";

        dth3 = document.createElement('h3');
        dth3.textContent = data.forecastday[i].date;
        forcastcard.append(dth3);

        minh6 = document.createElement('h6');
        minh6.textContent = `Min: `;
        minspan = document.createElement('span');
        minspan.textContent = data.forecastday[i].day.mintemp_c + "° C";
        minh6.append(minspan);
        forcastcard.append(minh6);

        // Add Max temp
        maxh6 = document.createElement('h6');
        maxh6.textContent = `Max: `;
        maxspan = document.createElement('span');
        maxspan.textContent = data.forecastday[i].day.maxtemp_c + "° C";
        maxh6.append(maxspan);
        forcastcard.append(maxh6);

        // Add condition icon
        imgicon = document.createElement("img");
        imgicon.src = data.forecastday[i].day.condition.icon;
        forcastcard.append(imgicon);

        // Add condition text
        p = document.createElement("p");
        p.className = "weather"
        p.innerHTML = data.forecastday[i].day.condition.text;
        forcastcard.append(p);

        dailyforecast.append(forcastcard)
    }
}

function getWeatherData(city){
    let url;
    url = `https://api.weatherapi.com/v1/forecast.json?key=${API_key}&q=${city}&days=4&aqi=no&alerts=no`;
    fetch(url)
        .then(res => res.json())
        .then(data => {
            document.querySelector("#searched-city").innerHTML = data.location.name; 
            setCurrentWeatherData(data.current)   
            setForecastData(data.forecast)
        })
        .catch(err => console.log(err));
}

function handleSubmit(event){
    event.preventDefault();
    let city = document.querySelector("#search-input").value;
    getWeatherData(city);
}

getWeatherData("Mumbai");
const searchBar = document.querySelector("#search-form");
searchBar.addEventListener("submit", handleSubmit);