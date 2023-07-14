const movies = [
  {
    title: 'The Shawshank Redemption',
    director: 'Frank Darabont',
    year: 1994,
    rating: 9.3
  },
  {
    title: 'The Godfather',
    director: 'Francis Ford Coppola',
    year: 1972,
    rating: 9.2
  },
  // Add more movies here...
];

const movieContainer = document.getElementById('movie-container');
const searchInput = document.getElementById('search-input');

function displayMovies(movies) {
  movieContainer.innerHTML = '';

  movies.forEach(movie => {
    const movieCard = document.createElement('div');
    movieCard.classList.add('movie-card');

    const title = document.createElement('h2');
    title.classList.add('movie-title');
    title.textContent = movie.title;

    const details = document.createElement('p');
    details.classList.add('movie-details');
    details.innerHTML = `Director: ${movie.director}<br>Year: ${movie.year}<br>Rating: ${movie.rating}`;

    movieCard.appendChild(title);
    movieCard.appendChild(details);
    movieContainer.appendChild(movieCard);
  });
}

function searchMovies(query) {
  const filteredMovies = movies.filter(movie => {
    const title = movie.title.toLowerCase();
    return title.includes(query.toLowerCase());
  });

  displayMovies(filteredMovies);
}

searchInput.addEventListener('input', event => {
  const searchQuery = event.target.value;
  searchMovies(searchQuery);
});

// Display all movies initially
displayMovies(movies);
