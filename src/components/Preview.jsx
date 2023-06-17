import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function Preview(props) {
  return (
    <Modal
      {...props}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      backdrop="static"
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Car preview
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Id: {movie.id}</p>
        <p>Title: {movie.title}</p>
        <p>Director: {movie.director}</p>
        <p>Image url: {movie.imageUrl}</p>
        <p>Duration: {movie.duration}</p>
        <p>Release date: {movie.releaseDate}</p>
        <p>Genre: {movie.genre}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
export default Preview;
