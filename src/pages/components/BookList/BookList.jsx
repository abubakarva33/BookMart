import "./BookList.css";
import Row from "react-bootstrap/Row";
import BookEach from "../BookEach/BookEach";
import { useSelector } from "react-redux";

const BookList = () => {
  const {filteredBooks } = useSelector((state) => state.book);
  return (
    <div>
      <>
        <h3>Popular Books</h3>
        <Row xs={1} xm={2} md={3} className="g-4 mt-1 mb-5">
          {filteredBooks?.length !=0 ? (
            filteredBooks?.map((book, idx) => <BookEach key={idx} book={book} />)
          ) : (
            <p> No book found with this criteria</p>
          )}
        </Row>
      </>
    </div>
  );
};

export default BookList;
