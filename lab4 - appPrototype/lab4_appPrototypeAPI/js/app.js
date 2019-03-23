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
        console.log("getMyLocation 📡");
        //ES6 oud=function(position) //2functies met 1 parameter vb. position
        navigator.geolocation.getCurrentPosition(position => {
            //console.log("found you");
            let lat = position.coords.latitude;
            let lng = position.coords.longitude;
            this.getWeather(lat, lng);  // verwijzig naar de functie 
        }, error => {
            console.log("err");
        });
    }

    getWeather(lat, lng){
        console.log("getWeather ☀️🌤🌧");
        let url = `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${this.API_KEY}/${lat},${lng}?units=si`;
        fetch(url)
        .then(response => {
            return response.json();  // Json geeft promis terug 
        })
        .then(json => {
            let temp = document.createElement("h1");
            temp.innerHTML = json.currently.temperature;
            document.querySelector("div#inputAPI__temp").appendChild(temp);
            console.log(json.currently.temperature); 

            let summary = document.createElement("div");
            summary.innerHTML = json.currently.summary;
            document.querySelector("div#inputAPI__sum").appendChild(summary);
            console.log(json.currently.summary);

            let icon = json.currently.icon; // nodig in getGenresByWeather
            console.log(icon); 
            new Movie('f22e56356483a7693d49e6d08c4624fa', icon);
            
            /* extra weer icoon
            let icon = document.getElementById("iconWeather");
            icon.classList.add(json.currently.icon);
            */
        })
        .catch(err => {
			console.log("err Weather");
		});
      
    //return this.icon;
    }

    get iconGetter() {
        return this.getWeather();
    }

}

let app = new Weather('6c3b8db6135474ece1ae300558aec8d3');
//console.log(app.iconGetter);
console.log("test 🌈 ");
  
//let key = "6c3b8db6135474ece1ae300558aec8d3"; //^of hierboven mee geven // API KEY MAG eig niet zichtbaar 
    //URL https://api.darksky.net/forecast/6c3b8db6135474ece1ae300558aec8d3/37.8267,-122.4233        
    //KEY 6c3b8db6135474ece1ae300558aec8d3

/// EXTRA DEEL MOVIES aanbevelingen obv het weer 
class Movie {
    constructor(API_KEY, icon) {      // hier komt API key binnen 
        this.API_KEY = API_KEY; // API key maken 
        this.icon = icon;
        this.initialize();
    }

    // functies 
    initialize() {
        this.getMovie();
    }

    getGenresByWeather(){
        let genre = 37;
        genreByWeather = this.icon;
        if(genreByWeather == "partly-cloudy-night"){
            genre = 18;    // we kijken vandaag drama films 
        } else if(genreByWeather == "clear-day"){
            genre = 35;    // Comedy
        } else if(genreByWeather == "clear-night"){
            genre = 10749;    // Romance
        } else if(genreByWeather == "cloudy"){
            genre = 878;    // Science Fiction
        } else if(genreByWeather == "rain"){
            genre = 12;    // Adventure
        } else if(genreByWeather == "snow"){
            genre = 14;    // Fantasy
        } else if(genreByWeather == "sleet"){
            genre = 28;    // Action
        } else if(genreByWeather == "wind"){
            genre = 99;    // Documentary
        } else if(genreByWeather == "fog"){
            genre = 9648;    // Mystery
        } else if(genreByWeather == "partly-cloudy-day"){
            genre = 10751;    // Family
        } else if(genreByWeather == "hail"){
            genre = 10752;    // War
        } else if(genreByWeather == "thunderstorm"){
            genre = 27;    // Horror
        } else if(genreByWeather == "tornado"){
            genre = 53;    // Thriller
        } else{
            genre = 37; // no genre found // THAN WATCH  Western Movies
        }
        return genre;
    }

    // film kiezen obv weer & genres 
    getMovie(){
        console.log("found you a great Movie - getMovie 🎞");
        genre = 37;
        let url = `https://api.themoviedb.org/3/discover/movie?api_key=${this.API_KEY}&with_genres=${genre}&sort_by=vote_average.desc&vote_count.gte=10&certification_country=US&original_language=en`;
        fetch(url, {
            method: 'get'
        }).then(response => {
            return response.json();  // Json geeft promis terug 
        })
        .then(json => {
            let title = document.createElement("h1");
            title.innerHTML = json.results[randomNr].title;
            document.querySelector("div#inputAPI__movie").appendChild(title);
            console.log(json.results[randomNr].title); 

            // https://image.tmdb.org/t/p/w500/kqjL17yufvn9OVLyXYpvtyrFfak.jpg
            let poster_path = json.results[randomNr].poster_path;
            let moviePoster = document.querySelector("img");
            moviePoster.setAttribute("style", `background-image: url(https://image.tmdb.org/t/p/w500${poster_path});`);
            console.log(json.results[randomNr].poster_path); 
            //poster_path.innerHTML = json.results[randomNr].poster_path;
            //document.querySelector("div#inputAPI__movieImg").appendChild(poster_path);

/*
            let id = document.createElement("p");
            id.innerHTML = json.results[randomNr].id;
            //let id = json.results[randomNr].id;
            document.querySelector("div#inputAPI__movie").appendChild(id);
            console.log(id); 
*/
            /*
            let temp = document.createElement("h1");
            temp.innerHTML = json.currently.temperature;
            document.querySelector("div#inputAPI__temp").appendChild(temp);
            */

        })
        .catch(err => {
			console.log("err");
		});      
        
    }
}

//let appPoster = new Movie('f22e56356483a7693d49e6d08c4624fa');

// random film kiezen uit beste dramas
let randomNr = Math.floor((Math.random() * 20) + 1);
//console.log(randomNr); 



//MOVIES key 	f22e56356483a7693d49e6d08c4624fa
//api.themoviedb.org/3/discover/movie?with_genres=18&sort_by=vote_average.desc&vote_count.gte=10&certification_country=US&api_key=f22e56356483a7693d49e6d08c4624fa
//api.themoviedb.org/3/discover/movie?with_genres=18&sort_by=vote_average.desc&vote_count.gte=10&certification_country=US&api_key=${this.API_KEY}
// IMG https://image.tmdb.org/t/p/w500/kqjL17yufvn9OVLyXYpvtyrFfak.jpg

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
        

