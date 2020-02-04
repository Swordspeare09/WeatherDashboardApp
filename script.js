$(document).ready(function() {


  $("#search-button").on("click", function() {
    
    var cityName = $("#search-request").val();

    //I thought you guys were supposed to show us a way to hide our key
    var APIKey = "4a85432182e7647448add485a1145d3d";

    var searchURL =
      "https://api.openweathermap.org/data/2.5/forecast?q=" +
      cityName +
      "&units=imperial&appid=" +
      APIKey;

    
    $.ajax({
      url: searchURL,
      method: "GET"
    }).then(function(response) {


      $("#searched-city").text(response.city.name);
      $("#main-temp").text(response.list[0].main.temp);
      $("#main-humidity").text(response.list[0].main.humidity);
      $("#main-windspeed").text(response.list[0].wind.speed);

      var citylat = response.city.coord.lat;
      var citylong = response.city.coord.lon;

      var uvUrl ="https://api.openweathermap.org/data/2.5/uvi?appid=" + APIKey +"&lat="+ citylat + "&lon="+citylong+ "&appid=" + APIKey;

      $.ajax({
        url: uvUrl,
        method: "GET"
      }).then(function(response){
        console.log(response);

        $("#main-UV").text(response.value)

      });

      //Start of 5 day forcast
      var $day1Forcast = $(`<li>${response.list[7].main.temp}</li>
            <li>${response.list[7].main.humidity}</li>
            <li>${response.list[7].wind.speed}</li>`);

      $("#day1").append($day1Forcast);

      var $day2Forcast = $(`<li>${response.list[15].main.temp}</li>
            <li>${response.list[15].main.humidity}</li>
            <li>${response.list[15].wind.speed}</li>`);

      $("#day2").append($day2Forcast);

      var $day3Forcast = $(`<li>${response.list[23].main.temp}</li>
            <li>${response.list[23].main.humidity}</li>
            <li>${response.list[23].wind.speed}</li>`);

      $("#day3").append($day3Forcast);

      var $day4Forcast = $(`<li>${response.list[31].main.temp}</li>
            <li>${response.list[31].main.humidity}</li>
            <li>${response.list[31].wind.speed}</li>`);

      $("#day4").append($day4Forcast);

      var $day5Forcast = $(`<li>${response.list[39].main.temp}</li>
            <li>${response.list[39].main.humidity}</li>
            <li>${response.list[39].wind.speed}</li>`);

      $("#day5").append($day5Forcast);






    });

  });
});
