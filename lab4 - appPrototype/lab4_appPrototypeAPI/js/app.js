class Weather {
    constructor(API_KEY) {      // hier komt API key binnen 
        this.API_KEY = API_KEY; // API key maken 
        this.initialize();
    }

    // functies 
    initialize() {
        this.getMyLocation();
        //console.log(navigator); // eens kijken wat er in zit
    }
    
    getMyLocation() {
        console.log("😄 getMyLocation");
        //ES6 oud=function(position) //2functies met 1 parameter vb. position
        navigator.geolocation.getCurrentPosition(position => {
            console.log("found you");
            let lat = position.coords.latitude;
            let lng = position.coords.longitude;
            this.getWeather(lat, lng);  // verwijzig naar de functie 
        }, error => {
            console.log("err");
        });
    }

    getWeather(lat,lng){
        //AJAX / Javascript And XML > we’ll use JSON
        // fetch met promise (geen call backs meer gebruiken)
        let url = `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${this.API_KEY}/${lat},${lng}?units=si`;
        fetch(url)
        .then(response => {
            return response.json();  // Json geeft promis terug 
        })
        .then(json => {
            let temp = document.createElement("h1");
            temp.innerHTML = json.currently.temperature;
            document.querySelector("body").appendChild(temp);

            let summary = document.createElement("p");
            summary.innerHTML = json.currently.summary;
            document.querySelector("body").appendChild(summary);

            var icon = document.getElementById("iconWeather");
            icon.classList.add(json.currently.icon);

            /*let icon = document.createElement("p");
            icon.innerHTML = json.currently.icon;
            document.querySelector("body").appendChild(icon);
*/
            //console.log(json); 
            // KAN OOK
            console.log(json.currently.summery); 
            console.log(json.currently.temperature); 
        })
    }
}

let app = new Weather('6c3b8db6135474ece1ae300558aec8d3');

/*
getPoster(){
}
*/

//let key = "6c3b8db6135474ece1ae300558aec8d3"; //^of hierboven mee geven // API KEY MAG eig niet zichtbaar 
    //URL https://api.darksky.net/forecast/6c3b8db6135474ece1ae300558aec8d3/37.8267,-122.4233        
    //KEY 6c3b8db6135474ece1ae300558aec8d3

/// EXTRA DEEL MOVIES