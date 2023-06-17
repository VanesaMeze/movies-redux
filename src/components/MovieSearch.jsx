import { useDispatch } from "react-redux";
import { setSearchTitle } from "../store/movies/slice";

export const MovieSearch = () => {
  const dispatch = useDispatch();

  const handleSearchTitle = (event) => {
    dispatch(setSearchTitle(event.target.value));
  };

  return (
    <span>
      Title: <input type="text" onChange={handleSearchTitle} />
    </span>
  );
};
