import "./BookEach.css";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import { BiBook } from "react-icons/bi";
import { CiCalendarDate } from "react-icons/ci";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../../../redux/features/BookSlice";

const BookEach = ({ book }) => {
  const dispatch = useDispatch();
  const { authorName, picture, title, genra, registered, id } = book;
  return (
    <Col>
      <Link to={`/books/${id}`} className="text-decoration-none">
        <Card className="card">
          <Card.Img variant="top" src={picture} className="cardImg" />
          <Card.Body>
            <Card.Title>Title: {title}</Card.Title>
            <Card.Text>
              <p>Author: {authorName}</p>
              <div className="d-flex align-items-center justify-content-between">
                <p>
                  <BiBook /> {genra}
                </p>
                <p>
                  <CiCalendarDate /> {registered}
                </p>
              </div>
              <div className="d-flex align-items-center justify-content-between">
                <button
                  className="border-0 rounded fs-5 py-2"
                  onClick={() => dispatch(addToCart(book))}
                >
                  Add to Cart
                </button>
                <button className="border-0 rounded fs-5 py-2"> Read Later</button>
              </div>
            </Card.Text>
          </Card.Body>
        </Card>
      </Link>
    </Col>
  );
};

export default BookEach;
