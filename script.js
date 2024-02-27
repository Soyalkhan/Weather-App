const url =
  "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=delhi";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "257d68f7f5msh4107ea62b933571p14d794jsn5ebd62ccebfd",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};

async function fetchData(city) {
   
  try {

    const response = await fetch(url, options);
    cityName.innerHTML = city;
    const result = await response.json();
    console.log(result);

    // cloud_pct.innerHTML = result.cloud_pct;
    // feels_like.innerHTML = result.feels_like;
    humidity.innerHTML = result.humidity;
    // max_temp.innerHTML = result.max_temp;
    // min_temp.innerHTML = result.min_temp;
    // sunrise.innerHTML = result.sunrise;
    // sunset.innerHTML = result.sunset;
    temp.innerHTML = result.temp;
    // wind_degrees.innerHTML = result.wind_degrees;
    wind_speed.innerHTML = result.wind_speed;

  } catch (error) {
    console.error(error);
  }
}
fetchData("Delhi");

btn.addEventListener("click",(e)=>{
    e.preventDefault();
    fetchData(city.value);
    cityName.innerHTML = city;
    console.log("city searched.");
})
