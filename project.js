const movies = [
    {
        title: "Iron Man",
        image: "https://image.tmdb.org/t/p/w500/s4aIhUNqYJyq9tqLTAaX6pe9R7U.jpg"
    },
    {
        title: "The Avengers",
        image: "https://image.tmdb.org/t/p/w500/RYMX2wcKCBAr24UyPD7xwmjaTn.jpg"
    },
    {
        title: "Black Panther",
        image: "https://image.tmdb.org/t/p/w500/6ELJEzQJ3Y45HczvreC3dg0GV5R.jpg"
    },
    // Add more movies here
];

const series = [
    {
        title: "WandaVision",
        image: "https://image.tmdb.org/t/p/w500/glKDfE6btIRcVB5zrjspRIs4r52.jpg"
    },
    {
        title: "Loki",
        image: "https://image.tmdb.org/t/p/w500/kEl2t3OhXc3Zb9FBh1AuYzRTgZp.jpg"
    },
    {
        title: "The Falcon and the Winter Soldier",
        image: "https://image.tmdb.org/t/p/w500/6kbAMLteGO8yyewYau6bJ683sw7.jpg"
    },
    // Add more series here
];

function showSection(sectionId) {
    document.getElementById('movies').style.display = 'none';
    document.getElementById('series').style.display = 'none';
    document.getElementById(sectionId).style.display = 'block';
}

function loadContent() {
    const moviesList = document.getElementById('movies-list');
    const seriesList = document.getElementById('series-list');

    movies.forEach(movie => {
        const movieItem = document.createElement('div');
        movieItem.classList.add('grid-item');
        movieItem.innerHTML = `
            <img src="${movie.image}" alt="${movie.title}">
            <h3>${movie.title}</h3>
        `;
        moviesList.appendChild(movieItem);
    });

    series.forEach(serie => {
        const seriesItem = document.createElement('div');
        seriesItem.classList.add('grid-item');
        seriesItem.innerHTML = `
            <img src="${serie.image}" alt="${serie.title}">
            <h3>${serie.title}</h3>
        `;
        seriesList.appendChild(seriesItem);
    });
}

// Load content when the page loads
window.onload = loadContent;
