const API_key = 'api_key=3a137615eb542ca9eb3516c6198f2453';
const main_url = 'https://api.themoviedb.org/3';
const API_URL = main_url + '/discover/movie?sort_by=popularity.desc&' + API_key;

async function getMovies(url){
    const response = await fetch(url)
    const data = await response.json();
    console.log(data);
}

getMovies(API_URL);