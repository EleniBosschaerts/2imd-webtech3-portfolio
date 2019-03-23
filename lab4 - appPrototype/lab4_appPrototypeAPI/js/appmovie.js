class Movie {
    constructor(API_KEY) {      // hier komt API key binnen 
        this.API_KEY = API_KEY; // API key maken 
        this.initialize();
    }

    // functies 
    initialize() {
        this.getPosterMovie();
    }
    
    getPosterMovie() {
        console.log("😄 getPosterMovie");
        let genres = 18
        let url = `https://api.themoviedb.org/3/discover/movie?api_key=${this.API_KEY}&with_genres=${genres}&sort_by=vote_average.desc&vote_count.gte=10&certification_country=US&original_language=en`;
        fetch(url, {
            method: 'get'
        }).then(response => {
            return response.json();  // Json geeft promis terug 
        })
        .then(json => {
            let title = document.createElement("h1");
            title.innerHTML = json.results.title;
            document.querySelector("div#inputAPI__movie").appendChild(title);


            /*
            let temp = document.createElement("h1");
            temp.innerHTML = json.currently.temperature;
            document.querySelector("div#inputAPI__temp").appendChild(temp);
            */

        
            console.log(json); 
            // KAN OOK
            console.log(json.results.id); 
        })
        .catch(err => {
			console.log("err");
		});

        //ES6 oud=function(position) //2functies met 1 parameter vb. position

        /*navigator.geolocation.getCurrentPosition(position => {
            console.log("found you");
            let lat = position.coords.latitude;
            let lng = position.coords.longitude;
            this.getMovie(lat, lng);  // verwijzig naar de functie 
        }, error => {
            console.log("err");
        });
        */
    }

    
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
https://api.themoviedb.org/3/discover/movie?with_genres=18&sort_by=vote_average.desc&vote_count.gte=10&certification_country=US&api_key=f22e56356483a7693d49e6d08c4624fa

https://api.themoviedb.org/3/discover/movie?with_genres=18&sort_by=vote_average.desc&vote_count.gte=10&certification_country=US&api_key=${this.API_KEY}

/*
let settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://api.themoviedb.org/3/discover/movie?with_genres=18&sort_by=vote_average.desc&vote_count.gte=10&certification_country=US&api_key=f22e56356483a7693d49e6d08c4624fa&original_language=en&genre_ids=18",
  "method": "GET",
  "headers": {
    "cache-control": "no-cache",
    "Postman-Token": "8ff46dbe-e642-4f1f-9be2-6a900e9cc6da"
  }
}

$.ajax(settings).done(function (response) {
  console.log(response);
});
*/
        

//let key WEER = "6c3b8db6135474ece1ae300558aec8d3"; //^of hierboven mee geven // API KEY MAG eig niet zichtbaar 
//URL https://api.darksky.net/forecast/6c3b8db6135474ece1ae300558aec8d3/37.8267,-122.4233        
//KEY 6c3b8db6135474ece1ae300558aec8d3