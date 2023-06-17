// import { Link } from "react-router-dom";

// const Header = () => {
//   return (
//     <header className="p-3">
//       <div className="container">
//         <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
//           <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
//             <li className="nav-item">
//               <Link className="nav-link active" to={`/`}>
//                 Home
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link active" to={`/movies`}>
//                 Movies
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link active" to={`/addMovie`}>
//                 Add movie
//               </Link>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;

import { Link } from "react-router-dom";
import { MovieSearch } from "../components/MovieSearch";

const Header = () => {
  return (
    <div className="container">
      <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
        <a
          href="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
        >
          <span className="fs-4">Movies app</span>
        </a>
        <ul className="nav nav-pills">
          <li className="nav-item">
            <Link to="/movies" className="nav-link" aria-current="page">
              Movies
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/add" className="nav-link" aria-current="page">
              Add movie
            </Link>
          </li>
        </ul>
        <MovieSearch />
      </header>
    </div>
  );
};
export default Header;
