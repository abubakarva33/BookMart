import { useSelector } from "react-redux";
import "./Cart.css";
import { Row } from "react-bootstrap";

const Cart = () => {
    const {booksInCarts}=useSelector(state=>state.book)
    console.log(booksInCarts);
    return (
        <Row xs={1} xm={2} md={3} className="g-4 mt-1 mb-5">
          {booksInCarts?.length !=0 ? (
            booksInCarts?.map((book, idx) => <BookEach key={idx} book={book} />)
          ) : (
            <p> No book found with this criteria</p>
          )}
        </Row>
    );
};

export default Cart;