import { useEffect } from "react";
import { getMovies } from "../service/moviesService";
import { useDispatch, useSelector } from "react-redux";
import {
  addToSelectedMoviesList,
  removeFromSelectedMoviesList,
  resetSelectedMoviesList,
  setMoviesList,
  setLastPage,
  setPage,
} from "../store/movies/slice";
import {
  selectMoviesList,
  selectCurrentPage,
  selectLastPage,
  selectSearchTitle,
  selectSelectedMoviesCount,
} from "../store/movies/selectors";
// import AddMovies from "./AddMovies";
import { MovieRow } from "./MovieRow";

const AppMovies = () => {
  const dispatch = useDispatch();
  const movies = useSelector(selectMoviesList);
  const selectedMovieCount = useSelector(selectSelectedMoviesCount);
  const searchedTitle = useSelector(selectSearchTitle);
  const currentPage = useSelector(selectCurrentPage);
  const lastPage = useSelector(selectLastPage);

  useEffect(() => {
    getMovies({
      page: currentPage,
      title: searchedTitle,
    }).then(({ data }) => {
      dispatch(setMoviesList(data.data));
      dispatch(setLastPage(data.last_page));
    });
  }, [searchedTitle, currentPage]);

  const handleSelectAll = () => {
    dispatch(resetSelectedMoviesList());
    movies.forEach((movie) => {
      dispatch(addToSelectedMoviesList(movie.id));
    });
  };
  const handleDeSelectAll = () => {
    movies.forEach((movie) => {
      dispatch(removeFromSelectedMoviesList(movie.id));
    });
  };

  const handleClickSort = (sort_by, sort_order) => {
    getMovies({
      title: searchedTitle,
      sort_by,
      sort_order,
    }).then(({ data }) => {
      dispatch(setMoviesList(data.data));
      dispatch(setLastPage(data.last_page));
    });
  };

  const handleChangePage = (isNext) => {
    if (isNext) {
      dispatch(setPage(currentPage + 1));
    } else if (currentPage !== 1) {
      dispatch(setPage(currentPage - 1));
    }
  };

  return (
    <>
      <div>
        <button onClick={() => handleClickSort("name", "asc")}>Name Asc</button>
        <button onClick={() => handleClickSort("name", "desc")}>
          Name Desc
        </button>
        <button onClick={() => handleClickSort("duration", "asc")}>
          Duration Asc
        </button>
        <button onClick={() => handleClickSort("duration", "desc")}>
          Duration Desc
        </button>
      </div>
      <div>Selected movies: {selectedMovieCount}</div>
      <div>
        <button onClick={handleSelectAll}>Select All</button>
        <button onClick={handleDeSelectAll}>Deselect All</button>
      </div>
      <div>
        <button
          onClick={() => handleChangePage(false)}
          disabled={currentPage === 1}
        >
          Previous Page
        </button>
        <button
          onClick={() => handleChangePage(true)}
          disabled={currentPage === lastPage}
        >
          Next page
        </button>
      </div>
      <ul style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
        {movies && movies.length ? (
          movies.map((movie) => {
            console.log(movie);
            return <MovieRow key={movie.id} movie={movie} />;
          })
        ) : (
          <div>Nema filmova koji podlezu kriterijumu</div>
        )}
      </ul>
    </>
  );
};

export default AppMovies;
