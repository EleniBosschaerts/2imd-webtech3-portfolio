/// EXTRA DEEL MOVIES - film aanbevelingen obv het weer 
class Movie {
    constructor(API_KEY, icon) { // hier komt API key binnen 
        this.API_KEY = API_KEY; // API key maken 
        this.icon = icon;
        this.initialize();
    }

    // functies 
    initialize() {
        this.getMovie();
    }

    // film kiezen obv weer & genres 
    getMovie() {
        console.log("found you a great Movie - getMovie 🎞");
        let genre = this.getGenresByWeather();

        console.log(genre);
        let url = `https://api.themoviedb.org/3/discover/movie?api_key=${this.API_KEY}&with_genres=${genre}&sort_by=vote_average.desc&vote_count.gte=10&certification_country=US&original_language=en`;
        fetch(url, {
                method: 'get'
            }).then(response => {
                return response.json(); // Json geeft promis terug 
            })
            .then(json => {
                console.log("great Movie 🎞");
                let title = document.createElement("h1");
                title.innerHTML = json.results[randomNr].title;
                document.querySelector("div#inputAPI__movie").appendChild(title);
                console.log(json.results[randomNr].title);

                /* // EXTRA POSTER // 
                let poster_path = json.results[randomNr].poster_path;
                let moviePoster = document.querySelector("img");
                moviePoster.setAttribute("style", `background-image: url(https://image.tmdb.org/t/p/w500${poster_path});`);
                console.log(json.results[randomNr].poster_path); 
                //poster_path.innerHTML = json.results[randomNr].poster_path;
                //document.querySelector("div#inputAPI__movieImg").appendChild(poster_path);
                */
            })
            .catch(err => {
                console.log("err Movie");
            });

    }

    getGenresByWeather() { // (genre)
        // this.icon = genreByWeather; // $$ HOE ICON UIT ANDERE CLASS KRIJGEN ? 

        let nameClassGenre = document.getElementById('inputAPI__movie');
        let genreByWeather = nameClassGenre.getAttribute("class");
        console.log("genreByWeather: " + genreByWeather);

        //let genreByWeather = "partly-cloudy-night";  // FAKE weather to test - komt uit: json.currently.icon;

        let genre, genreName;

        // ELK weer heeft zijn film 
        if (genreByWeather == "partly-cloudy-night") {
            genre = 18; // we kijken vandaag drama films
            genreName = "drama";
        } else if (genreByWeather == "clear-day") {
            genre = 35; // Comedy
            genreName = "Comedy";
        } else if (genreByWeather == "clear-night") {
            genre = 10749; // Romance
        } else if (genreByWeather == "cloudy") {
            genre = 878; // Science Fiction
        } else if (genreByWeather == "rain") {
            genre = 12; // Adventure
        } else if (genreByWeather == "snow") {
            genre = 14; // Fantasy
        } else if (genreByWeather == "sleet") {
            genre = 28; // Action
        } else if (genreByWeather == "wind") {
            genre = 99; // Documentary
        } else if (genreByWeather == "fog") {
            genre = 9648; // Mystery
        } else if (genreByWeather == "partly-cloudy-day") {
            genre = 10751; // Family
        } else if (genreByWeather == "hail") {
            genre = 10752; // War
        } else if (genreByWeather == "thunderstorm") {
            genre = 27; // Horror
        } else if (genreByWeather == "tornado") {
            genre = 53; // Thriller
        } else {
            genre = 37; // no right genre found // THAN WATCH  Western Movies = default genre
        }
        console.log(genre);
        return genre;
    }
}

// vb. random film kiezen uit beste 'dramas'
let randomNr = Math.floor((Math.random() * 20) + 1);
//console.log(randomNr); 

//let app = new Weather('6c3b8db6135474ece1ae300558aec8d3');
let appPoster = new Movie('f22e56356483a7693d49e6d08c4624fa');

//let key = "6c3b8db6135474ece1ae300558aec8d3"; //^of hierboven mee geven // API KEY MAG eig niet zichtbaar 
//URL https://api.darksky.net/forecast/6c3b8db6135474ece1ae300558aec8d3/37.8267,-122.4233        
//KEY 6c3b8db6135474ece1ae300558aec8d3

//MOVIES key 	f22e56356483a7693d49e6d08c4624fa
//api.themoviedb.org/3/discover/movie?with_genres=18&sort_by=vote_average.desc&vote_count.gte=10&certification_country=US&api_key=f22e56356483a7693d49e6d08c4624fa
//api.themoviedb.org/3/discover/movie?with_genres=18&sort_by=vote_average.desc&vote_count.gte=10&certification_country=US&api_key=${this.API_KEY}
// IMG https://image.tmdb.org/t/p/w500/kqjL17yufvn9OVLyXYpvtyrFfak.jpg   