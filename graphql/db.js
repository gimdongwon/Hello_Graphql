let movies = [
  { id: 1, name: "Dongwon", score: 155 },
  { id: 2, name: "jisun", score: 100 },
  { id: 3, name: "juyoung", score: 80 }
];

export const getMovies = () => movies;

export const getById = id => {
  const filterMovies = Movies.filter(movie => movie.id === String(id));
  return filterMovies[0];
};

export const deleteMovies = id => {
  const cleanedMovies = movies.filter(movie => movie.id !== String(id));
  if (movies.length > cleanedMovies.legnth) {
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
