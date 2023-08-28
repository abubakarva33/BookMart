import "./BookList.css";
import Row from "react-bootstrap/Row";
import { useGetBooksQuery } from "../../../redux/api";
import BookEach from "../BookEach/BookEach";

const BookList = () => {
  const { data, isLoading } = useGetBooksQuery();
  return (
    <div>
      {isLoading ? (
        <>Loading...</>
      ) : data ? (
        <>
          <h3>Popular Books</h3>
          <Row xs={1} xm={2} md={3} className="g-4 mt-1 mb-5">
            {data.map((book, idx) => (
              <BookEach key={idx} book={book}>

              </BookEach>
            ))}
          </Row>
        </>
      ) : null}
    </div>
  );
};

export default BookList;
