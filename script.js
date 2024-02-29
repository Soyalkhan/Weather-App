
const options = {
  method: "GET",
  headers: {
    
  },
};

async function fetchData(city) {
  const url =
  "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city;
  try {
    // Show loading GIF while fetching data
    loading.style.display = 'block';

    cityName.innerHTML = city;
    const response = await fetch(url, options);
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

    // Hide loading GIF after data is fetched
    loading.style.display = 'none';
  } catch (error) {
    console.error(error);

     // Hide loading GIF in case of error
     loading.style.display = 'none';

  }
  return city;
}


btn.addEventListener("click", (e) => {
  e.preventDefault();
  if(city.value === ""){
    alert("enter City name!")
  }else{
    fetchData(city.value);
    // console.log(fetchData);
    
    console.log("city searched." + city.value);
  }
});
fetchData("New Delhi");
