
/*$.ajax({
    url: "http://api.openweathermap.org/data/2.5/weather?q=Mexico&units=metric&appid=bd82977b86bf27fb59a04b61b657fb6f",
    success: function( data ) {
  	   console.log(data);
  	   //debugger;
  	var mihtml = "Description: " + data.weather[0].description + '<br>' 
  	             + " Humidity: " + data.main.humidity + '<br>'
  	             + " Pressure: " + data.main.pressure + '<br>'
  	             + " Temperature: " + data.main.temp + ' C<br>'
  	             + " Min Temp : " + data.main.temp_min + ' C<br>'
  	             + " Max Temp: " + data.main.temp_max + ' C<br>';

    $( "#img_weather" )
    .attr("src",'http://openweathermap.org/img/w/'+ data.weather[0].icon + '.png');
    $( ".Card-Country" )
    .html(data.name);

    $( ".Card-description")
    .html(mihtml);

 }   
});
*/
 $(document).ready(function() {

     var owl = $("#owl-demo1");

    owl.owlCarousel({
      items : 1,
      lazyLoad : true,
      autoPlay : false,
      navigation : true,
      navigationText :  true,
      pagination : false,
      afterAction : myStatus
   });

   function myStatus () {
      
     console.log("current item:" + this.owl.currentItem);
     console.log("owItems:" + this.owl.owItems);
     //debugger;
     switch (this.owl.currentItem) {
    case 0:
        fetchWeatherData('Mexico');
        fetchTimeData('Mexico');
        break;
    case 1:
        fetchWeatherData('Colombia');
        fetchTimeData('Bogota');
        break;
    
    }  


   } 

   function fetchWeatherData(pais) {

$.ajax({
    url: "http://api.openweathermap.org/data/2.5/weather?q="+ pais + "&units=metric&appid=bd82977b86bf27fb59a04b61b657fb6f",
    success: function( data ) {
       console.log(data);
       //debugger;
    var mihtml = "Description: " + data.weather[0].description + '<br>' 
                 + " Humidity: " + data.main.humidity + '<br>'
                 + " Pressure: " + data.main.pressure + '<br>'
                 + " Temperature: " + data.main.temp + ' C<br>'
                 + " Min Temp : " + data.main.temp_min + ' C<br>'
                 + " Max Temp: " + data.main.temp_max + ' C<br>';

    $( "#img_weather" )
    .attr("src",'http://openweathermap.org/img/w/'+ data.weather[0].icon + '.png');
    $( ".Card-Country" )
    .html(data.name);

    $( ".Card-description")
    .html(mihtml);

    }   
  });

 }

   function fetchTimeData(pais) {

$.ajax({
    url: "http://api.worldweatheronline.com/free/v2/tz.ashx?key=576c963e8a2b04e670d9a46aa5972&q="+ pais + "&format=json",
    success: function( data ) {
       //console.log(data);
       //debugger;
    var mihtml = "Localtime: " + data.data.time_zone[0].localtime + '<br>' ;

  

   $( ".Card-Time-City" )
    .html(pais);

    $( ".Card-Time-Description" )
    .html(mihtml);
   

    }   
  });

 }




 fetchWeatherData('Mexico');
 fetchTimeData('Mexico');

});

//call fetchWeatherData('Mexico');
                    
