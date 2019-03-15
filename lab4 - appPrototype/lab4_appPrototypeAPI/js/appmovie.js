class Movie {
    constructor(API_KEY) {      // hier komt API key binnen 
        this.API_KEY = API_KEY; // API key maken 
        this.initialize();
    }

    // functies 
    initialize() {
        this.getPosterMovie();
        console.log(navigator); // eens kijken wat er in zit
    }
    
    getPosterMovie() {
        console.log("😄 getPosterMovie");
        //ES6 oud=function(position) //2functies met 1 parameter vb. position
        navigator.geolocation.getCurrentPosition(position => {
            console.log("found you");
            let lat = position.coords.latitude;
            let lng = position.coords.longitude;
            this.getMovie(lat, lng);  // verwijzig naar de functie 
        }, error => {
            console.log("err");
        });
    }

    /*
    var data = "{}";

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
    if (this.readyState === this.DONE) {
        console.log(this.responseText);
    }
    });
    xhr.open("GET", "https://api.themoviedb.org/3/discover/movie?page=1&include_video=false&include_adult=false&sort_by=popularity.desc&language=en-US&api_key=%3C%3Capi_key%3E%3E");
    xhr.send(data);
    */
    
    /*
    getPosterMovie() {
        console.log("😄 getPosterMovie");
        //ES6 oud=function(position) //2functies met 1 parameter vb. position
        navigator.geolocation.getCurrentPosition(position => {
            console.log("found you");
            let lat = position.coords.latitude;
            let lng = position.coords.longitude;
            this.getMovie(lat, lng);  // verwijzig naar de functie 
        }, error => {
            console.log("err");
        });
    }*/


    getMovie(lat,lng){
        //AJAX / Javascript And XML > we’ll use JSON
        // fetch met promise (geen call backs meer gebruiken)
        let url = `https://api.themoviedb.org/3/discover/movie?with_genres=18&sort_by=vote_average.desc&vote_count.gte=10&certification_country=US&api_key=${this.API_KEY}`;
        fetch(url)
        .then(response => {
            return response.json();  // Json geeft promis terug 
        })
        .then(json => {
            let title = document.createElement("h1");
            title.innerHTML = json.results.title;
            document.querySelector("body").appendChild(title);

            /*let img = document.createElement("img");
            img.innerHTML = json.currently.icon;
            document.querySelector("body").appendChild(img);
            */
            //console.log(json); 
            // KAN OOK
            console.log(json.results.id); 
        })
    }
}

let appPoster = new Movie('f22e56356483a7693d49e6d08c4624fa');

/*
getPoster(){
}
*/

//MOVIES key 	f22e56356483a7693d49e6d08c4624fa

//let key WEER = "6c3b8db6135474ece1ae300558aec8d3"; //^of hierboven mee geven // API KEY MAG eig niet zichtbaar 
    //URL https://api.darksky.net/forecast/6c3b8db6135474ece1ae300558aec8d3/37.8267,-122.4233        
    //KEY 6c3b8db6135474ece1ae300558aec8d3