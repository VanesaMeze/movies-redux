import { API } from "../shared/api";

export const getMovies = (params) => {
  return API.get("/movies", { params });
};

export const getMovieById = (id) => {
  return API.get(`/movies/${id}`);
};

export const editMovieById = (id, movie) => {
  return API.patch(`/movies/${id}`, movie);
};

export const postMovies = (
  title,
  director,
  imageUrl,
  duration,
  releaseDate,
  genre
) => {
  return API.post("/movies", {
    title,
    director,
    imageUrl,
    duration,
    releaseDate,
    genre,
  });
};

export const deleteMovieById = (id) => {
  return API.delete(`/movies/${id}`);
};
