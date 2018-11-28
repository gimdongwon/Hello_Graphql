let movies = [
  { id: 1, name: "Dongwon", score: 155 },
  { id: 2, name: "jisun", score: 100 },
  { id: 3, name: "juyoung", score: 80 }
];

export const getMovies = () => movies;

export const getById = id => {
  const filterMovies = Movies.filter(movie => movie.id === id);
  return filterMovies[0];
};

export const deleteMovie = id => {
  const cleanedMovies = movies.filter(movie => movie.id !== id);
  if (movies.length > cleanedMovies.length) {
    movies = cleanedMovies;
    return true;
  } else {
    return false;
  }
};

export const addMovie = (name, score) => {
  const newMovie = {
    id: `${movies.length + 1}`,
    name,
    score
  };
  movies.push(newMovie);
  return newMovie;
};
