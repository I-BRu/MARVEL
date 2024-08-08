const movies = [
  {
    title: "Iron Man",
    image: "https://image.tmdb.org/t/p/w500/s4aIhUNqYJyq9tqLTAaX6pe9R7U.jpg",
  },
  {
    title: "The Avengers",
    image: "https://image.tmdb.org/t/p/w500/RYMX2wcKCBAr24UyPD7xwmjaTn.jpg",
  },
  {
    title: "Black Panther",
    image: "https://image.tmdb.org/t/p/w500/6ELJEzQJ3Y45HczvreC3dg0GV5R.jpg",
  },
  // Add more movies here
];

const series = [
  {
    title: "WandaVision",
    image: "https://image.tmdb.org/t/p/w500/glKDfE6btIRcVB5zrjspRIs4r52.jpg",
  },
  {
    title: "Loki",
    image: "https://image.tmdb.org/t/p/w500/kEl2t3OhXc3Zb9FBh1AuYzRTgZp.jpg",
  },
  {
    title: "The Falcon and the Winter Soldier",
    image: "https://image.tmdb.org/t/p/w500/6kbAMLteGO8yyewYau6bJ683sw7.jpg",
  },
  // Add more series here
];

function showSection(sectionId) {
  document.getElementById("movies").style.display = "none";
  document.getElementById("series").style.display = "none";
  document.getElementById(sectionId).style.display = "block";
}

function loadContent() {
  const moviesList = document.getElementById("movies-list");
  const seriesList = document.getElementById("series-list");

  movies.forEach((movie) => {
    const movieItem = document.createElement("div");
    movieItem.classList.add("grid-item");
    movieItem.innerHTML = `
          <img src="${movie.image}" alt="${movie.title}">
          <h3>${movie.title}</h3>
      `;
    moviesList.appendChild(movieItem);
  });

  series.forEach((serie) => {
    const seriesItem = document.createElement("div");
    seriesItem.classList.add("grid-item");
    seriesItem.innerHTML = `
          <img src="${serie.image}" alt="${serie.title}">
          <h3>${serie.title}</h3>
      `;
    seriesList.appendChild(seriesItem);
  });
}

// Load content when the page loads
window.onload = loadContent;

// Array of Marvel movies with more details
const movies = [
  {
    title: "Iron Man",
    year: 2008,
    poster: "https://example.com/ironman.jpg",
    description:
      "After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.",
    genre: "Action",
  },
  {
    title: "The Avengers",
    year: 2012,
    poster: "https://example.com/avengers.jpg",
    description:
      "Earth's mightiest heroes must come together and learn to fight as a team if they are to stop the mischievous Loki and his alien army from enslaving humanity.",
    genre: "Action",
  },
  {
    title: "Guardians of the Galaxy",
    year: 2014,
    poster: "https://example.com/gotg.jpg",
    description:
      "A group of intergalactic criminals must pull together to stop a fanatical warrior with plans to purge the universe.",
    genre: "Sci-Fi",
  },
  {
    title: "Black Panther",
    year: 2018,
    poster: "https://example.com/blackpanther.jpg",
    description:
      "T'Challa, heir to the hidden but advanced kingdom of Wakanda, must step forward to lead his people into a new future and must confront a challenger from his country's past.",
    genre: "Action",
  },
  {
    title: "Spider-Man: No Way Home",
    year: 2021,
    poster: "https://example.com/spiderman.jpg",
    description:
      "With Spider-Man's identity now revealed, Peter asks Doctor Strange for help. When a spell goes wrong, dangerous foes from other worlds start to appear, forcing Peter to discover what it truly means to be Spider-Man.",
    genre: "Action",
  },
];

/// Array of Marvel movies with more details
const movies = [
  {
    title: "Iron Man",
    year: 2008,
    poster: "https://example.com/ironman.jpg",
    description:
      "After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.",
    genre: "Action",
  },
  {
    title: "The Avengers",
    year: 2012,
    poster: "https://example.com/avengers.jpg",
    description:
      "Earth's mightiest heroes must come together and learn to fight as a team if they are to stop the mischievous Loki and his alien army from enslaving humanity.",
    genre: "Action",
  },
  {
    title: "Guardians of the Galaxy",
    year: 2014,
    poster: "https://example.com/gotg.jpg",
    description:
      "A group of intergalactic criminals must pull together to stop a fanatical warrior with plans to purge the universe.",
    genre: "Sci-Fi",
  },
  {
    title: "Black Panther",
    year: 2018,
    poster: "https://example.com/blackpanther.jpg",
    description:
      "T'Challa, heir to the hidden but advanced kingdom of Wakanda, must step forward to lead his people into a new future and must confront a challenger from his country's past.",
    genre: "Action",
  },
  {
    title: "Spider-Man: No Way Home",
    year: 2021,
    poster: "https://example.com/spiderman.jpg",
    description:
      "With Spider-Man's identity now revealed, Peter asks Doctor Strange for help. When a spell goes wrong, dangerous foes from other worlds start to appear, forcing Peter to discover what it truly means to be Spider-Man.",
    genre: "Action",
  },
];

// Function to create a movie card with more details
function createMovieCard(movie) {
  const card = document.createElement("div");
  card.className = "movie-card";

  const img = document.createElement("img");
  img.src = movie.poster;
  img.alt = `${movie.title} Poster`;
  card.appendChild(img);

  const title = document.createElement("h2");
  title.textContent = movie.title;
  card.appendChild(title);

  const year = document.createElement("p");
  year.className = "movie-year";
  year.textContent = `Released: ${movie.year}`;
  card.appendChild(year);

  const genre = document.createElement("p");
  genre.className = "movie-genre";
  genre.textContent = `Genre: ${movie.genre}`;
  card.appendChild(genre);

  const description = document.createElement("p");
  description.className = "movie-description";
  description.textContent = movie.description;
  card.appendChild(description);

  return card;
}

// Function to display movies
function displayMovies(movieList) {
  const container = document.getElementById("movie-container");
  container.innerHTML = ""; // Clear existing content
  movieList.forEach((movie) => {
    const movieCard = createMovieCard(movie);
    container.appendChild(movieCard);
  });
}

// Function to filter movies by genre
function filterMoviesByGenre(genre) {
  const filteredMovies = movies.filter(
    (movie) => movie.genre === genre || genre === "All"
  );
  displayMovies(filteredMovies);
}

// Function to search movies by title
function searchMovies(query) {
  const searchedMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(query.toLowerCase())
  );
  displayMovies(searchedMovies);
}

// Initialize the site with all movies
document.addEventListener("DOMContentLoaded", () => {
  displayMovies(movies);

  // Add event listeners for filter and search
  document.getElementById("genre-select").addEventListener("change", (e) => {
    filterMoviesByGenre(e.target.value);
  });

  document.getElementById("search-input").addEventListener("input", (e) => {
    searchMovies(e.target.value);
  });
});

let sortBy = 'title'; // Default sorting

function sortMovies(movieList, criterion) {
    return movieList.slice().sort((a, b) => {
        if (criterion === 'title') {
            return a.title.localeCompare(b.title);
        } else if (criterion === 'year') {
            return a.year - b.year;
        }
    });
}

function updateSort() {
    sortBy = document.getElementById('sort-select').value;
    const sortedMovies = sortMovies(movies, sortBy);
    displayMovies(sortedMovies, currentPage);
}



function showMovieDetails(movie) {
    const modal = document.getElementById('movie-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');
    const modalPoster = document.getElementById('modal-poster');
    const modalYear = document.getElementById('modal-year');
    const modalGenre = document.getElementById('modal-genre');

    modalTitle.textContent = movie.title;
    modalDescription.textContent = movie.description;
    modalPoster.src = movie.poster;
    modalYear.textContent = `Released: ${movie.year}`;
    modalGenre.textContent = `Genre: ${movie.genre}`;

    modal.style.display = 'block'; // Show modal
}

function closeModal() {
    document.getElementById('movie-modal').style.display = 'none';
}

document.getElementById('modal-close').addEventListener('click', closeModal);


function createMovieCard(movie) {
    const card = document.createElement('div');
    card.className = 'movie-card';
    
    const img = document.createElement('img');
    img.src = movie.poster;
    img.alt = `${movie.title} Poster`;
    card.appendChild(img);

    const title = document.createElement('h2');
    title.textContent = movie.title;
    card.appendChild(title);

    const year = document.createElement('p');
    year.className = 'movie-year';
    year.textContent = `Released: ${movie.year}`;
    card.appendChild(year);

    const genre = document.createElement('p');
    genre.className = 'movie-genre';
    genre.textContent = `Genre: ${movie.genre}`;
    card.appendChild(genre);

    const description = document.createElement('p');
    description.className = 'movie-description';
    description.textContent = movie.description;
    card.appendChild(description);

    card.addEventListener('click', () => showMovieDetails(movie));

    return card;
}

