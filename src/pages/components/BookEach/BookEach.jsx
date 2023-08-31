import "./BookEach.css";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import { BiBook } from "react-icons/bi";
import { CiCalendarDate } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { addToCart } from "../../../redux/features/BookSlice";
import { useAddToCartMutation } from "../../../redux/api";

const BookEach = ({ book }) => {
  const { authorName, picture, title, genra, registered, id } = book;
  const dispatch = useDispatch();
  const { isLogin,user} = useSelector((state) => state.user);
  const [addToCartBook]= useAddToCartMutation()
  const navigate = useNavigate();
  const cartHandler = () => {
    if (!isLogin) {
      return navigate("/login");
    }
    dispatch(addToCartBook({book,user}))
  };
  return (
    <Col>
      <Card className="card">
        <Link to={`/books/${id}`} className="text-decoration-none">
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
            </Card.Text>
          </Card.Body>
        </Link>
        <div className="d-flex align-items-center justify-content-between">
          <button className="border-0 rounded fs-5 py-2" onClick={cartHandler}>
            Add to Cart
          </button>
          <button className="border-0 rounded fs-5 py-2"> Read Later</button>
        </div>
      </Card>
    </Col>
  );
};

export default BookEach;
