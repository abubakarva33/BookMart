import { Card, Col } from "react-bootstrap";
import "./CartBookList.css";
import { BiBook } from "react-icons/bi";
import { CiCalendarDate } from "react-icons/ci";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../../redux/features/BookSlice";
import { useRemoveCartDataMutation } from "../../../redux/api";


const CartBookList = ({ book }) => {
    console.log(book.id);
  const { authorName, picture, title, genra, registered } = book.book;
  const [removeCartData]=useRemoveCartDataMutation()
  const dispatch = useDispatch();
  return (
    <Col>
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
              <div className="d-flex align-items-center justify-content-center">
                <button
                  className="border-0 rounded fs-5 py-2"
                  onClick={() => dispatch(removeCartData(book))}
                >
                  Remove from cart
                </button>
              </div>
            </Card.Text>
          </Card.Body>
        </Card>
    </Col>
  );
};

export default CartBookList;
