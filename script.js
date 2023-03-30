let weather = {
    //defining the API that is being used
    apiKey: "380bd3d11f2f5510a467e13c849e5c71",
  
    // This is allowing for JS to pull the weather information and put in console log
    fetchWeather: function (city) {
      fetch(
        //fetching information from the response then using the data retrieved to show in console log by typing weather.fetchWeather()
        "https://api.openweathermap.org/data/2.5/weather?q=" +
          city +
          "&appid=" +
          this.apiKey +
          "&units=imperial"
      )
        .then((response) => response.json())
        .then((data) => this.displayWeather(data));
    },
    // function so that users are able to input City and display the information into the function
    displayWeather: function (data) {
      //this function is pulling the name from the data used
      const { name } = data;
      //due to items being retrieved is in an array, the icon & description would not appear. The reason for the [0] so that it pulls the first item
      const { icon, description } = data.weather[0];
      const { temp, humidity } = data.main;
      const { speed } = data.wind;
      const { country } = data.sys;
     
  
      //returns the first item that matches, like document.getElementbyID()
      document.querySelector(".city").innerText = name + ", " + country;
      //to make png img bigger use @2x.png
      document.querySelector(".icon").src =
        "https://openweathermap.org/img/wn/" + icon + ".png";
      document.querySelector(".description").innerText = description;
      //math.floor is to remove decimals.. whole number only
      document.querySelector(".temp").innerText = Math.floor(temp) + "°F";
  
      document.querySelector(".humidity").innerText =
        "Humidity: " + humidity + "%";
      document.querySelector(".wind").innerText =
        "Wind Speed: " + speed + " km/h";
      document.querySelector(".weather").classList.remove("loading");
  
  
    },
    //search function to connect to search bar
    search: function () {
      this.fetchWeather(document.querySelector(".search-bar").value);
    },
 
  };
  
  document.querySelector(".search button").addEventListener("click", function () {
    weather.search();
  });
  document
    .querySelector(".search-bar")
    .addEventListener("keyup", function (event) {
      if (event.key == "Enter") {
        weather.search();
      }
    });
  
    
  
  fetchWeather("Dallas");
  